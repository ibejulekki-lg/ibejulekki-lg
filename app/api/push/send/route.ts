import { NextResponse } from 'next/server'
import { createHash, timingSafeEqual } from 'crypto'
import webpush from 'web-push'
import { writeClient } from '@/lib/sanityWrite'

export const runtime = 'nodejs'
export const maxDuration = 60

/* POST - sends a push notification to every stored subscription.
   Protected by PUSH_SECRET, given either as an "x-push-secret" header or a
   "?secret=" query parameter (for the Sanity webhook). Body is the webhook
   projection: { title, slug }. Dead subscriptions (410/404 from the push
   service) are cleaned up automatically. */

function secretsMatch(given: string, expected: string) {
  const a = createHash('sha256').update(given).digest()
  const b = createHash('sha256').update(expected).digest()
  return timingSafeEqual(a, b)
}

export async function POST(req: Request) {
  const expected = process.env.PUSH_SECRET
  const vapidPublic = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
  const vapidPrivate = process.env.VAPID_PRIVATE_KEY
  if (!expected || !vapidPublic || !vapidPrivate) {
    return NextResponse.json({ ok: false, error: 'Push is not configured yet.' }, { status: 503 })
  }

  const url = new URL(req.url)
  const given = req.headers.get('x-push-secret') ?? url.searchParams.get('secret') ?? ''
  if (!given || !secretsMatch(given, expected)) {
    return NextResponse.json({ ok: false, error: 'Unauthorized.' }, { status: 401 })
  }

  if (!writeClient) {
    return NextResponse.json({ ok: false, error: 'Sanity is not configured.' }, { status: 503 })
  }

  let body: any = null
  try {
    body = await req.json()
  } catch {}
  const title = String(body?.title ?? '').slice(0, 140) || 'New update published'
  const slug = String(body?.slug ?? '').replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 200)
  const payload = JSON.stringify({
    title: 'Ibeju-Lekki Local Government',
    body: title,
    url: slug ? `/news/${slug}` : '/news',
  })

  let subs: { _id: string; endpoint: string; keys: { p256dh: string; auth: string } }[] = []
  try {
    subs = (await writeClient.fetch('*[_type == "pushSubscription"]{ _id, endpoint, keys }')) ?? []
  } catch {
    return NextResponse.json({ ok: false, error: 'Could not load subscriptions.' }, { status: 500 })
  }
  if (subs.length === 0) {
    return NextResponse.json({ ok: true, sent: 0, failed: 0, removed: 0, total: 0 })
  }

  webpush.setVapidDetails('mailto:info@ibejulekki.lg.gov.ng', vapidPublic, vapidPrivate)

  let sent = 0
  let failed = 0
  const dead: string[] = []
  const CHUNK = 50
  for (let i = 0; i < subs.length; i += CHUNK) {
    const batch = subs.slice(i, i + CHUNK)
    const results = await Promise.allSettled(
      batch.map((s) => webpush.sendNotification({ endpoint: s.endpoint, keys: s.keys }, payload)),
    )
    results.forEach((r, j) => {
      if (r.status === 'fulfilled') {
        sent++
        return
      }
      failed++
      const code = (r.reason as any)?.statusCode
      if (code === 404 || code === 410) dead.push(batch[j]._id)
    })
  }

  let removed = 0
  for (const id of dead) {
    try {
      await writeClient.delete(id)
      removed++
    } catch {}
  }

  return NextResponse.json({ ok: true, sent, failed, removed, total: subs.length })
}

import { NextResponse } from 'next/server'
import { createHash } from 'crypto'
import { writeClient } from '@/lib/sanityWrite'

export const runtime = 'nodejs'

const idFor = (endpoint: string) =>
  'push-' + createHash('sha256').update(endpoint).digest('hex').slice(0, 24)

/* POST { subscription } - stores a browser push subscription in Sanity.
   Idempotent via an id derived from the push endpoint. */
export async function POST(req: Request) {
  if (!writeClient) {
    return NextResponse.json(
      { ok: false, error: 'Push notifications are not configured yet.' },
      { status: 503 },
    )
  }
  let body: any = null
  try {
    body = await req.json()
  } catch {}
  const sub = body?.subscription
  const endpoint = String(sub?.endpoint ?? '')
  const p256dh = String(sub?.keys?.p256dh ?? '')
  const auth = String(sub?.keys?.auth ?? '')
  if (!endpoint.startsWith('https://') || endpoint.length > 1024 || !p256dh || !auth) {
    return NextResponse.json({ ok: false, error: 'Invalid subscription payload.' }, { status: 400 })
  }
  try {
    await writeClient.createIfNotExists({
      _id: idFor(endpoint),
      _type: 'pushSubscription',
      endpoint,
      keys: { p256dh, auth },
      userAgent: (req.headers.get('user-agent') ?? '').slice(0, 256),
      subscribedAt: new Date().toISOString(),
    })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: 'Could not save the subscription.' }, { status: 500 })
  }
}

/* DELETE { endpoint } - removes a push subscription (unsubscribe). */
export async function DELETE(req: Request) {
  if (!writeClient) {
    return NextResponse.json({ ok: false }, { status: 503 })
  }
  let body: any = null
  try {
    body = await req.json()
  } catch {}
  const endpoint = String(body?.endpoint ?? '')
  if (!endpoint.startsWith('https://')) {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
  try {
    await writeClient.delete(idFor(endpoint))
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}

import { NextResponse } from 'next/server'
import { createHash } from 'crypto'
import { writeClient } from '@/lib/sanityWrite'

export const runtime = 'nodejs'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/* POST { email } - stores a newsletter subscriber in Sanity.
   Idempotent: the document id is derived from the email, so subscribing
   twice never creates duplicates and never reveals who is already on
   the list. */
export async function POST(req: Request) {
  if (!writeClient) {
    return NextResponse.json(
      { ok: false, error: 'Subscriptions are not configured yet. Please try again later.' },
      { status: 503 },
    )
  }
  let body: any = null
  try {
    body = await req.json()
  } catch {}
  const email = String(body?.email ?? '').trim().toLowerCase()
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ ok: false, error: 'Please enter a valid email address.' }, { status: 400 })
  }
  const id = 'subscriber-' + createHash('sha256').update(email).digest('hex').slice(0, 24)
  try {
    await writeClient.createIfNotExists({
      _id: id,
      _type: 'subscriber',
      email,
      subscribedAt: new Date().toISOString(),
      source: 'website',
      active: true,
    })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Could not save your subscription. Please try again.' },
      { status: 500 },
    )
  }
}

import { NextResponse } from 'next/server'
import { writeClient } from '@/lib/sanityWrite'

export const runtime = 'nodejs'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/* POST { name, email, subject, message } - stores a contact form submission in
   Sanity so staff can read it in the studio under Audience > Contact Messages. */
export async function POST(req: Request) {
  if (!writeClient) {
    return NextResponse.json(
      { ok: false, error: 'The contact form is not configured yet. Please email the council directly.' },
      { status: 503 },
    )
  }
  let body: any = null
  try {
    body = await req.json()
  } catch {}

  const name = String(body?.name ?? '').trim().slice(0, 120)
  const email = String(body?.email ?? '').trim().toLowerCase().slice(0, 254)
  const subject = String(body?.subject ?? '').trim().slice(0, 160)
  const message = String(body?.message ?? '').trim().slice(0, 5000)

  if (!name || !message) {
    return NextResponse.json({ ok: false, error: 'Please provide your name and a message.' }, { status: 400 })
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: 'Please enter a valid email address.' }, { status: 400 })
  }

  try {
    await writeClient.create({
      _type: 'contactMessage',
      name,
      email,
      subject: subject || 'No subject',
      message,
      receivedAt: new Date().toISOString(),
      handled: false,
    })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Could not send your message. Please try again.' },
      { status: 500 },
    )
  }
}

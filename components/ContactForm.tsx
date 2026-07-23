'use client'

import { useState } from 'react'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')

  const field =
    'w-full rounded-xl border border-brand-ink/15 bg-white px-4 py-3 text-[14px] text-brand-ink placeholder:text-brand-ink/35 focus:outline-none focus:border-brand-yellow transition-colors'

  async function submit() {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setState('error')
      setError('Please fill in your name, email and message.')
      return
    }
    setState('sending')
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) {
        setState('error')
        setError(data.error || 'Could not send your message. Please try again.')
        return
      }
      setState('sent')
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
    } catch {
      setState('error')
      setError('Could not send your message. Please try again.')
    }
  }

  if (state === 'sent') {
    return (
      <div className="rounded-2xl border border-brand-yellow/40 bg-brand-yellow/[0.07] p-6 sm:p-8 text-center">
        <CheckCircle2 size={28} strokeWidth={2} className="mx-auto mb-3 text-brand-amber" />
        <h3 className="text-[15px] font-bold text-brand-ink">Message received</h3>
        <p className="mt-2 text-[13.5px] leading-relaxed text-brand-ink/60">
          Thank you for reaching out. The council will respond to you as soon as possible.
        </p>
        <button
          onClick={() => setState('idle')}
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-brand-ink/15 px-5 py-2.5 text-[12.5px] font-semibold text-brand-ink transition-colors hover:border-brand-yellow"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-[12px] font-bold text-brand-ink">
            Your Name <span className="text-brand-red">*</span>
          </label>
          <input id="cf-name" type="text" value={name} onChange={(e) => setName(e.target.value)} className={field} placeholder="Full name" autoComplete="name" />
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-1.5 block text-[12px] font-bold text-brand-ink">
            Your Email <span className="text-brand-red">*</span>
          </label>
          <input id="cf-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={field} placeholder="you@example.com" autoComplete="email" />
        </div>
      </div>
      <div>
        <label htmlFor="cf-subject" className="mb-1.5 block text-[12px] font-bold text-brand-ink">Subject</label>
        <input id="cf-subject" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} className={field} placeholder="What is this about" />
      </div>
      <div>
        <label htmlFor="cf-message" className="mb-1.5 block text-[12px] font-bold text-brand-ink">
          Your Message <span className="text-brand-red">*</span>
        </label>
        <textarea id="cf-message" rows={6} value={message} onChange={(e) => setMessage(e.target.value)} className={field} placeholder="How can the council help you" />
      </div>

      {state === 'error' && error ? (
        <div className="flex items-start gap-2.5 rounded-xl border border-brand-red/25 bg-brand-red/[0.04] px-4 py-3">
          <AlertCircle size={16} strokeWidth={2} className="mt-0.5 flex-shrink-0 text-brand-red" />
          <span className="text-[12.5px] leading-snug text-brand-ink/70">{error}</span>
        </div>
      ) : null}

      <button
        onClick={submit}
        disabled={state === 'sending'}
        className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-6 py-3.5 text-[13px] font-bold text-black transition-colors hover:bg-brand-ink hover:text-brand-yellow disabled:opacity-60"
      >
        {state === 'sending' ? 'Sending...' : 'Send Message'}
        <Send size={15} strokeWidth={2.5} />
      </button>
    </div>
  )
}

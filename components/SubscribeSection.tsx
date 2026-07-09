'use client'
import { useState } from 'react'
import { Bell, Mail, CheckCircle2, ArrowRight } from 'lucide-react'

export default function SubscribeSection() {
  const [email, setEmail]           = useState('')
  const [submitted, setSubmitted]   = useState(false)
  const [pushGranted, setPushGranted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  async function handlePush() {
    if (!('Notification' in window)) return
    const permission = await Notification.requestPermission()
    if (permission === 'granted') setPushGranted(true)
  }

  return (
    <section className="bg-[#111111] py-16 sm:py-20 border-t border-white/[0.05]" aria-labelledby="subscribe-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-brand-yellow/70">Stay Connected</span>
            </div>
            <h2 id="subscribe-heading" className="text-[clamp(1.7rem,3.5vw,2.4rem)] font-extrabold text-white leading-[1.1] tracking-tight mb-4">
              Council updates,<br /><span className="text-brand-yellow">delivered to you.</span>
            </h2>
            <p className="text-[14px] text-white/50 leading-[1.8] max-w-[420px]">
              Subscribe for news, emergency alerts, and community programmes. Push notifications, no app needed.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {['Breaking news','Emergency alerts','New programmes','Council notices'].map((tag) => (
                <span key={tag} className="text-[10.5px] font-semibold text-white/50 border border-white/10 rounded-full px-3 py-1">{tag}</span>
              ))}
            </div>
          </div>
          <div>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="mb-4" noValidate>
                <label htmlFor="sub-email" className="block text-[11.5px] font-bold uppercase tracking-[0.18em] text-white/50 mb-2.5">Email Address</label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail size={15} strokeWidth={2} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
                    <input id="sub-email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="your@email.com" required
                      className="w-full pl-10 pr-4 py-3.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-white text-[13px] placeholder:text-white/30 focus:outline-none focus:border-brand-yellow/60 transition-colors font-medium"
                    />
                  </div>
                  <button type="submit" className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-brand-yellow text-black text-[13px] font-bold rounded-full hover:bg-[#E08E0B] active:scale-95 transition-all duration-200">
                    Subscribe <ArrowRight size={14} strokeWidth={2.5} />
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex items-center gap-3 bg-brand-yellow/10 border border-brand-yellow/25 rounded-2xl px-5 py-4 mb-4">
                <CheckCircle2 size={20} className="text-brand-yellow flex-shrink-0" strokeWidth={2} />
                <div>
                  <div className="text-[13px] font-bold text-white mb-0.5">You&apos;re subscribed</div>
                  <div className="text-[11.5px] text-white/50">You&apos;ll receive updates at {email}</div>
                </div>
              </div>
            )}
            <button onClick={handlePush} disabled={pushGranted}
              className={`w-full flex items-center justify-center gap-2.5 py-3.5 border rounded-full text-[13px] font-semibold transition-all duration-200 active:scale-95 ${pushGranted ? 'border-brand-yellow/30 text-brand-yellow cursor-default' : 'border-white/[0.12] text-white/60 hover:border-white/30 hover:text-white'}`}
            >
              <Bell size={15} strokeWidth={2} />
              {pushGranted ? 'Push notifications enabled' : 'Enable Push Notifications'}
            </button>
            <p className="text-[10.5px] text-white/25 text-center mt-3">We respect your privacy. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

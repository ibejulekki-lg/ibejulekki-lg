'use client'
import { useEffect, useState } from 'react'
import { Bell, BellRing, BellOff, Mail, CheckCircle2, AlertCircle, ArrowRight, Loader2 } from 'lucide-react'

type EmailStatus = 'idle' | 'loading' | 'success' | 'error'
type PushStatus = 'checking' | 'unsupported' | 'idle' | 'loading' | 'subscribed' | 'denied' | 'error'

function urlBase64ToUint8Array(base64: string) {
  const padding = '='.repeat((4 - (base64.length % 4)) % 4)
  const b64 = (base64 + padding).replace(/-/g, '+').replace(/_/g, '/')
  const raw = window.atob(b64)
  const out = new Uint8Array(raw.length)
  for (let i = 0; i < raw.length; i++) out[i] = raw.charCodeAt(i)
  return out
}

export default function SubscribeSection() {
  const [email, setEmail]             = useState('')
  const [emailStatus, setEmailStatus] = useState<EmailStatus>('idle')
  const [emailError, setEmailError]   = useState('')
  const [pushStatus, setPushStatus]   = useState<PushStatus>('checking')
  const [pushMsg, setPushMsg]         = useState('')
  const [iosHint, setIosHint]         = useState(false)

  useEffect(() => {
    const supported = 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window
    const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent)
    const standalone =
      window.matchMedia('(display-mode: standalone)').matches || (navigator as any).standalone === true
    if (isIos && !standalone) setIosHint(true)
    if (!supported) {
      setPushStatus('unsupported')
      return
    }
    if (Notification.permission === 'denied') {
      setPushStatus('denied')
      return
    }
    navigator.serviceWorker
      .register('/sw.js')
      .then((reg) => reg.pushManager.getSubscription())
      .then((sub) => setPushStatus(sub ? 'subscribed' : 'idle'))
      .catch(() => setPushStatus('idle'))
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || emailStatus === 'loading') return
    setEmailStatus('loading')
    setEmailError('')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json().catch(() => null)
      if (res.ok && data?.ok) {
        setEmailStatus('success')
      } else {
        setEmailStatus('error')
        setEmailError(data?.error ?? 'Something went wrong. Please try again.')
      }
    } catch {
      setEmailStatus('error')
      setEmailError('Network error. Please check your connection and try again.')
    }
  }

  async function handlePush() {
    if (pushStatus !== 'idle' && pushStatus !== 'error') return
    setPushStatus('loading')
    setPushMsg('')
    try {
      const key = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
      if (!key) {
        setPushStatus('error')
        setPushMsg('Push notifications are not configured yet.')
        return
      }
      await navigator.serviceWorker.register('/sw.js')
      const reg = await navigator.serviceWorker.ready
      const permission = await Notification.requestPermission()
      if (permission !== 'granted') {
        setPushStatus('denied')
        return
      }
      let sub = await reg.pushManager.getSubscription()
      if (!sub) {
        sub = await reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(key),
        })
      }
      const res = await fetch('/api/push/subscribe', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ subscription: sub.toJSON() }),
      })
      const data = await res.json().catch(() => null)
      if (res.ok && data?.ok) {
        setPushStatus('subscribed')
      } else {
        setPushStatus('error')
        setPushMsg(data?.error ?? 'Could not enable notifications. Please try again.')
      }
    } catch {
      setPushStatus('error')
      setPushMsg('Could not enable notifications. Please try again.')
    }
  }

  const pushDisabled = pushStatus !== 'idle' && pushStatus !== 'error'
  const pushLabel =
    pushStatus === 'subscribed'  ? 'Push notifications enabled'
    : pushStatus === 'loading'   ? 'Enabling notifications...'
    : pushStatus === 'denied'    ? 'Notifications blocked in browser settings'
    : pushStatus === 'unsupported' ? 'Notifications not supported on this browser'
    : 'Enable Push Notifications'
  const PushIcon =
    pushStatus === 'subscribed' ? BellRing
    : pushStatus === 'loading'  ? Loader2
    : pushStatus === 'denied' || pushStatus === 'unsupported' ? BellOff
    : Bell

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
            {emailStatus === 'success' ? (
              <div className="flex items-center gap-3 bg-brand-yellow/10 border border-brand-yellow/25 rounded-2xl px-5 py-4 mb-4">
                <CheckCircle2 size={20} className="text-brand-yellow flex-shrink-0" strokeWidth={2} />
                <div>
                  <div className="text-[13px] font-bold text-white mb-0.5">You are subscribed</div>
                  <div className="text-[11.5px] text-white/50">Updates will be sent to {email}</div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mb-4" noValidate>
                <label htmlFor="sub-email" className="block text-[11.5px] font-bold uppercase tracking-[0.18em] text-white/50 mb-2.5">Email Address</label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail size={15} strokeWidth={2} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
                    <input id="sub-email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="your@email.com" required
                      disabled={emailStatus === 'loading'}
                      className="w-full pl-10 pr-4 py-3.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-white text-[13px] placeholder:text-white/30 focus:outline-none focus:border-brand-yellow/60 transition-colors font-medium disabled:opacity-60"
                    />
                  </div>
                  <button type="submit" disabled={emailStatus === 'loading'}
                    className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-brand-yellow text-black text-[13px] font-bold rounded-full hover:bg-[#E08E0B] active:scale-95 transition-all duration-200 disabled:opacity-70 disabled:active:scale-100"
                  >
                    {emailStatus === 'loading' ? (
                      <>Subscribing <Loader2 size={14} strokeWidth={2.5} className="animate-spin" /></>
                    ) : (
                      <>Subscribe <ArrowRight size={14} strokeWidth={2.5} /></>
                    )}
                  </button>
                </div>
                {emailStatus === 'error' && emailError ? (
                  <div className="flex items-center gap-2 mt-2.5 text-[11.5px] text-red-400">
                    <AlertCircle size={13} strokeWidth={2} className="flex-shrink-0" />
                    {emailError}
                  </div>
                ) : null}
              </form>
            )}

            <button onClick={handlePush} disabled={pushDisabled}
              className={`w-full flex items-center justify-center gap-2.5 py-3.5 border rounded-full text-[13px] font-semibold transition-all duration-200 active:scale-95 ${
                pushStatus === 'subscribed'
                  ? 'border-brand-yellow/30 text-brand-yellow cursor-default active:scale-100'
                  : pushStatus === 'denied' || pushStatus === 'unsupported'
                    ? 'border-white/[0.08] text-white/30 cursor-default active:scale-100'
                    : 'border-white/[0.12] text-white/60 hover:border-white/30 hover:text-white disabled:opacity-70'
              }`}
            >
              <PushIcon size={15} strokeWidth={2} className={pushStatus === 'loading' ? 'animate-spin' : ''} />
              {pushLabel}
            </button>
            {pushStatus === 'error' && pushMsg ? (
              <div className="flex items-center justify-center gap-2 mt-2.5 text-[11.5px] text-red-400">
                <AlertCircle size={13} strokeWidth={2} className="flex-shrink-0" />
                {pushMsg}
              </div>
            ) : null}
            {iosHint && pushStatus !== 'subscribed' ? (
              <p className="text-[10.5px] text-white/35 text-center mt-3 leading-relaxed">
                On iPhone or iPad: open this site in Safari, tap Share, then <span className="text-white/55 font-semibold">Add to Home Screen</span>, and enable notifications from the installed app.
              </p>
            ) : null}
            <p className="text-[10.5px] text-white/25 text-center mt-3">We respect your privacy. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

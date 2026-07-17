'use client'

import { useState } from 'react'
import { Share2, Check } from 'lucide-react'

export default function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false)

  async function handleShare() {
    const url = window.location.href
    if (navigator.share) {
      try {
        await navigator.share({ title, url })
      } catch {
        /* user closed the share sheet, nothing to do */
      }
      return
    }
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable (very old browser or http) */
    }
  }

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 text-[12px] font-semibold text-brand-ink/50 hover:text-brand-amber transition-colors"
    >
      {copied ? <Check size={13} strokeWidth={2} /> : <Share2 size={13} strokeWidth={2} />}
      {copied ? 'Link copied' : 'Share this article'}
    </button>
  )
}

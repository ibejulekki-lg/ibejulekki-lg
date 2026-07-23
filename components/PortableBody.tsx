import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { Download } from 'lucide-react'
import { urlFor } from '@/lib/sanity'

function formatBytes(bytes?: number) {
  if (!bytes || bytes <= 0) return ''
  const mb = bytes / (1024 * 1024)
  if (mb >= 1) return `${mb.toFixed(1)} MB`
  return `${Math.max(1, Math.round(bytes / 1024))} KB`
}

const components: any = {
  block: {
    normal: ({ children }: any) => <p className="mb-5 text-[15px] sm:text-[16px] leading-[1.85] text-brand-ink/75">{children}</p>,
    h2: ({ children }: any) => <h2 className="mt-9 mb-3 text-[20px] sm:text-[22px] font-bold text-brand-ink tracking-tight">{children}</h2>,
    h3: ({ children }: any) => <h3 className="mt-7 mb-2 text-[17px] sm:text-[18px] font-bold text-brand-ink">{children}</h3>,
    h4: ({ children }: any) => <h4 className="mt-6 mb-2 text-[15px] font-bold text-brand-ink">{children}</h4>,
    blockquote: ({ children }: any) => <blockquote className="my-6 border-l-[3px] border-brand-yellow pl-5 italic text-brand-ink/70">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="mb-5 ml-5 list-disc space-y-2 text-[15px] text-brand-ink/75">{children}</ul>,
    number: ({ children }: any) => <ol className="mb-5 ml-5 list-decimal space-y-2 text-[15px] text-brand-ink/75">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="leading-[1.8]">{children}</li>,
    number: ({ children }: any) => <li className="leading-[1.8]">{children}</li>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold text-brand-ink">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    underline: ({ children }: any) => <span className="underline">{children}</span>,
    link: ({ children, value }: any) => {
      const openNew = value?.blank !== false
      return (
        <a
          href={value?.href}
          {...(openNew ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="text-brand-amber underline underline-offset-2 hover:text-brand-ink transition-colors"
        >
          {children}
        </a>
      )
    },
  },
  types: {
    fileDownload: ({ value }: any) => {
      if (!value?.url) return null
      const meta = [value.fileName, formatBytes(value.size)].filter(Boolean).join(' - ')
      return (
        <a
          href={value.url}
          target="_blank"
          rel="noopener noreferrer"
          className="my-6 flex items-center gap-3 rounded-xl border border-brand-ink/10 bg-brand-cream px-4 py-3.5 no-underline transition-colors hover:border-brand-yellow/50 hover:bg-brand-yellow/[0.06]"
        >
          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-yellow">
            <Download size={17} strokeWidth={2.2} className="text-black" />
          </span>
          <span className="min-w-0">
            <span className="block text-[13.5px] font-bold text-brand-ink leading-tight">{value.label || 'Download file'}</span>
            {meta ? <span className="block text-[11px] text-brand-ink/45 truncate">{meta}</span> : null}
          </span>
        </a>
      )
    },
    gallery: ({ value }: any) => {
      const imgs = (value?.images ?? []).filter((im: any) => im?.asset)
      if (imgs.length === 0) return null
      return (
        <figure className="my-7">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
            {imgs.map((im: any, i: number) => (
              <div key={im._key ?? i} className="relative aspect-square overflow-hidden rounded-xl border border-brand-ink/10">
                <Image src={urlFor(im).width(700).height(700).fit('crop').auto('format').url()} alt={im.alt || ''} fill className="object-cover" sizes="(max-width: 640px) 50vw, 33vw" />
              </div>
            ))}
          </div>
          {value.caption ? <figcaption className="mt-2 text-[12px] text-brand-ink/45">{value.caption}</figcaption> : null}
        </figure>
      )
    },
    image: ({ value }: any) =>
      value?.asset ? (
        <figure className="my-7">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-brand-ink/10">
            <Image src={urlFor(value).width(1000).auto('format').url()} alt={value.alt || ''} fill className="object-cover" sizes="(max-width: 896px) 100vw, 896px" />
          </div>
          {value.caption ? <figcaption className="mt-2 text-[12px] text-brand-ink/45">{value.caption}</figcaption> : null}
        </figure>
      ) : null,
  },
}

export default function PortableBody({ value }: { value: any }) {
  return <PortableText value={value} components={components} />
}

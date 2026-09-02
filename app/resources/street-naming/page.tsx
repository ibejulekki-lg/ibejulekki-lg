import Link from 'next/link'
import { ArrowRight, ArrowUpRight, MapPinned, FileCheck2, RefreshCcw, Mail, Building2 } from 'lucide-react'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Street Naming & Registration Management System (SNRMS) | Ibeju-Lekki Local Government',
  description:
    'Apply for street names online, track every stage of the process, pay securely, and receive automated notifications and certificates through SNRMS, Ibeju-Lekki Local Government.',
}

const CATEGORIES = [
  {
    icon: MapPinned,
    title: 'New Street Name Registration',
    body: 'Applicable to streets that are not yet named or registered.',
  },
  {
    icon: FileCheck2,
    title: 'Validation of an Existing Registration',
    body: 'For streets that are already named, but the names are not yet properly captured in the official local government street registry.',
  },
  {
    icon: RefreshCcw,
    title: 'Renewal of an Expired Registration',
    body: 'To retain a name whose registration has lapsed.',
  },
]

const CONTACTS = [
  { role: 'Local Government Chairman', email: 'chairman@snrms.com' },
  { role: 'Council Treasurer (Finance)', email: 'finance@snrms.com' },
  { role: 'Street Naming Committee', email: 'committee@snrms.com' },
]

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="border-b border-black/10 bg-brand-cream">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
            <nav className="flex items-center flex-wrap gap-1.5 text-[11px] sm:text-[12px] text-black/45 mb-5" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-brand-ink transition-colors">Home</Link>
              <span className="text-black/30">/</span>
              <span>Resources</span>
              <span className="text-black/30">/</span>
              <span className="text-brand-ink font-semibold">SNRMS</span>
            </nav>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">Digital Services</span>
            </div>
            <h1 className="text-[clamp(1.8rem,5vw,2.9rem)] font-extrabold text-brand-ink tracking-tight leading-tight">
              Street Naming &amp; Registration<br className="hidden sm:block" /> Management System
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] sm:text-[16px] text-black/60 leading-[1.85]">
              SNRMS is the official digital platform for street naming in Ibeju-Lekki Local Government
              Area. Apply for street names online, track every stage of the process, pay securely
              through the gateway, and receive automated notifications and certificates &mdash; without
              making repeated trips to the council.
            </p>
            <a
              href="https://snrms.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-5 py-2.5 text-[13px] font-bold text-black hover:bg-brand-hover transition-colors"
            >
              Visit SNRMS Portal <ArrowUpRight size={14} strokeWidth={2.5} />
            </a>
          </div>
        </section>

        {/* Application categories */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
            <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">How It Works</span>
          </div>
          <h2 className="text-[clamp(1.3rem,3.4vw,1.9rem)] font-extrabold text-brand-ink tracking-tight mb-5">
            Three categories of application
          </h2>
          <p className="max-w-3xl text-[14.5px] sm:text-[15px] text-black/70 leading-[1.85] mb-10">
            Residents, community associations, and all interested persons can apply on the platform
            under one of the following categories.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="flex flex-col rounded-2xl border border-black/10 bg-white p-6 hover:border-brand-yellow hover:shadow-md transition-all"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-yellow/[0.18]">
                  <cat.icon size={20} strokeWidth={2} className="text-brand-ink" />
                </span>
                <h3 className="mt-5 text-[14.5px] font-bold text-brand-ink leading-snug">
                  {cat.title}
                </h3>
                <p className="mt-2 text-[12.5px] leading-[1.7] text-black/55">{cat.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* In-person assistance */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16">
          <div className="rounded-2xl border border-black/10 bg-brand-cream p-6 sm:p-9">
            <h2 className="text-[clamp(1.2rem,3vw,1.6rem)] font-extrabold text-brand-ink tracking-tight mb-4">
              Prefer to apply in person?
            </h2>
            <p className="text-[14px] text-black/70 leading-[1.85] mb-6">
              Applicants who are not comfortable with online systems may visit the Local Government
              Secretariat, where desk officers are available to assist them with the process.
            </p>
            <a
              href="https://snrms.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-5 py-2.5 text-[13px] font-bold text-black hover:bg-brand-hover transition-colors"
            >
              Start an application on SNRMS <ArrowRight size={14} strokeWidth={2.5} />
            </a>
          </div>
        </section>

        {/* Administrative contacts */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
            <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">Get In Touch</span>
          </div>
          <h2 className="text-[clamp(1.3rem,3.4vw,1.9rem)] font-extrabold text-brand-ink tracking-tight mb-5">
            Administrative contacts
          </h2>
          <p className="max-w-3xl text-[14.5px] text-black/70 leading-[1.85] mb-6">
            The following emails might be contacted in the event of any enquiries:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {CONTACTS.map((c) => (
              <a
                key={c.email}
                href={`mailto:${c.email}`}
                className="group flex items-start gap-2.5 rounded-xl border border-black/10 bg-white px-4 py-3.5 hover:border-brand-yellow transition-colors"
              >
                <Mail size={15} strokeWidth={2} className="mt-0.5 flex-shrink-0 text-brand-amber" />
                <span>
                  <span className="block text-[13px] font-bold text-brand-ink">{c.role}</span>
                  <span className="block text-[12.5px] text-black/55 group-hover:text-brand-amber transition-colors">
                    {c.email}
                  </span>
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-2.5 rounded-xl border border-black/10 bg-brand-cream px-4 py-3.5 text-[13px] text-black/60">
            <Building2 size={15} strokeWidth={2} className="mt-0.5 flex-shrink-0 text-brand-ink/40" />
            <span>Or visit the Local Government Secretariat for in-person assistance.</span>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
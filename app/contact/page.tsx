import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { getSiteSettings } from '@/lib/settings'

export const metadata = {
  title: 'Contact Us | Ibeju-Lekki Local Government',
  description:
    'Get in touch with Ibeju-Lekki Local Government Council: phone numbers, email, office address and a contact form.',
}

const DIRECTORY = [
  { role: 'Executive Chairman', lines: ['08083472704', '08073352019'] },
  { role: 'Council Manager', lines: ['08079792040'] },
  { role: 'Information Officer', lines: ['08027243687 (WhatsApp)', '09167148716'] },
]

export default async function Page() {
  const settings = await getSiteSettings()

  return (
    <>
      <main className="min-h-screen bg-white">
        <section className="border-b border-black/10 bg-brand-cream">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
            <nav className="flex items-center flex-wrap gap-1.5 text-[11px] sm:text-[12px] text-black/45 mb-5" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-brand-ink transition-colors">Home</Link>
              <span className="text-black/30">/</span>
              <span className="text-brand-ink font-semibold">Contact Us</span>
            </nav>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">Contact</span>
            </div>
            <h1 className="text-[clamp(1.8rem,5vw,2.9rem)] font-extrabold text-brand-ink tracking-tight leading-tight">
              Get In Touch With Us
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] sm:text-[16px] text-black/60 leading-[1.85]">
              Reach the Ibeju-Lekki Local Government Council by phone, email or in person, or send
              a message using the form below and the council will respond as soon as possible.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14">

            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
                <h2 className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">Contact Information</h2>
              </div>

              <div className="space-y-3">
                {DIRECTORY.map((d) => (
                  <div key={d.role} className="rounded-2xl border border-brand-ink/10 bg-white p-4 sm:p-5">
                    <div className="flex items-center gap-2.5">
                      <Phone size={14} strokeWidth={2.2} className="flex-shrink-0 text-brand-amber" />
                      <span className="text-[12.5px] font-bold text-brand-ink">{d.role}</span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 pl-6">
                      {d.lines.map((l) => (
                        <a key={l} href={`tel:${l.replace(/[^0-9+]/g, '')}`} className="text-[13px] text-black/65 hover:text-brand-amber transition-colors">
                          {l}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="rounded-2xl border border-brand-ink/10 bg-white p-4 sm:p-5">
                  <div className="flex items-center gap-2.5">
                    <Mail size={14} strokeWidth={2.2} className="flex-shrink-0 text-brand-amber" />
                    <span className="text-[12.5px] font-bold text-brand-ink">Email</span>
                  </div>
                  <a href={`mailto:${settings.email}`} className="mt-2 block pl-6 text-[13px] text-black/65 hover:text-brand-amber transition-colors">
                    {settings.email}
                  </a>
                </div>

                <div className="rounded-2xl border border-brand-ink/10 bg-white p-4 sm:p-5">
                  <div className="flex items-center gap-2.5">
                    <MapPin size={14} strokeWidth={2.2} className="flex-shrink-0 text-brand-amber" />
                    <span className="text-[12.5px] font-bold text-brand-ink">Council Secretariat</span>
                  </div>
                  <p className="mt-2 whitespace-pre-line pl-6 text-[13px] leading-relaxed text-black/65">
                    {settings.address}
                  </p>
                </div>

                <div className="rounded-2xl border border-brand-ink/10 bg-white p-4 sm:p-5">
                  <div className="flex items-center gap-2.5">
                    <Clock size={14} strokeWidth={2.2} className="flex-shrink-0 text-brand-amber" />
                    <span className="text-[12.5px] font-bold text-brand-ink">Office Hours</span>
                  </div>
                  <p className="mt-2 pl-6 text-[13px] text-black/65">{settings.officeHours}</p>
                </div>

                <a
                  href="https://wa.me/2348027243687"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 rounded-2xl border border-brand-yellow/40 bg-brand-yellow/[0.07] p-4 sm:p-5 transition-colors hover:bg-brand-yellow/15"
                >
                  <MessageCircle size={15} strokeWidth={2.2} className="flex-shrink-0 text-brand-amber" />
                  <span className="text-[12.5px] font-bold text-brand-ink">Chat with the Information Officer on WhatsApp</span>
                </a>
              </div>
            </div>

            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
                <h2 className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">Fill Our Contact Form</h2>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>

        <section className="border-t border-black/10">
          <iframe
            title="Ibeju-Lekki Local Government Secretariat location"
            src="https://maps.google.com/maps?q=Ibejulekki%20Local%20Government%2C%20Igando%20Oloja&t=m&z=13&output=embed&iwloc=near"
            className="h-[320px] sm:h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </main>
      <Footer />
    </>
  )
}

import Link from 'next/link'
import Organogram from '@/components/Organogram'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About Ibeju-Lekki LGA | Ibeju-Lekki Local Government',
  description:
    'About Ibeju-Lekki Local Government Area and how the council is organised to serve its communities.',
}

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <section className="border-b border-black/10 bg-brand-cream">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
            <nav className="flex items-center flex-wrap gap-1.5 text-[11px] sm:text-[12px] text-black/45 mb-5" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-brand-ink transition-colors">Home</Link>
              <span className="text-black/30">/</span>
              <span className="text-brand-ink font-semibold">About</span>
            </nav>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">About</span>
            </div>
            <h1 className="text-[clamp(1.9rem,5vw,3rem)] font-extrabold text-brand-ink tracking-tight leading-tight">
              About Ibeju-Lekki LGA
            </h1>
            <p className="mt-4 max-w-2xl text-[14px] sm:text-[15px] text-black/55 leading-[1.8]">
              Ibeju-Lekki Local Government Area is one of the fastest-growing parts of Lagos State,
              home to the Dangote Refinery, the Lekki Free Trade Zone and the Lekki Deep Seaport.
              Below is how the council is organised to serve its communities.
            </p>
          </div>
        </section>

        <Organogram />
      </main>
      <Footer />
    </>
  )
}

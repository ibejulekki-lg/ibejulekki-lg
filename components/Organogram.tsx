import Link from 'next/link'

/* The council hierarchy, top to bottom:
     Executive Chairman
     Vice Chairman
     Legislative Council
     SLG, Council Manager, Chief of Staff
     Supervisors
     Departments
     Units, including the Clerk of the House
     Area Officers
   Each tier links to the page where those people are listed. */

const OFFICE_OF_CHAIRMAN: { role: string; note?: string; href: string }[] = [
  { role: 'Secretary to the Local Government', note: 'SLG', href: '/government/executive-council' },
  { role: 'Council Manager', note: 'Oversees all departments and units', href: '/government/management-team' },
  { role: 'Chief of Staff', href: '/government/executive-council' },
]

const DEPARTMENTS = [
  'Admin & Human Resources',
  'Finance & Accounts',
  'Works & Infrastructure',
  'Agric & Social Services',
  'Education & Library Services',
  'Planning, Budget, Research & Statistics',
  'WAPA',
  'Health Care Services',
  'Environmental Services',
]

/* The Clerk of the House sits here, as a unit head. */
const UNITS = [
  'Audit',
  'Legal Service',
  'Public Affairs',
  'Tourism',
  'ICT',
  'Procurement',
  'Clerk of the House',
]

const AREA_OFFICES = ['Bogije', 'Ogunfayo', 'Coastal', 'Ibeju']

const MGMT_HREF = '/government/management-team'

function Connector() {
  return <div className="mx-auto w-px h-7 sm:h-9 bg-black/15" aria-hidden="true" />
}

/* A small label above a tier, so the hierarchy is readable rather than
   just a stack of boxes. */
function TierLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 mb-4">
      {children}
    </div>
  )
}

function BandLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="h-px flex-1 bg-black/[0.08]" aria-hidden="true" />
      <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-brand-ink">{children}</span>
      <span className="h-px flex-1 bg-black/[0.08]" aria-hidden="true" />
    </div>
  )
}

export default function Organogram() {
  return (
    <section
      className="bg-brand-cream py-16 sm:py-20 lg:py-24 border-t border-black/[0.06]"
      aria-labelledby="org-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
            <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">
              Government &middot; Structure
            </span>
            <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
          </div>
          <h2
            id="org-heading"
            className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-extrabold text-brand-ink tracking-tight leading-tight"
          >
            Council Structure
          </h2>
          <p className="mt-3 text-[14px] text-black/55 leading-[1.8]">
            How Ibeju-Lekki Local Government is organised, from the Executive Chairman
            to the departments, units and area offices that deliver services to residents.
            Tap any role to learn more.
          </p>
        </div>

        {/* 1. Executive Chairman */}
        <div className="flex justify-center">
          <Link
            href="/government/chairman"
            className="group w-full max-w-xs text-center rounded-2xl bg-brand-ink text-white px-6 py-5 shadow-sm transition-colors hover:bg-[#1c1c1c]"
          >
            <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-yellow mb-1">
              Executive Chairman
            </div>
            <div className="text-[15px] font-bold leading-tight">Hon. Abdullahi Sesan Olowa</div>
          </Link>
        </div>

        <Connector />

        {/* 2. Vice Chairman */}
        <div className="flex justify-center">
          <Link
            href="/government/executive-council"
            className="group w-full max-w-xs text-center rounded-2xl border border-black/[0.12] bg-white px-6 py-4 transition-colors hover:border-brand-yellow hover:bg-brand-yellow/5"
          >
            <div className="text-[13.5px] font-bold text-brand-ink leading-tight group-hover:text-brand-amber transition-colors">
              Vice Chairman
            </div>
          </Link>
        </div>

        <Connector />

        {/* 3. Legislative Council */}
        <div className="flex justify-center">
          <Link
            href="/government/legislative-council"
            className="group w-full max-w-md text-center rounded-2xl border border-black/[0.12] bg-white px-6 py-4 transition-colors hover:border-brand-yellow hover:bg-brand-yellow/5"
          >
            <div className="text-[13.5px] font-bold text-brand-ink leading-tight group-hover:text-brand-amber transition-colors">
              Legislative Council
            </div>
            <div className="mt-1 text-[10.5px] text-black/50 leading-snug">
              The legislative arm of the council
            </div>
          </Link>
        </div>

        <Connector />

        {/* 4. SLG, Council Manager, Chief of Staff */}
        <TierLabel>Office of the Executive Chairman</TierLabel>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto items-stretch">
          {OFFICE_OF_CHAIRMAN.map((d) => (
            <Link
              key={d.role}
              href={d.href}
              className="group flex flex-col justify-center rounded-xl border border-black/[0.12] bg-white px-4 py-4 text-center transition-colors hover:border-brand-yellow hover:bg-brand-yellow/5"
            >
              <div className="text-[13px] font-bold text-brand-ink leading-tight group-hover:text-brand-amber transition-colors">
                {d.role}
              </div>
              {d.note && <div className="mt-1 text-[10.5px] text-black/50 leading-snug">{d.note}</div>}
            </Link>
          ))}
        </div>

        <Connector />

        {/* 5. Supervisors */}
        <div className="flex justify-center">
          <Link
            href="/government/executive-council"
            className="group w-full max-w-md text-center rounded-2xl border border-black/[0.12] bg-white px-6 py-4 transition-colors hover:border-brand-yellow hover:bg-brand-yellow/5"
          >
            <div className="text-[13.5px] font-bold text-brand-ink leading-tight group-hover:text-brand-amber transition-colors">
              Supervisors
            </div>
            <div className="mt-1 text-[10.5px] text-black/50 leading-snug">
              Supervisory councillors leading each portfolio
            </div>
          </Link>
        </div>

        <Connector />

        {/* 6 to 8. Departments, units and area offices */}
        <div className="rounded-2xl border border-black/10 bg-white p-5 sm:p-8 max-w-6xl mx-auto">

          <BandLabel>Departments</BandLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
            {DEPARTMENTS.map((name) => (
              <Link
                key={name}
                href={MGMT_HREF}
                className="group flex items-start gap-3 rounded-xl border border-black/10 bg-white px-4 py-3 hover:border-brand-yellow/50 transition-colors"
              >
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-yellow flex-shrink-0" aria-hidden="true" />
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-[0.16em] text-black/40">Head</div>
                  <div className="text-[12.5px] font-semibold text-brand-ink leading-snug group-hover:text-brand-amber transition-colors">{name}</div>
                  <div className="text-[10px] text-black/40">Department</div>
                </div>
              </Link>
            ))}
          </div>

          <BandLabel>Units</BandLabel>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
            {UNITS.map((name) => (
              <Link
                key={name}
                href={name === 'Clerk of the House' ? '/government/legislative-council' : MGMT_HREF}
                className="group rounded-xl border border-black/10 bg-white px-3 py-3 text-center hover:border-brand-yellow/50 transition-colors"
              >
                <div className="text-[9px] font-bold uppercase tracking-[0.16em] text-black/40 mb-0.5">Head</div>
                <div className="text-[12px] font-semibold text-brand-ink leading-tight group-hover:text-brand-amber transition-colors">{name}</div>
                <div className="text-[9.5px] text-black/40 mt-0.5">Unit</div>
              </Link>
            ))}
          </div>

          <BandLabel>Area Offices</BandLabel>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {AREA_OFFICES.map((name) => (
              <Link
                key={name}
                href={MGMT_HREF}
                className="group rounded-xl border border-black/10 bg-brand-cream px-3 py-3 text-center hover:border-brand-yellow/60 transition-colors"
              >
                <div className="text-[9px] font-bold uppercase tracking-[0.16em] text-black/40 mb-0.5">Area Officer</div>
                <div className="text-[12px] font-semibold text-brand-ink leading-tight group-hover:text-brand-amber transition-colors">{name}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


import Link from 'next/link'

// Senior roles, all on ONE level below the Chairman. Each links to its page.
const DIRECT: { role: string; note?: string; href: string }[] = [
  { role: 'Vice Chairman', href: '/government/executive-council' },
  { role: 'Secretary to the Local Government', note: 'SLG', href: '/government/executive-council' },
  { role: 'Council Manager', note: 'Oversees all departments & units', href: '/government/management-team' },
  { role: 'Supervisors', href: '/government/executive-council' },
  { role: 'Clerk of the House', note: 'Legislative Arm', href: '/government/legislative-council' },
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

const UNITS = ['Audit', 'Legal Service', 'Public Affairs', 'Tourism', 'ICT', 'Procurement']

// Departments and units report to the Council Manager, so they link there.
const DEPT_HREF = '/government/management-team'

function Connector() {
  return <div className="mx-auto w-px h-7 sm:h-9 bg-black/15" aria-hidden="true" />
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
              Government · Structure
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
            to the departments and units that deliver services to residents. Tap any role to learn more.
          </p>
        </div>

        {/* Tier 0, Executive Chairman */}
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

        {/* Tier 1, senior roles, all on one level */}
        <div className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 mb-4">
          Reporting to the Executive Chairman
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto items-stretch">
          {DIRECT.map((d) => (
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

        {/* Tier 2, Office of the Council Manager */}
        <div className="rounded-2xl border border-black/10 bg-white p-5 sm:p-8 max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-black/45">
              Office of the Council Manager
            </span>
          </div>

          {/* Departments */}
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px flex-1 bg-black/[0.08]" aria-hidden="true" />
            <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-brand-ink">Departments</span>
            <span className="h-px flex-1 bg-black/[0.08]" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
            {DEPARTMENTS.map((name) => (
              <Link
                key={name}
                href={DEPT_HREF}
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

          {/* Units */}
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px flex-1 bg-black/[0.08]" aria-hidden="true" />
            <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-brand-ink">Units</span>
            <span className="h-px flex-1 bg-black/[0.08]" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
            {UNITS.map((name) => (
              <Link
                key={name}
                href={DEPT_HREF}
                className="group rounded-xl border border-black/10 bg-white px-3 py-3 text-center hover:border-brand-yellow/50 transition-colors"
              >
                <div className="text-[9px] font-bold uppercase tracking-[0.16em] text-black/40 mb-0.5">Head</div>
                <div className="text-[12px] font-semibold text-brand-ink leading-tight group-hover:text-brand-amber transition-colors">{name}</div>
                <div className="text-[9.5px] text-black/40 mt-0.5">Unit</div>
              </Link>
            ))}
          </div>

          {/* Area Officers */}
          <Link
            href={DEPT_HREF}
            className="group flex items-center justify-center rounded-xl border border-dashed border-black/20 bg-brand-cream px-4 py-3 text-center hover:border-brand-yellow/60 transition-colors"
          >
            <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-black/40">Field</span>
            <span className="ml-2 text-[12.5px] font-semibold text-brand-ink group-hover:text-brand-amber transition-colors">Area Officers</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Housing & Tourism | Ibeju-Lekki Local Government',
  // Superseded by the Opportunities pages and no longer linked from the site.
  robots: { index: false, follow: true },
}


/* The combined Housing & Tourism page was split into Housing and Tourism.
   Old links keep working by redirecting to the Housing landing page. */
export default function Page() {
  redirect('/opportunities/housing')
}

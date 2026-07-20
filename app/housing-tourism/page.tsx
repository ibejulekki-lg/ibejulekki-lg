import { redirect } from 'next/navigation'

/* The combined Housing & Tourism page was split into Housing and Tourism.
   Old links keep working by redirecting to the Housing landing page. */
export default function Page() {
  redirect('/opportunities/housing')
}

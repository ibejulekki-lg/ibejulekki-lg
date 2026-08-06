import PagePlaceholder from '@/components/PagePlaceholder'

export const metadata = {
  // Placeholder page: keep it out of search results until it has real
  // content. Delete these two lines when the page is written.
  robots: { index: false, follow: true },
  title: 'Street Naming | Ibeju-Lekki Local Government',
  description:
    'Apply for street naming and street name validation in Ibeju-Lekki Local Government Area, Lagos State.',
}

export default function Page() {
  return (
    <PagePlaceholder
      title="Street Naming"
      sectionLabel="Services"
      description="Street naming and street name validation for communities, estates and developments across Ibeju-Lekki Local Government Area."
      variant="form"
    />
  )
}

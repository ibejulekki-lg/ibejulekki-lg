import PagePlaceholder from '@/components/PagePlaceholder'

export const metadata = {
  // Placeholder page: keep it out of search results until it has real
  // content. Delete these two lines when the page is written.
  robots: { index: false, follow: true },
  title: 'Birth Certification | Ibeju-Lekki Local Government',
  description:
    'Register a birth and obtain a birth attestation or certificate from Ibeju-Lekki Local Government Area, Lagos State.',
}

export default function Page() {
  return (
    <PagePlaceholder
      title="Birth Certification"
      sectionLabel="Services"
      description="Birth registration and attestation services for residents of Ibeju-Lekki Local Government Area."
      variant="form"
    />
  )
}

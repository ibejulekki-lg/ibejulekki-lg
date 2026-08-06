import PagePlaceholder from '@/components/PagePlaceholder'

export const metadata = {
  // Placeholder page: keep it out of search results until it has real
  // content. Delete these two lines when the page is written.
  robots: { index: false, follow: true },
  title: 'Marriage Registry | Ibeju-Lekki Local Government',
  description:
    'Court marriage registration, marriage certificates and related services at Ibeju-Lekki Local Government Area, Lagos State.',
}

export default function Page() {
  return (
    <PagePlaceholder
      title="Marriage Registry"
      sectionLabel="Services"
      description="Court marriage registration, notice of marriage and marriage certificates for residents of Ibeju-Lekki Local Government Area."
      variant="form"
    />
  )
}

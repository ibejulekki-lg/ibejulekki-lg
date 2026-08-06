// Revenue Portal
import PagePlaceholder from '@/components/PagePlaceholder'

export const metadata = {
  // Placeholder page: keep it out of search results until it has real
  // content. Delete these two lines when the page is written.
  robots: { index: false, follow: true },
  title: 'Revenue Portal | Ibeju-Lekki Local Government',
  description:
    "Pay levies and access the Ibeju-Lekki Local Government revenue portal.",
}

export default function Page() {
  return (
    <PagePlaceholder
      title="Revenue Portal"
      sectionLabel="Resources"
      variant="form"
      placeholderTitle="The revenue portal will be linked here shortly"
      placeholderBody="Where a portal login or payment form is required, it will be accessible from this page. We are finalising this integration to ensure secure and seamless payments."
      description="Pay levies and access the council revenue portal."
    />
  )
}
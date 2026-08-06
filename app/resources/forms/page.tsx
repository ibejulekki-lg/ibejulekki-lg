// Download Forms
import PagePlaceholder from '@/components/PagePlaceholder'

export const metadata = {
  // Placeholder page: keep it out of search results until it has real
  // content. Delete these two lines when the page is written.
  robots: { index: false, follow: true },
  title: 'Download Forms | Ibeju-Lekki Local Government',
  description:
    "Download official forms and documents from Ibeju-Lekki Local Government Area, Lagos State.",
}

export default function Page() {
  return (
    <PagePlaceholder
      title="Download Forms"
      sectionLabel="Resources"
      variant="listing"
      description="Official LGA documents and downloadable forms."
    />
  )
}
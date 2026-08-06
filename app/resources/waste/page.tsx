// Waste Collection
import PagePlaceholder from '@/components/PagePlaceholder'

export const metadata = {
  // Placeholder page: keep it out of search results until it has real
  // content. Delete these two lines when the page is written.
  robots: { index: false, follow: true },
  title: 'Waste Collection | Ibeju-Lekki Local Government',
  description:
    "Waste collection services and the Keke Jaja tricycle service in Ibeju-Lekki Local Government Area.",
}

export default function Page() {
  return (
    <PagePlaceholder
      title="Waste Collection"
      sectionLabel="Resources"
      variant="form"
      description="Waste collection and the Keke Jaja tricycle service."
    />
  )
}
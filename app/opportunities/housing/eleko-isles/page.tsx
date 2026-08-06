import PagePlaceholder from '@/components/PagePlaceholder'

export const metadata = {
  // Placeholder page: keep it out of search results until it has real
  // content. Delete these two lines when the page is written.
  robots: { index: false, follow: true },
  title: 'Eleko Isles | Ibeju-Lekki Local Government',
  description:
    "The Eleko Isles estate development in Ibeju-Lekki Local Government Area, Lagos State.",
}

export default function Page() {
  return (
    <PagePlaceholder
      title="Eleko Isles"
      sectionLabel="Opportunities"
      description="Details of the Eleko Isles estate development will be published here."
    />
  )
}

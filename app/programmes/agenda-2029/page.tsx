import PagePlaceholder from '@/components/PagePlaceholder'

export const metadata = {
  // Placeholder page: keep it out of search results until it has real
  // content. Delete these two lines when the page is written.
  robots: { index: false, follow: true },
  title: 'Agenda 2029 | Ibeju-Lekki Local Government',
  description:
    "The development roadmap and Agenda 2029 commitments of Ibeju-Lekki Local Government.",
}

export default function Page() {
  return (
    <PagePlaceholder
      title="Agenda 2029"
      sectionLabel="Programmes"
      description="The development roadmap and Agenda 2029 commitments."
    />
  )
}

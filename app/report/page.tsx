import PagePlaceholder from '@/components/PagePlaceholder'

export const metadata = {
  // Placeholder page: keep it out of search results until it has real
  // content. Delete these two lines when the page is written.
  robots: { index: false, follow: true },
  title: 'Report an Issue | Ibeju-Lekki Local Government',
  description:
    "Report a problem, make a complaint or raise an issue with Ibeju-Lekki Local Government.",
}

export default function Page() {
  return (
    <PagePlaceholder
      title="Report an Issue"
      description="Report an issue or submit a complaint to the council."
    />
  )
}

import PagePlaceholder from '@/components/PagePlaceholder'

export const metadata = {
  // Placeholder page: keep it out of search results until it has real
  // content. Delete these two lines when the page is written.
  robots: { index: false, follow: true },
  title: 'Accessibility | Ibeju-Lekki Local Government',
  description:
    "Accessibility statement for the Ibeju-Lekki Local Government website.",
}

export default function Page() {
  return (
    <PagePlaceholder
      title="Accessibility"
      description="The accessibility commitment for the Ibeju-Lekki website."
    />
  )
}

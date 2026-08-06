import PagePlaceholder from '@/components/PagePlaceholder'

export const metadata = {
  // Placeholder page: keep it out of search results until it has real
  // content. Delete these two lines when the page is written.
  robots: { index: false, follow: true },
  title: 'Privacy Policy | Ibeju-Lekki Local Government',
  description:
    "How the Ibeju-Lekki Local Government website collects, uses and protects your information.",
}

export default function Page() {
  return (
    <PagePlaceholder
      title="Privacy Policy"
      description="How the Ibeju-Lekki website handles your data and privacy."
    />
  )
}

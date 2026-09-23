import TeamPage from '@/components/TeamPage'
import { getAdvisers } from '@/lib/leadership'

export const revalidate = 60

export const metadata = {
  title: 'Technical Advisers | Ibeju-Lekki Local Government',
  description:
    'The Chief Technical Advisers to the Executive Chairman of Ibeju-Lekki Local Government Area, Lagos State.',
}

export default async function Page() {
  const members = await getAdvisers()

  return (
    <TeamPage
      group="Technical Advisers"
      eyebrow="Government · Advisory"
      title="Technical Advisers"
      intro="Chief Technical Advisers appointed to support the Executive Chairman with specialist guidance across the council's priority areas."
      members={members}
    />
  )
}


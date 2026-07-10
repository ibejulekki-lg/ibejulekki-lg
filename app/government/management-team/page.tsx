import TeamPage from '@/components/TeamPage'
import { MANAGEMENT } from '@/lib/cabinet'

export const metadata = {
  title: 'Management Team | Ibeju-Lekki Local Government',
  description:
    'The management team of Ibeju-Lekki Local Government: the career civil service that delivers council services day to day.',
}

export default function Page() {
  return (
    <TeamPage
      group="Management Team"
      eyebrow="Government · Management"
      title="Management Team"
      intro="The management team is the career civil service that delivers council services day to day, from environment and health to education, budget and revenue."
      members={MANAGEMENT}
    />
  )
}

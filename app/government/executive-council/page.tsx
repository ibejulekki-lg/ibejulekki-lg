import TeamPage from '@/components/TeamPage'
import { EXECUTIVE_SECTIONS } from '@/lib/cabinet'

export const metadata = {
  title: 'Executive Council | Ibeju-Lekki Local Government',
  description:
    'The executive arm of Ibeju-Lekki Local Government: the Executive Chairman, supervisors leading each portfolio, special advisers, and non-cabinet members.',
}

export default function Page() {
  return (
    <TeamPage
      group="Executive Council"
      eyebrow="Government · Executive"
      title="Executive Council"
      intro="The executive arm carries out the day-to-day administration of Ibeju-Lekki Local Government. It is led by the Executive Chairman and made up of supervisors who lead each portfolio, special advisers, and non-cabinet members."
      sections={EXECUTIVE_SECTIONS}
    />
  )
}

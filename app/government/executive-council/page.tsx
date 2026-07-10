import TeamPage from '@/components/TeamPage'
import { EXECUTIVE } from '@/lib/cabinet'

export const metadata = {
  title: 'Executive Council | Ibeju-Lekki Local Government',
  description:
    'The executive arm of Ibeju-Lekki Local Government, led by the Executive Chairman with supervisors and special advisers across key portfolios.',
}

export default function Page() {
  return (
    <TeamPage
      group="Executive Council"
      eyebrow="Government · Executive"
      title="Executive Council"
      intro="The executive arm carries out the day-to-day administration of Ibeju-Lekki Local Government, led by the Executive Chairman and supported by supervisors and special advisers across key portfolios."
      members={EXECUTIVE}
    />
  )
}

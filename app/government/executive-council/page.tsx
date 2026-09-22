import TeamPage from '@/components/TeamPage'
import { getExecutiveSections } from '@/lib/leadership'

export const metadata = {
  title: 'Executive Council | Ibeju-Lekki Local Government',
  description:
    'The executive arm of Ibeju-Lekki Local Government: the Executive Chairman, supervisors leading each portfolio, special advisers, and non-cabinet members.',
}

export const revalidate = 60

export default async function Page() {
  const sections = await getExecutiveSections()
  return (
    <TeamPage
      group="Executive Council"
      eyebrow="Government · Executive"
      title="Executive Council"
      intro="The executive arm carries out the day-to-day administration of Ibeju-Lekki Local Government. It is led by the Executive Chairman and made up of supervisors who lead each portfolio, special advisers, and non-cabinet members."
      sections={sections}
      featureFirst
      featureCount={2}
    />
  )
}

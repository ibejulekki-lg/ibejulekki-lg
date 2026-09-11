import TeamPage from '@/components/TeamPage'
import { getLegislative } from '@/lib/leadership'

export const metadata = {
  title: 'Legislative Council | Ibeju-Lekki Local Government',
  description:
    'The legislative arm of Ibeju-Lekki Local Government: councillors elected to represent the wards, with the leadership of the house.',
}

export const revalidate = 60

export default async function Page() {
  const { lead, members } = await getLegislative()
  return (
    <TeamPage
      group="Legislative Council"
      eyebrow="Government · Legislative"
      title="Legislative Council"
      intro="The legislative arm makes local laws, approves the budget and provides oversight. It is made up of councillors elected to represent the wards of Ibeju-Lekki, with the leadership of the house."
      lead={lead}
      members={members}
    />
  )
}

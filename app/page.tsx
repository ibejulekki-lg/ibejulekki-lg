import { client } from '@/lib/sanity'
import { homepageNewsQuery, quickServicesQuery, chairmanQuery } from '@/lib/queries'
import Hero             from '@/components/Hero'
import LandmarksTicker  from '@/components/LandmarksTicker'
import QuickServices    from '@/components/QuickServices'
import ChairmanSection  from '@/components/ChairmanSection'
import NewsSection      from '@/components/NewsSection'
import SubscribeSection from '@/components/SubscribeSection'
import Footer           from '@/components/Footer'

export const revalidate = 60

export default async function Home() {
  const [news, services, chairman] = await Promise.all([
    client.fetch(homepageNewsQuery).catch(() => null),
    client.fetch(quickServicesQuery).catch(() => null),
    client.fetch(chairmanQuery).catch(() => null),
  ])
  return (
    <main>
      <LandmarksTicker />
      <Hero />
      <QuickServices   services={services  ?? undefined} />
      <ChairmanSection data={chairman      ?? undefined} />
      <NewsSection     posts={news         ?? undefined} />
      <SubscribeSection />
      <Footer />
    </main>
  )
}

import { FeaturedCatalog } from '@/components/featured-catalog'
import { HowItWorks } from '@/components/how-it-works'
import { ImagesCarousel } from '@/components/images-carousel'
import { SloganSection } from '@/components/slogan-section'

export default function Home() {
  return (
    <main>
      <SloganSection />
      <ImagesCarousel />
      <FeaturedCatalog />
      <HowItWorks />
    </main>
  )
}

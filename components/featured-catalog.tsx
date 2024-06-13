import { getCatalog } from '@/data/catalog'
import { CircleArrowRight } from 'lucide-react'
import Link from 'next/link'
import { CatalogPreviewCard } from './catalog-preview-card'
import { Button } from './ui/button'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'

export function FeaturedCatalog() {
  const catalog = getCatalog().filter((item) => item.isFeatured)

  return (
    <section
      className={
        'mx-auto flex max-w-[920px] flex-col gap-6 py-8 md:items-center'
      }
    >
      <div className="pl-4 lg:pl-0">
        <h2 className={'text-xl font-bold'}>Computadores mais assinados</h2>
      </div>
      <div className={'w-full pl-4 lg:pl-0'}>
        <Carousel>
          <CarouselContent className="flex gap-6 p-1">
            {catalog &&
              catalog.map((item) => (
                <CarouselItem
                  className="max-w-[210px] [&>img]:w-full"
                  key={item.id}
                >
                  <CatalogPreviewCard product={item} />
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="flex justify-center">
        <Link href={'/catalog/all'}>
          <Button size={'lg'} className="rounded-2xl" variant={'outline'}>
            Ver catálogo
            <CircleArrowRight size={24} className={'ml-2'} />
          </Button>
        </Link>
      </div>
    </section>
  )
}

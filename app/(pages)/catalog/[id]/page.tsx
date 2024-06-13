'use client'

import { CatalogPreviewCard } from '@/components/catalog-preview-card'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { Skeleton } from '@/components/ui/skeleton'
import {
  FeaturedTag,
  getCatalog,
  getFeaturedTags,
  Product,
} from '@/data/catalog'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function CatalogPage({ params }: { params: { id: string } }) {
  const id = params.id.toLowerCase()

  console.log(id)

  const [isLoading, setIsLoading] = useState(true)
  const [selectedTag, setSelectedTag] = useState<FeaturedTag | undefined>(
    undefined,
  )
  const [featuredTags, setFeaturedTags] = useState<FeaturedTag[]>([])
  const [catalog, setCatalog] = useState<Product[]>([])

  const [tagDisplay, setTagDisplay] = useState<string>('Todos')

  useEffect(() => {
    setFeaturedTags(getFeaturedTags())
  }, [])

  useEffect(() => {
    console.log(id)

    const tag = featuredTags.find((tag) => tag.id === id)

    setSelectedTag(tag)
    setTagDisplay(tag ? tag.name : 'Todos')
    setCatalog(
      getCatalog().filter(
        (product) => product.tags.includes(id) || id === 'all',
      ),
    )
    setIsLoading(false)
  }, [featuredTags, id])

  return (
    <>
      <div className="py-6">
        <div className="container truncate">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={'/'}>Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={'/catalog/all'}>Catálogo</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              {!isLoading && selectedTag && (
                <>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href={selectedTag.id}>{selectedTag.name}</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </>
              )}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div>
        <div className="container mx-auto flex gap-1 px-6 pb-1 pt-6 md:justify-center md:text-center">
          {isLoading && <Skeleton className="h-6 w-32" />}
          {!isLoading && (
            <>
              <h2 className="text-xl font-bold capitalize leading-relaxed text-opacity-95">
                {tagDisplay}
              </h2>
              <h2 className="text-lg leading-relaxed text-opacity-95">
                ({catalog.length})
              </h2>
            </>
          )}
        </div>
        <div className="container mx-auto justify-center p-6 pr-0 md:flex md:pb-12">
          <Carousel orientation="horizontal">
            <CarouselContent className="flex gap-6">
              {!isLoading &&
                featuredTags &&
                featuredTags.map((tag) => (
                  <CarouselItem className="max-w-min" key={tag.id}>
                    <Link
                      className="md:text-md inline-flex items-center justify-center whitespace-nowrap text-sm font-medium tracking-tight underline-offset-4 hover:underline"
                      href={tag.id}
                    >
                      {tag.name}
                    </Link>
                  </CarouselItem>
                ))}

              {isLoading && (
                <>
                  <CarouselItem className="max-w-min">
                    <Skeleton className="h-6 w-32" />
                  </CarouselItem>

                  <CarouselItem className="max-w-min">
                    <Skeleton className="h-6 w-32" />
                  </CarouselItem>

                  <CarouselItem className="max-w-min">
                    <Skeleton className="h-6 w-32" />
                  </CarouselItem>

                  <CarouselItem className="max-w-min">
                    <Skeleton className="h-6 w-32" />
                  </CarouselItem>
                </>
              )}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      <main>
        <div className="max-w-[1200px] md:mx-auto">
          <div className="grid grid-cols-1 gap-4 px-6 py-6 md:grid-cols-2 md:gap-6 md:pb-24 lg:grid-cols-3 xl:grid-cols-4">
            {!isLoading &&
              catalog &&
              catalog.map((item) => (
                <CatalogPreviewCard key={item.id} product={item} />
              ))}

            {isLoading && (
              <>
                <Skeleton className="min-h-96 min-w-64" />
                <Skeleton className="min-h-96 min-w-64" />
                <Skeleton className="min-h-96 min-w-64" />
                <Skeleton className="min-h-96 min-w-64" />
              </>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

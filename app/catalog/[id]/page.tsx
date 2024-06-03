'use client'

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { FeaturedTag, getCatalog, getFeaturedTags, Product } from '@/data/catalog';
import { formatMoney } from '@/lib/formatter';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CatalogPage(
  { params }: { params: { id: string } }
) {
  const id = params.id.toLowerCase()

  const [tag, setTag] = useState<FeaturedTag | undefined>(undefined)
  const [tags, setTags] = useState<FeaturedTag[]>([])
  const [catalog, setCatalog] = useState<Product[]>([])

  const [tagDisplay, setTagDisplay] = useState<string>('Todos')

  useEffect(() => {
    setTags(getFeaturedTags());
  }, [id])

  useEffect(() => {
    const tag = tags.find(tag => tag.id === id)

    setTag(tag)
    setTagDisplay(tag ? tag.name : 'Todos')
    setCatalog(getCatalog().filter(product => product.tags.includes(id) || tag == null))
  }, [tags, id])

  return (
    <>
      <div className="py-6">
        <div className="container truncate">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={"/"}>Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={"/catalog/all"}>Catálogo</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              {tag && (
                <>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href={tag.id}>{tag.name}</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </>
              )}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div>
        <div className='flex mx-auto container px-6 pt-6 pb-1 md:text-center gap-1 md:justify-center'>
          <h2 className="text-xl text-opacity-95 font-bold capitalize leading-relaxed">{tagDisplay}</h2>
          <h2 className="text-lg text-opacity-95 leading-relaxed">({catalog.length})</h2>
        </div>
        <div className='md:flex justify-center p-6 pr-0 mx-auto container md:pb-12'>
          <Carousel orientation='horizontal'>
            <CarouselContent className='flex gap-6'>
              {tags && tags.map(tag => (
                <CarouselItem className='max-w-min' key={tag.id}>
                  <Link className='inline-flex justify-center items-center tracking-tight whitespace-nowrap text-sm font-medium underline-offset-4 hover:underline md:text-md' href={tag.id}>
                    {tag.name}
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      <main>
        <div className='max-w-[1200px] md:mx-auto'>
          <div className='grid px-6 md:pb-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 py-6'>
            {catalog && catalog.map(item => (
              <Card key={item.id} className="hover:shadow-md">
                <div className="relative min-h-[190px]">
                  <img src={item.imageUrl} alt={item.name} className={"w-full"} />
                </div>

                <CardContent>
                  <div className="overflow-hidden">
                    <h3 className={"text-lg font-bold capitalize truncate"}>{item.name}</h3>
                    <div>
                      <p className={"text-sm text-muted-foreground truncate capitalize"}>{item.description}</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="text-xs">parcelas a partir de</p>
                    <div className="flex gap-2">
                      {item.plans && item.plans.find(plan => plan.duration == 12) && (
                        <>
                          {item.plans.find(plan => plan.duration == 12)!!.discountedInstallmentPrice !== item.plans.find(plan => plan.duration == 12)!!.installmentPrice ? (
                            <>
                              <h2 className="text-sm text-muted-foreground line-through">{formatMoney(item.plans.find(plan => plan.duration == 12)!!.installmentPrice)}</h2>
                              <h2 className="text-sm font-bold text-green-700">{formatMoney(item.plans.find(plan => plan.duration == 12)!!.discountedInstallmentPrice)}</h2>
                            </>
                          ) : (
                            <h2 className="text-sm font-bold text-green-700">{formatMoney(item.plans.find(plan => plan.duration == 12)!!.installmentPrice)}</h2>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
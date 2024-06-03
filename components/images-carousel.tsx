'use client'

import { getCarouselImages } from "@/data/images-carousel";
import Autoplay from 'embla-carousel-autoplay'
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export function ImagesCarousel() {
  const images = getCarouselImages();

  return (
    <section className="pb-6 pt-8 px-4 md:p-0">
      <Carousel
        className="rounded-lg md:rounded-none "
        plugins={[
          Autoplay({
            delay: 2000
          })
        ]}>
        <CarouselContent>
          {images && images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="w-full h-full">
                <picture>
                  <source srcSet={image.mobileSrc} media="(max-width: 560px)" />
                  <img src={image.mainSrc} alt={image.alt} />
                </picture>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
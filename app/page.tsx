"use client"

import { FeaturedCatalog } from "@/components/featured-catalog";
import { Header } from "@/components/header";
import { ImagesCarousel } from "@/components/images-carousel";
import { SloganSection } from '@/components/slogan-section';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <SloganSection />
        <ImagesCarousel />
        <FeaturedCatalog />
      </main>
    </>
  );
}

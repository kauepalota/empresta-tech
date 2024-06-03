import Link from "next/link";
import { Button } from "./ui/button";
import { CircleArrowRight } from "lucide-react";
import { getCatalog } from "@/data/catalog";
import { Card, CardContent, CardHeader } from "./ui/card";
import { formatMoney } from "@/lib/formatter";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { CatalogPreviewCard } from "./catalog-preview-card";

export function FeaturedCatalog() {
  const catalog = getCatalog().filter(item => item.isFeatured)

  return (
    <section className={"flex flex-col mx-auto md:items-center py-8 gap-6 max-w-[920px]"}>
      <div className="pl-4 lg:pl-0">
        <h2 className={"text-xl font-bold"}>Computadores mais assinados</h2>
      </div>
      <div className={"pl-4 lg:pl-0 w-full"}>
        <Carousel>
          <CarouselContent className="flex gap-6 p-1">
            {catalog && catalog.map(item => (
              <CarouselItem className="[&>img]:w-full max-w-[210px]" key={item.id}>
                <CatalogPreviewCard product={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="flex justify-center">
        <Link href={"/catalog/all"}>
          <Button size={"lg"} className="rounded-2xl" variant={"outline"}>
            Ver catálogo
            <CircleArrowRight size={24} className={"ml-2"} />
          </Button>
        </Link>
      </div>
    </section>
  )
}
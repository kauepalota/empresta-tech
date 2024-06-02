import Link from "next/link";
import { Button } from "./ui/button";
import { CircleArrowRight } from "lucide-react";
import { getCatalog } from "@/data/catalog";
import { Card, CardContent, CardHeader } from "./ui/card";
import { formatMoney } from "@/lib/formatter";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

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
                <Link href={`/catalog/${item.id}`}>
                  <Card className="hover:shadow-md">
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
                            <h2 className="text-sm font-bold text-green-700">{formatMoney(item.plans.find(plan => plan.duration == 12)!!.discountedInstallmentPrice)}</h2>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="flex justify-center">
        <Link href={"/catalog/all"}>
          <Button variant={"outline"}>
            Ver todos os computadores
            <CircleArrowRight size={24} className={"ml-2"} />
          </Button>
        </Link>
      </div>
    </section>
  )
}
import {Header} from "@/components/header";
import {SloganSection} from '@/components/slogan-section'
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import {FeaturedCatalog} from "@/components/featured-catalog";

export default function Home() {
  return (
    <>
      <Header/>

      <main>
        <SloganSection/>

        <section>
          <Carousel>
            <CarouselContent>
              <CarouselItem className={"[&>img]:w-full"}>
                <div className={"w-full h-full"}>
                  <img src={"/M2.png"} alt={"M2"} />
                </div>
              </CarouselItem>
              <CarouselItem className={"[&>img]:w-full"}>
                <div className={"w-full h-full"}>
                  <img src={"/M2.png"} alt={"M2"} />
                </div>
              </CarouselItem>
              <CarouselItem className={"[&>img]:w-full"}>
                <div className={"w-full h-full"}>
                  <img src={"/M2.png"} alt={"M2"} />
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </section>

        <FeaturedCatalog />
      </main>
    </>
  );
}

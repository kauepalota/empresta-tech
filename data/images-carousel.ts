type CarouselImage = {
  mainSrc: string;
  mobileSrc: string;
  alt: string;
} 

export function getCarouselImages(): CarouselImage[] {
  return [
    {
      mainSrc: '/m2.png',
      mobileSrc: '/m2_mobile.png',
      alt: 'Macbook M2 Banner'
    }
  ]
}
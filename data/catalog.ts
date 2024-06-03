export type Product = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  isFeatured: boolean;

  plans: ProductPricePlan[];
  tags: string[];
}

export type ProductPricePlan = {
  duration: number;

  totalPrice: number;
  discounttedPrice: number;

  installmentPrice: number;
  discountedInstallmentPrice: number;
}

export type FeaturedTag = {
  id: string;
  name: string;
  imageUrl: string;
}

export function getFeaturedTags(): FeaturedTag[] {
  return [
    {
      id: 'gamer',
      name: 'Gamer',
      imageUrl: '/tags/gamer.png'
    },
    {
      id: 'design',
      name: 'Design',
      imageUrl: '/tags/design.png'
    },
    {
      id: 'programming',
      name: 'Programação',
      imageUrl: '/tags/programming.png'
    },
    {
      id: 'student',
      name: 'Estudante',
      imageUrl: '/tags/student.png'
    }
  ]
}

export function getCatalog(): Product[] {
  return (
    [
      {
        id: 1,
        name: 'Notebook Acer Predator Triton RTX 3060 i7',
        description: "Placa de video RTX 3060, Tela 16”, Capacidade 512GB SSD, Memória RAM 16GB, Processador Intel Core i7 12º geração",
        imageUrl: '/notebook_acer_predator_triton.png',
        isFeatured: true,
        tags: ['gamer', 'notebook'],
        plans: [
          {
            duration: 12,
            totalPrice: 3690.64,
            discounttedPrice: 3077.64,
            installmentPrice: 307.55,
            discountedInstallmentPrice: 256.47
          },
          {
            duration: 6,
            totalPrice: 2398.92,
            discounttedPrice: 2000.47,
            installmentPrice: 399.82,
            discountedInstallmentPrice: 333.41
          },
          {
            duration: 3,
            totalPrice: 1476.26,
            discounttedPrice: 1231.06,
            installmentPrice: 492.09,
            discountedInstallmentPrice: 410.35
          }
        ]
      },
      {
        id: 2,
        name: 'MacBook Pro M2 13"',
        description: "Tela 13”, Capacidade 256GB SSD, Memória RAM 8GB, Processador Apple M2",
        imageUrl: '/macbook_m1.png',
        isFeatured: true,
        tags: ['design', 'programming', 'coding', 'notebook'],
        plans: [
          {
            duration: 12,
            totalPrice: 4999.00,
            discounttedPrice: 3999.20,
            installmentPrice: 416.58,
            discountedInstallmentPrice: 333.27
          },
          {
            duration: 6,
            totalPrice: 2999.40,
            discounttedPrice: 2399.52,
            installmentPrice: 499.90,
            discountedInstallmentPrice: 399.92
          },
          {
            duration: 3,
            totalPrice: 1799.64,
            discounttedPrice: 1439.71,
            installmentPrice: 599.88,
            discountedInstallmentPrice: 479.90
          }
        ]
      },
      {
        id: 3,
        name: 'MacBook Air M1 13"',
        description: "256GB - Chip M1 (8 núcleos), SSD, 8GB RAM",
        imageUrl: '/macbook_m1.png',
        isFeatured: true,
        tags: ['notebook', 'design', 'programming', 'coding'],
        plans: [
          {
            duration: 12,
            totalPrice: 3999.00,
            discounttedPrice: 3199.20,
            installmentPrice: 333.25,
            discountedInstallmentPrice: 266.60
          },
          {
            duration: 6,
            totalPrice: 2399.40,
            discounttedPrice: 1919.52,
            installmentPrice: 399.90,
            discountedInstallmentPrice: 319.92
          },
          {
            duration: 3,
            totalPrice: 1439.64,
            discounttedPrice: 1151.71,
            installmentPrice: 479.88,
            discountedInstallmentPrice: 383.90
          }
        ]
      },
      {
        id: 4,
        name: 'Notebook Acer Vero i5',
        description: 'Processador Intel Core i5 11a gen, 16GB Memória RAM 512GB SSD',
        imageUrl: '/notebook_acer_vero.webp',
        isFeatured: true,
        tags: ['notebook', 'work', 'home-office', 'student'],
        plans: [
          {
            duration: 12,
            totalPrice: 2999.00,
            discounttedPrice: 2999.00,
            installmentPrice: 249.92,
            discountedInstallmentPrice: 249.92
          },
          {
            duration: 6,
            totalPrice: 1799.40,
            discounttedPrice: 1799.40,
            installmentPrice: 299.90,
            discountedInstallmentPrice: 299.90
          },
          {
            duration: 3,
            totalPrice: 1079.64,
            discounttedPrice: 1079.64,
            installmentPrice: 359.88,
            discountedInstallmentPrice: 359.88
          }
        ]
      }
    ]
  )
}
'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { getCatalog, Product, ProductPricePlan } from '@/data/catalog'
import { formatMoney } from '@/lib/formatter'
import { StarIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ProductPage({
  params,
}: {
  params: {
    id: string
  }
}) {
  const router = useRouter()
  const id = params.id.toLowerCase()

  const [product, setProduct] = useState<Product | undefined>(undefined)

  const [selectedPlan, setSelectedPlan] = useState<ProductPricePlan>()

  useEffect(() => {
    const product = getCatalog().find((product) => product.id === Number(id))
    if (!product) {
      router.push('/catalog/all')
      return
    }

    setProduct(product)
    setSelectedPlan(product.plans.find((plan) => plan.duration === 12)!)
  }, [id, router])

  function onSubmit() {
    router.push(`/checkout/${id}?plan=${selectedPlan?.duration}`)
  }

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

              {product && (
                <>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href={`/item/${product.id}`}>{product.name}</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </>
              )}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {product && (
        <div className="container mt-6 grid grid-cols-1 gap-[80px] md:pb-20 lg:grid-cols-2">
          <div className="lg:relative lg:left-[24px]">
            <div className="lg-[500px] flex h-[280px] max-w-[500px] justify-center">
              <div className="relative flex h-[280px] w-full lg:h-[500px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-8">
              <section>
                <h1 className="mb-2 text-2xl font-bold">{product.name}</h1>
                <p className="text-base text-neutral-600">
                  {product.description}
                </p>
              </section>
            </div>

            <div className="mt-12">
              <section>
                <p className="mb-2 block text-left text-[10px] font-bold uppercase tracking-[1.5px]">
                  Escolha o plano de assinatura
                </p>

                <div className="flex flex-col gap-2">
                  {product.plans.map((plan) => (
                    <button
                      onClick={() => setSelectedPlan(plan)}
                      key={product.id + '_' + plan.duration}
                      data-state={
                        selectedPlan?.duration === plan.duration ? 'on' : 'off'
                      }
                      className="relative box-border flex h-[113px] min-w-[100px] justify-between rounded-md bg-transparent p-4 px-6 text-base font-bold leading-none text-neutral-800 outline outline-1 outline-black/[.54] hover:outline-green-500 hover:transition-all disabled:pointer-events-none disabled:bg-neutral-300 disabled:text-neutral-500 data-[state=on]:outline-2 data-[state=on]:outline-green-500"
                    >
                      {plan.duration === 12 ? (
                        <div className="flex h-full flex-col justify-between text-left">
                          <div className="flex items-center justify-center gap-1 rounded-lg bg-green-100 px-2 py-0.5 font-bold capitalize tracking-widest text-green-700">
                            <StarIcon className="size-4" />

                            <h2 className="text-xs">Recomendado</h2>
                          </div>

                          <p className="font-bold">{plan.duration} meses</p>
                        </div>
                      ) : (
                        <div className="flex h-full flex-col justify-center text-left">
                          <p className="font-bold">{plan.duration} meses</p>
                        </div>
                      )}

                      <div className="text-right">
                        {plan.totalPrice !== plan.discounttedPrice && (
                          <span className="mb-[2px] text-[10px] font-bold text-neutral-800/[.65] line-through">
                            {formatMoney(plan.totalPrice)}
                          </span>
                        )}

                        <h2 className="text-lg font-bold">
                          {formatMoney(plan.discounttedPrice)}
                        </h2>

                        <p className="mb-2 font-light text-neutral-800/[.65]">
                          em até{' '}
                          <span className="font-bold text-black">
                            {plan.duration}x de{' '}
                            {formatMoney(plan.discountedInstallmentPrice)}
                          </span>
                        </p>
                      </div>
                    </button>
                  ))}
                </div>

                <button
                  onClick={onSubmit}
                  className="mt-4 w-full rounded-full bg-primary px-8 py-3 font-bold text-primary-foreground"
                >
                  Assinar
                </button>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

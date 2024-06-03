'use client'

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { getCatalog, Product, ProductPricePlan } from "@/data/catalog";
import { formatMoney } from "@/lib/formatter";
import { StarIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductPage({
  params
}: {
  params: {
    id: string;
  }
}) {
  const router = useRouter()
  const id = params.id.toLowerCase()

  const [product, setProduct] = useState<Product | undefined>(undefined)

  const [selectedPlan, setSelectedPlan] = useState<ProductPricePlan>()

  useEffect(() => {
    const product = getCatalog().find(product => product.id === Number(id))
    if (!product) {
      router.push("/catalog/all")
      return
    }

    setProduct(product)
    setSelectedPlan(product.plans.find(plan => plan.duration == 12)!!)
  }, [id, router])

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
        <div className="md:pb-20 mt-6 grid grid-cols-1 lg:grid-cols-2 gap-[80px] container">
          <div className="lg:relative lg:left-[24px]">
            <div className="flex justify-center max-w-[500px] h-[280px] lg-[500px]">
              <div className="flex h-[280px] lg:h-[500px] relative w-full">
                <img src={product.imageUrl} alt={product.name} className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-8">
              <section>
                <h1 className="text-2xl mb-2 font-bold">{product.name}</h1>
                <p className="text-base text-neutral-600">{product.description}</p>
              </section>
            </div>

            <div className="mt-12">
              <section>
                <p className="text-[10px] uppercase tracking-[1.5px] block mb-2 text-left font-bold">Escolha o plano de assinatura</p>

                <div className="flex flex-col gap-2">
                  {product.plans.map(plan => (
                    <button onClick={() => setSelectedPlan(plan)} key={product.id + "_" + plan.duration} data-state={selectedPlan?.duration == plan.duration ? 'on' : 'off'} className="relative disabled:pointer-events-none disabled:bg-neutral-300 disabled:text-neutral-500 hover:transition-all
                     box-border outline-1 outline outline-black/[.54] rounded-md 
                     text-base min-w-[100px] font-bold p-4 hover:outline-green-500 data-[state=on]:outline-green-500 data-[state=on]:outline-2 
                     leading-none bg-transparent text-neutral-800 flex justify-between px-6 h-[113px]">
                      {plan.duration == 12 ? (
                        <div className="flex flex-col h-full text-left justify-between">
                          <div className="flex rounded-lg text-green-700 capitalize tracking-widest font-bold bg-green-100 gap-1 justify-center items-center px-2 py-0.5">
                            <StarIcon className="size-4" />

                            <h2 className="text-xs">Recomendado</h2>
                          </div>

                          <p className="font-bold">{plan.duration} meses</p>
                        </div>
                      ) : (
                        <div className="flex flex-col h-full text-left justify-center">
                          <p className="font-bold">{plan.duration} meses</p>
                        </div>
                      )}

                      <div className="text-right">
                        {plan.totalPrice != plan.discounttedPrice && (
                          <span className="text-[10px] mb-[2px] font-bold text-neutral-800/[.65] line-through">{formatMoney(plan.totalPrice)}</span>
                        )}

                        <h2 className="text-lg font-bold">{formatMoney(plan.discounttedPrice)}</h2>

                        <p className="text-neutral-800/[.65] font-light mb-2">
                          em até {" "}

                          <span className="font-bold text-black">
                            {plan.duration}x de {formatMoney(plan.discountedInstallmentPrice)}
                          </span>
                        </p>
                      </div>
                    </button>
                  ))}
                </div>

                <button className="mt-4 py-3 px-8 w-full bg-primary text-primary-foreground font-bold rounded-full">
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
'use client'

import { AddAddressSection } from '@/components/checkout/sections/add-address-section'
import { AddDocumentSection } from '@/components/checkout/sections/add-document-section'
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { formatMoney } from '@/lib/formatter'
import { Separator } from '@/components/ui/separator'
import { getCatalog, Product, ProductPricePlan } from '@/data/catalog'
import { AccordionItem } from '@radix-ui/react-accordion'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ShieldCheck } from 'lucide-react'

export default function CheckoutPage({
  params,
}: {
  params: {
    id: string
  }
}) {
  const id = params.id.toLowerCase()

  const searchParams = useSearchParams()
  const router = useRouter()

  const [product, setProduct] = useState<Product | undefined>(undefined)
  const [plan, setPlan] = useState<ProductPricePlan | undefined>(undefined)

  useEffect(() => {
    const foundProduct = getCatalog().find(
      (product) => product.id === Number(id),
    )
    if (!foundProduct) {
      router.push('/catalog/all')
      return
    }

    const planId = searchParams.get('plan')
    if (
      !planId ||
      !foundProduct.plans.find((p) => p.duration === Number(planId))
    ) {
      router.push(`/item/${id}`)
      return
    }

    setProduct(foundProduct)
    setPlan(foundProduct.plans.find((p) => p.duration === Number(planId))!)
  }, [id, router, searchParams])

  const [value, setValue] = useState<string>('documents')

  return product && plan ? (
    <div className="container mx-auto my-12 px-4 md:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold">Carrinho</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="col-span-1 space-y-8 md:col-span-2">
          <Accordion
            collapsible
            value={value}
            onValueChange={setValue}
            type="single"
          >
            <AccordionItem value="documents" data-state="open">
              <AccordionTrigger>Documentos</AccordionTrigger>

              <AccordionContent className="p-2">
                <AddDocumentSection onSubmit={() => setValue('address')} />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="address">
              <AccordionTrigger>Endereço</AccordionTrigger>

              <AccordionContent className="p-2">
                <AddAddressSection onSubmit={() => setValue('')} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div>
          <div className="col-span-1 max-h-min space-y-4 rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
            <h2 className="text-xl font-bold">Pedido</h2>
            <div className="flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product?.imageUrl}
                alt="Product Image"
                width={64}
                height={64}
                className="rounded-md"
              />
              <div>
                <h3 className="font-semibold">{product?.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {plan?.duration}x de{' '}
                  {formatMoney(plan.discountedInstallmentPrice)}
                </p>
              </div>
            </div>

            <Separator />

            {plan.totalPrice !== plan.discounttedPrice && (
              <>
                <div className="flex justify-between font-bold">
                  <span>Total</span>

                  <div className="flex flex-col items-end">
                    <span className="text-xs text-neutral-800/[.65] line-through">
                      {formatMoney(plan.totalPrice)}
                    </span>

                    <span className="text-md text-green-700">
                      {formatMoney(plan.discounttedPrice)}
                    </span>

                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      em até
                      <span className="font-semibold text-black">
                        {' '}
                        {plan?.duration}x de{' '}
                        {formatMoney(plan.discountedInstallmentPrice)}
                      </span>
                    </p>
                  </div>
                </div>
              </>
            )}

            {plan.totalPrice === plan.discounttedPrice && (
              <>
                <div className="flex flex-col space-y-0">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>{formatMoney(plan.totalPrice)}</span>
                  </div>

                  <div className="flex justify-end">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {plan?.duration}x de{' '}
                      {formatMoney(plan.discountedInstallmentPrice)}
                    </p>
                  </div>
                </div>
              </>
            )}

            <Separator />

            <div className="text-md flex flex-col gap-2 pt-4">
              <p className="flex items-center gap-4">
                <ShieldCheck className="text-green-700" />

                <p>100% de proteção contra roubo</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    FallbackComponent()
  )
}

function FallbackComponent() {
  return <div>Carregando...</div>
}

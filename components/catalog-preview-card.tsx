import Link from 'next/link'
import { Card, CardContent } from './ui/card'
import { Product } from '@/data/catalog'
import { formatMoney } from '@/lib/formatter'

export type CatalogPreviewProps = {
  product: Product
}

export function CatalogPreviewCard({ product }: CatalogPreviewProps) {
  const cheapestPlan = product.plans.reduce((prev, current) =>
    prev.discountedInstallmentPrice < current.discountedInstallmentPrice
      ? prev
      : current,
  )

  return (
    <Link href={`/item/${product.id}`}>
      <Card className="animate-in hover:shadow-md">
        <div className="relative min-h-[190px]">
          <img src={product.imageUrl} alt={product.name} className={'w-full'} />
        </div>

        <CardContent>
          <div className="overflow-hidden">
            <h3 className={'truncate text-lg font-bold capitalize'}>
              {product.name}
            </h3>
            <div>
              <p
                className={'truncate text-sm capitalize text-muted-foreground'}
              >
                {product.description}
              </p>
            </div>
          </div>
          <div className="pt-2">
            <p className="text-xs">parcelas a partir de</p>
            <div className="flex gap-2">
              {cheapestPlan && (
                <>
                  {cheapestPlan.discountedInstallmentPrice !==
                  cheapestPlan.installmentPrice ? (
                    <>
                      <h2 className="text-sm text-muted-foreground line-through">
                        {formatMoney(cheapestPlan.installmentPrice)}
                      </h2>
                      <h2 className="text-sm font-bold text-green-700">
                        {formatMoney(cheapestPlan.discountedInstallmentPrice)}
                      </h2>
                    </>
                  ) : (
                    <h2 className="text-sm font-bold text-green-700">
                      {formatMoney(cheapestPlan.installmentPrice)}
                    </h2>
                  )}
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

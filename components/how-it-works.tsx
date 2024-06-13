import { MousePointer, PartyPopper, ShieldHalf } from 'lucide-react'
import { Card, CardContent, CardHeader } from './ui/card'

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-neutral-50 px-4 py-8">
      <div className="flex justify-center">
        <h2 className={'text-xl font-bold'}>Como funciona assinar?</h2>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="grid auto-cols-auto grid-cols-1 gap-y-4 pb-4 pt-4 md:grid-cols-4 md:gap-x-4 md:pb-8 md:pt-12">
          <Card className="md:max-w-[276px]">
            <CardHeader className="flex flex-row justify-between">
              <h1 className="text-5xl font-bold text-black text-opacity-90">
                1
              </h1>

              <div className="md:px-2.5">
                <MousePointer className="size-8 text-green-500" />
              </div>
            </CardHeader>

            <CardContent>
              <p>Escolha seu computador e o seu plano ideal.</p>
            </CardContent>
          </Card>
          <Card className="md:max-w-[276px]">
            <CardHeader className="flex flex-row justify-between">
              <h1 className="text-5xl font-bold text-black text-opacity-90">
                2
              </h1>

              <div className="md:px-2.5">
                <ShieldHalf className="size-8 text-green-500" />
              </div>
            </CardHeader>

            <CardContent>
              <p>Envie seus documentos de forma segura</p>
            </CardContent>
          </Card>

          <Card className="md:max-w-[276px]">
            <CardHeader className="flex flex-row justify-between">
              <h1 className="text-5xl font-bold text-black text-opacity-90">
                3
              </h1>

              <div className="md:px-2.5">
                <PartyPopper className="size-8 text-green-500" />
              </div>
            </CardHeader>

            <CardContent>
              <p>Adquira e receba seu produto na sua casa!</p>
            </CardContent>
          </Card>

          <Card className="md:max-w-[276px]">
            <CardHeader className="flex flex-row justify-between">
              <h1 className="text-5xl font-bold text-black text-opacity-90">
                4
              </h1>

              <div className="md:px-2.5">
                <MousePointer className="size-8 text-green-500" />
              </div>
            </CardHeader>

            <CardContent>
              <p>Escolha renovar ou adquirir permanentemente.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

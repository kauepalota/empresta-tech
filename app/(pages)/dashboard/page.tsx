'use client'

import { AddDocumentSection } from '@/components/checkout/sections/add-document-section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Link from 'next/link'

export default function Component() {
  return (
    <main className="grid flex-1 gap-6 p-4 md:grid-cols-[300px_1fr] md:p-8">
      <div className="flex flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Informações da conta</CardTitle>
          </CardHeader>
          <CardContent>
            <AddDocumentSection
              values={{
                fullName: 'Kauê Palota',
                cpf: '123.456.789-09',
                birthDate: new Date('2006-01-20'),
              }}
              onSubmit={() => {}}
              disabled
            />
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Histórico de compras</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID da compra</TableHead>
                  <TableHead>Produto</TableHead>
                  <TableHead>Data de compra</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Valor total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Link href="#" className="font-medium" prefetch={false}>
                      #1
                    </Link>
                  </TableCell>
                  <TableCell>{'MacBook Air M1 13"'}</TableCell>
                  <TableCell>18/04/2024</TableCell>
                  <TableCell>Enviado</TableCell>
                  <TableCell>R$ 3.199,20</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Link href="#" className="font-medium" prefetch={false}>
                      #2
                    </Link>
                  </TableCell>
                  <TableCell>{'MacBook Pro M2 13"'}</TableCell>
                  <TableCell>18/04/2024</TableCell>
                  <TableCell>Entregue</TableCell>
                  <TableCell>R$ 3.999,20</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Link href="#" className="font-medium" prefetch={false}>
                      #3
                    </Link>
                  </TableCell>
                  <TableCell>
                    {'Notebook Acer Predator Triton RTX 3060 i7'}
                  </TableCell>
                  <TableCell>18/04/2024</TableCell>
                  <TableCell>Entregue</TableCell>
                  <TableCell>R$ 3.077,64</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

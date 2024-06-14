import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'

const addAddressSchema = z.object({
  address: z.string({
    required_error: 'O endereço é obrigatório',
  }),
  number: z.coerce.number({
    invalid_type_error: 'O número é inválido',
    required_error: 'O número é obrigatório',
  }),
})

type AddAddressForm = z.infer<typeof addAddressSchema>

type AddAddressProps = {
  values?: AddAddressForm
  onSubmit(form: AddAddressForm): void
}

export function AddAddressSection({ onSubmit, values }: AddAddressProps) {
  const form = useForm<AddAddressForm>({
    resolver: zodResolver(addAddressSchema),
    defaultValues: values,
  })

  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rua</FormLabel>
              <FormControl>
                <Input placeholder="Rua Alberto Foloni" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Número</FormLabel>
              <FormControl>
                <Input type="number" placeholder={'132'} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          <ShoppingCart className="mr-2 size-4" />
          Prosseguir para pagamento
        </Button>
      </form>
    </Form>
  )
}

import Link from 'next/link'
import { UserIcon } from 'lucide-react'
import { cva } from 'class-variance-authority'

const LinkVariants = cva(
  'inline-flex justify-center items-center text-sm tracking-tight whitespace-nowrap text-sm font-medium',
  {
    variants: {
      variant: {
        default: 'underline-offset-4 hover:underline',
        outline: 'px-2 py-1 border border-foreground rounded-xl hover:bg-muted',
      },
    },
  },
)

export function MainNavbar() {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-12 pr-2">
        <li>
          <Link
            className={LinkVariants({ variant: 'default' })}
            href={'/catalog/all'}
          >
            Catálogo
          </Link>
        </li>
        <li>
          <Link
            className={LinkVariants({ variant: 'default' })}
            href={'/#how-it-works'}
          >
            Como funciona
          </Link>
        </li>
        <li>
          <Link
            className={LinkVariants({ variant: 'outline' })}
            href={'/dashboard'}
          >
            <UserIcon className="mr-2 size-4" />
            Já sou cliente
          </Link>
        </li>
      </ul>
    </nav>
  )
}

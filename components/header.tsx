import Image from 'next/image'
import Link from 'next/link'
import { MobileNavbar } from './mobile-navbar'
import { MainNavbar } from './main-navbar'

export function Header() {
  return (
    <div className="sticky left-0 right-0 top-0 z-50">
      <header className="h-14 w-full bg-background shadow-md">
        <div className="container flex h-full items-center justify-between">
          <Link href={'/'}>
            <Image
              src={'/logo.png'}
              alt="Next.js Logo"
              width={200}
              height={25}
            />
          </Link>

          <MobileNavbar />
          <MainNavbar />
        </div>
      </header>
    </div>
  )
}

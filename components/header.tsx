import Image from "next/image";
import Link from "next/link";
import { MobileNavbar } from "./mobile-navbar";
import { MainNavbar } from "./main-navbar";

export function Header() {
  return (
    <div className="sticky top-0 left-0 right-0 z-50">
      <header className="bg-background w-full h-14 shadow-md">
        <div className="container flex h-full justify-between items-center">
          <Link href={"/"}>
            <Image src={"/logo.png"} alt="Next.js Logo" width={200} height={25} />
          </Link>

          <MobileNavbar />
          <MainNavbar />
        </div>
      </header>
    </div>
  )
}
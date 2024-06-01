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
            <span>Logo</span>
            { /* <Image src={"vercel.svg"} alt="Next.js Logo" width={100} height={50} /> */ }
          </Link>

          <MobileNavbar />
          <MainNavbar />
        </div>
      </header>
    </div>
  )
}
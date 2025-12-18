"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { SheetTitle } from "@/components/ui/sheet"

const navItems = [
  { label: "O QUE É", href: "/#o-que-e", side: "left" },
  { label: "DEPOIMENTOS", href: "/depoimentos", side: "left" },
  { label: "UNIVERSIDADES", href: "/universidades", side: "left" },
  { label: "LÍDERES", href: "/lideres", side: "right" },
  { label: "DÚVIDAS", href: "/faq", side: "right" },
  { label: "INSCREVA-SE", href: "/#inscricao", side: "right" },
]

export default function NavbarSection() {
  return (
    <nav className="fixed top-0 left-0 w-full z-30">
      {/* Background da navbar */}
      <div
        className="
          absolute inset-0 -z-10
          bg-[url('/images/navbar-img.webp')]
          bg-cover bg-no-repeat bg-bottom
          h-[calc(100px_+_3vw)]
          transition-all duration-300
          translate-y-0
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 px-4">
            
            {/* Mobile menu */}
            <div className="flex items-center lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
                  <div className="flex flex-col space-y-3">
                    <div className="flex justify-center mt-20 mb-20">
                      <Link href="/">
                        <Image
                          src="/images/sonhando-alto-logo.webp"
                          alt="Sonhando Alto Logo"
                          width={300}
                          height={150}
                          className="h-auto w-48 sm:w-64 transition-all duration-300"
                        />
                      </Link>
                    </div>
                    {navItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="text-gray-700 hover:text-orange-500 font-sans font-bold py-2 px-4 rounded-md hover:bg-gray-50 transition-colors text-sm sm:text-base"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>

              {/* Logo mobile */}
              <div className="absolute right-4 px-2 w-44 sm:w-52 transition-all duration-300 top-16 transform -translate-y-10">
                <Link href="/">
                  <Image
                    src="/images/sonhando-alto-logo.webp"
                    alt="Sonhando Alto Logo"
                    width={300}
                    height={150}
                    className="h-auto w-full transition-all duration-300"
                    priority
                  />
                </Link>
              </div>
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:flex flex-1 justify-between items-center">
              {/* Left items */}
              <div className="flex items-center space-x-4 xl:space-x-8">
                {navItems
                  .filter((i) => i.side === "left")
                  .map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-gray-700 hover:text-orange-500 font-sans font-extrabold transition-colors text-sm xl:text-base"
                    >
                      {item.label}
                    </Link>
                  ))}
              </div>

              {/* Logo central */}
              <div className="flex-shrink-0 mx-4 xl:mx-8 xl:pr-20 pr-6 xl:px-8 py-8">
                <Link href="/">
                  <Image
                    src="/images/sonhando-alto-logo.webp"
                    alt="Sonhando Alto Logo"
                    width={150}
                    height={50}
                    className="h-auto transition-all duration-300 w-48 xl:w-64 translate-y-2"
                    priority
                  />
                </Link>
              </div>

              {/* Right items */}
              <div className="flex items-center space-x-4 xl:space-x-8">
                {navItems
                  .filter((i) => i.side === "right")
                  .map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-gray-700 hover:text-orange-500 font-sans font-extrabold transition-colors text-sm xl:text-base"
                    >
                      {item.label}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

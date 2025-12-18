import Link from "next/link"
import { Facebook, Twitter, Youtube, Instagram } from "lucide-react"
import Image from "next/image"

export default function FooterSection() {
  return (
    <footer className="bg-orange-500 z-10 text-white py-12 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">HORÁRIO DE ATENDIMENTO</h3>
            <p className="text-gray-300">Segunda a Sexta | 9h - 20h</p>
            <p className="text-gray-300">Sábado | 9h - 17h</p>
          </div>

          <div className="z-10">
            <h3 className="text-xl font-bold mb-4">MAIS INFORMAÇÕES</h3>
            <p className="text-gray-300">IDEC UNASP: (19) 98216-1125</p>
            <p className="text-gray-300">IDEC UNIAENE: (75) 99298-0004</p>
            <p className="text-gray-300">IDEC FAP: (44) 9700-2165</p>
            <p className="text-gray-300">IDEC FADMINAS: (35) 9204-0085</p>
            <p className="text-gray-300">IDEC FAAMA: (99) 8559-5050</p>
          </div>

          <div className="z-10">
            <h3 className="text-xl font-bold mb-4">CONTATOS SOCIAIS</h3>
            <div className="flex space-x-4">
              <Link href="https://www.youtube.com/playlist?list=PLtT7fGpN_s4IVt9bFwgD5cswOZbJfvali" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </Link>
              <Link href="https://www.instagram.com/sonhandoaltobrasil/" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/sonhando-alto-logo-dark-bg.webp"
              alt="Sonhando Alto Logo"
              width={180}
              height={60}
              className="h-auto w-44"
            />
          </div>
          <p className="text-white">© 2026 Sonhando Alto. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

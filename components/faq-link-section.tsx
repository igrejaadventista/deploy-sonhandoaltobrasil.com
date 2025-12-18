import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FAQLinkSection() {
  return (
    <section className="relative py-16 px-4 lg:px-8 bg-gray-50 z-10">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto items-center justify-center gap-8 text-center lg:text-left">
        
       
        <div className="">
          <h2 className="text-3xl lg:text-6xl text-orange-500 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600 mb-8 font-serif italic text-2xl">
            O que você gostaria de perguntar a um participante do Sonhando Alto?
          </p>
        </div>
        
        <div className="">
          <Link href="/faq" passHref>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 text-lg rounded-full">
              Ver Todas as Perguntas
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
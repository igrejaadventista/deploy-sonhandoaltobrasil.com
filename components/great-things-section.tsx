import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function GreatThingsSection() {
  return (
    <section className="pt-4 px-4">
      <div
        className="w-full max-w-none mx-auto rounded-3xl p-12 md:p-20 shadow-lg relative overflow-hidden min-h-[550px] md:min-h-[600px]"
        style={{
          backgroundImage: "url('/images/background-blue.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay para garantir legibilidade do texto */}
        <div className="absolute inset-0 bg-blue-600/30 rounded-3xl"></div>
        
        <div className="relative z-10 grid lg:grid-cols-2 items-start lg:items-end gap-8">
          {/* Conteúdo do texto */}
          <div className="space-y-10 text-white">
            <h2 className="text-3xl md:text-4 lg:text-6xl font-bold">
              Grandes coisas acontecem com quem 
              <span className="text-yellow-300"> sonha alto</span>:
            </h2>
            <ul className="space-y-4 text-lg md:text-xl lg:text-2xl leading-relaxed opacity-90">
              {[
                "Ter dinheiro para pagar todo o curso universitário;",
                "Até 35% de desconto nas mensalidades da faculdade*;",
                "Conhecer novos lugares;",
                "Desenvolver soft skills e sair na frente no mercado de trabalho;",
                "Transformar a vida de famílias e comunidades;",
                "Ser missionário e levar Jesus às pessoas.",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-300 mr-3 flex-shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Container da imagem */}
          <div className="relative h-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] md:max-w-[500px] lg:max-w-[550px] lg:absolute lg:bottom-0">
              <Image
                src="/images/homem-engenheiro.webp"
                alt="Jovem sonhando alto"
                width={800}
                height={800}
                className="w-full h-auto object-cover translate-y-12 md:translate-y-20"
              />
              <p className="absolute left-1/2 transform -translate-x-1/2 bottom-0 md:bottom-0 text-white italic text-center">
                <span className="text-black bg-yellow-500 px-2 text-sm md:text-base lg:text-lg">
                  *em universidades adventistas
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
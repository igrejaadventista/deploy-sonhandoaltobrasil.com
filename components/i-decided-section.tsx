"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Pause, Play, ChevronLeft, ChevronRight } from "lucide-react"
import { useMediaQuery } from "usehooks-ts"

const testimonialsPreview = [
  {
    name: "Lara",
    course: "Psicologia",
    image: "/images/depoimentos/lara.webp",
  },
  {
    name: "João Paulo Guedes",
    course: "Teologia",
    image: "/images/depoimentos/joaoPauloGuedes.webp",
  },
  {
    name: "Ezequias Moz",
    course: "Publicidade e Propaganda",
    image: "/images/depoimentos/ezequias.webp",
  },
]

export default function IDecidedSection() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDesktop = useMediaQuery("(min-width: 1024px)")

  useEffect(() => {
    if (!mounted || paused || !isDesktop) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialsPreview.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [paused, isDesktop, mounted])

  const goNext = () =>
    setCurrent((prev) => (prev + 1) % testimonialsPreview.length)

  const goPrev = () =>
    setCurrent(
      (prev) =>
        (prev - 1 + testimonialsPreview.length) %
        testimonialsPreview.length
    )

  if (!mounted) return null

  return (
    <section
      id="depoimentos"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-orange-500 mb-4">
          Eu decidi! Eu realizei!
        </h2>

        <p className="text-gray-600 mb-12 font-serif italic text-lg sm:text-xl lg:text-2xl">
          O Sonhando Alto acelera o caminho do seu sonho até aqui.
        </p>

        <div className="relative flex items-center justify-center">
          {!isDesktop && (
            <button
              onClick={goPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-orange-100 hover:bg-orange-300 p-2 rounded-full z-10"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft />
            </button>
          )}

          <div
            className={`flex gap-6 items-center justify-center ${
              isDesktop ? "flex-wrap" : "w-full"
            }`}
          >
            {testimonialsPreview.map((testimonial, index) => {
              if (!isDesktop && index !== current) return null

              const offset =
                (index - current + testimonialsPreview.length) %
                testimonialsPreview.length

              let positionClass = ""

              if (isDesktop) {
                if (offset === 0) {
                  positionClass = "z-10 scale-105"
                } else if (
                  offset === 1 ||
                  offset === testimonialsPreview.length - 1
                ) {
                  positionClass =
                    "z-9 scale-90 opacity-50 -translate-y-2"
                } else {
                  return null
                }
              }

              return (
                <motion.div
                  key={index}
                  className={`relative transition-all duration-700 transform ${positionClass}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Link
                    href="/depoimentos"
                    aria-label={`Ver depoimento de ${testimonial.name}`}
                    className="block cursor-pointer"
                  >
                    <div className="relative w-[250px] h-[400px] sm:w-[260px] sm:h-[440px] overflow-hidden rounded-[30px]">
                      <Image
                        src={testimonial.image}
                        alt={`Depoimento de ${testimonial.name} sobre o curso ${testimonial.course}`}
                        fill
                        className="object-cover rounded-[30px]"
                        sizes="(max-width: 1023px) 100vw, 33vw"
                      />

                      <div className="absolute bottom-5 w-full text-center z-10">
                        <h3 className="text-white text-2xl font-extrabold bg-orange-500 drop-shadow-[2px_2px_8px_rgba(0,0,0,0.9)]">
                          {testimonial.course}
                        </h3>
                        <p className="text-white text-sm font-semibold drop-shadow-md">
                          {testimonial.name}
                        </p>
                      </div>

                      <div className="absolute inset-0 bg-black/20 rounded-[30px] z-0" />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {!isDesktop && (
            <button
              onClick={goNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange-100 hover:bg-orange-300 p-2 rounded-full z-10"
              aria-label="Próximo depoimento"
            >
              <ChevronRight />
            </button>
          )}
        </div>

        {isDesktop && (
          <div className="flex justify-center items-center mt-8 gap-4">
            <div className="w-16 h-4 rounded-full bg-orange-200 relative overflow-hidden">
              <motion.div
                key={current}
                className="absolute top-0 left-0 h-full bg-orange-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 4, ease: "linear" }}
              />
            </div>

            <button
              onClick={() => setPaused((prev) => !prev)}
              className="w-10 h-10 flex items-center justify-center bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
              aria-label={paused ? "Reproduzir" : "Pausar"}
            >
              {paused ? <Play size={20} /> : <Pause size={20} />}
            </button>
          </div>
        )}

        <Link href="/depoimentos">
          <Button className="mt-10 bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 sm:py-3 sm:px-8 text-base sm:text-lg rounded-full">
            Ver Todos os Depoimentos
          </Button>
        </Link>
      </div>
    </section>
  )
}

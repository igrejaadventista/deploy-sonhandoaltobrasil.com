"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    title: "Quem pode participar?",
    subtitle: "O programa Sonhando Alto é destinado a jovens adventistas que já tenham concluído o Ensino Médio.",
    image: "/images/hero-graduate.webp",
  },
  {
    title: "Transforme seus sonhos",
    subtitle: "Uma oportunidade única de crescimento pessoal e profissional através da educação superior.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Realize seus objetivos",
    subtitle: "Conte com o apoio de líderes experientes e uma comunidade que acredita no seu potencial.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600">
        <div className="relative h-full flex items-center">
          <button
            onClick={prevSlide}
            className="absolute left-4 z-10 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 z-10 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          <div className="w-full px-4 lg:px-8">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-white space-y-6">
                <h1 className="text-3xl lg:text-5xl font-bold">{slides[currentSlide].title}</h1>
                <p className="text-lg lg:text-xl opacity-90">{slides[currentSlide].subtitle}</p>
                <div className="flex items-center space-x-4">
                  <div className="text-sm opacity-75">PUBLICAÇÕES</div>
                  <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <Image
                    src={slides[currentSlide].image || "/placeholder.svg"}
                    alt="Hero image"
                    width={400}
                    height={400}
                    className="rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  )
}

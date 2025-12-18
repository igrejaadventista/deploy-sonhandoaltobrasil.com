"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import RegistrationForm from "@/components/registration-form"
import { Mail } from "lucide-react"

export default function FloatingSubscribeButton() {
  const titles = ["Inscreva-se", "Dê um play no seu futuro", "Decida e mude agora!"]
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)

  // Troca de título a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-4 shadow-lg z-40 animate-bounce-slow"
          size="lg"
        >
          <Mail className="h-6 w-6 mr-2" />
          {titles[currentTitleIndex]}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] w-[calc(100%-2rem)] mx-4 p-6 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-orange-500 text-center">Inscreva-se Agora!</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <RegistrationForm variant="dialog" />
        </div>
      </DialogContent>
    </Dialog>
  )
}

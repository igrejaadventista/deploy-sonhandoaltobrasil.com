import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, ExternalLink } from "lucide-react"

interface UniversityCardProps {
  name: string
  image: string
  description: string
  phone: string
  email: string
  website: string
  courses: string[]
}

export default function UniversityCard({
  name,
  image,
  description,
  phone,
  email,
  website,
  courses,
}: UniversityCardProps) {
  return (
    <div className="flex justify-center p-4">
      <Card className="shadow-lg rounded-lg flex flex-col w-full max-w-2xl border border-gray-300 overflow-hidden">
        {/* Layout de duas colunas em telas maiores */}
        <div className="flex flex-col md:flex-row">
          {/* Imagem - ocupa 40% em telas maiores */}
          <div className="relative w-full md:w-2/5 h-48 md:h-auto flex-shrink-0 border-b md:border-b-0 md:border-r border-gray-200">
            <Image
              src={image || "/placeholder.svg?height=200&width=400&query=university-building"}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              style={{ objectFit: "cover" }}
              className="bg-gray-100"
            />
          </div>

          {/* Conteúdo - ocupa 60% em telas maiores */}
          <CardContent className="flex flex-col p-4 md:p-6 w-full md:w-3/5">
            {/* Nome */}
            <h3 className="text-xl md:text-2xl font-bold text-orange-500 break-words mb-3">{name}</h3>

            {/* Cursos */}
            {courses.length > 0 && (
              <div className="mb-3">
                <h4 className="font-semibold text-gray-800 mb-1">Cursos oferecidos:</h4>
                <div className="flex flex-wrap gap-2">
                  {courses.map((course, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Descrição */}
            <div className="mb-3 flex-grow">
              <h4 className="font-semibold text-gray-800 mb-1">Descrição:</h4>
              <p className="text-gray-700 text-sm leading-relaxed line-clamp-5 hover:line-clamp-none">
                {description}
              </p>
            </div>

            {/* Contato */}
            <div className="space-y-1 text-sm text-gray-700 break-words mb-3">
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-blue-500 flex-shride-0 mt-0.5" />
                <span>{phone}</span>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="break-all">{email}</span>
              </div>
            </div>

            {/* Botão */}
            <Link href={website} target="_blank" rel="noopener noreferrer" className="mt-2">
              <Button
                variant="outline"
                className="w-full border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Visitar Site
              </Button>
            </Link>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}
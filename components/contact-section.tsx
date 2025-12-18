import { Phone, Mail, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactSection() {
  return (
    <section id="contato" className="py-16 px-4 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-orange-500 text-center mb-12">Informações de Contato</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Phone className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Telefone</h3>
              <p className="text-gray-600">(11) 99999-9999</p>
              <p className="text-gray-600">(11) 3333-3333</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Mail className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">E-mail</h3>
              <p className="text-gray-600">contato@sonhandoalto.com</p>
              <p className="text-gray-600">inscricoes@sonhandoalto.com</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <MapPin className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Endereço</h3>
              <p className="text-gray-600">Rua das Esperanças, 123</p>
              <p className="text-gray-600">São Paulo - SP</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

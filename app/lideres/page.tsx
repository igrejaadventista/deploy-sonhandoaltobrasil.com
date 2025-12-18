import BrazilMap from "@/components/brazil-map"

export default function LeadersPage() {
  return (
    <div className="min-h-screen flex flex-col">
     
      <main className="flex-1">
        <section className="py-16 px-4 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto mt-28">
            <h2 className="text-3xl lg:text-4xl font-bold text-orange-500 text-center mb-4">
              Encontre seu Representante Regional
            </h2>
            <p className="text-gray-600 font-serif text-center mb-12 italic text-lg sm:text-xl lg:text-1xl">
              Clique no seu estado no mapa para encontrar o contato local e
              informações sobre as universidades
              disponíveis na sua região.
            </p>
            <BrazilMap />
          </div>
        </section>
      </main>

    </div>
  )
}

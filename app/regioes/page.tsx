import BrazilMap from "@/components/brazil-map"

export default function RegionsPage() {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1 py-16 px-4 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-orange-500 text-center mb-4">
            Encontre seu Representante Regional
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Clique no seu estado no mapa para encontrar o contato local e informações sobre as universidades disponíveis
            na sua região.
          </p>
          <BrazilMap />
        </div>
      </main>

    </div>
  )
}

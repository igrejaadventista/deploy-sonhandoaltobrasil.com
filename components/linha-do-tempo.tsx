import { url } from "inspector"

export default function TimelineSection() {
  const timelineEvents = [
    {
      year: "2000",
      title: "O Início",
      description: "É criado no Brasil, na cidade de Curitiba, o projeto Sonhando Alto.",
    },
    {
      year: "2001",
      title: "Primeiros Estudantes",
      description: "14 dos 16 participantes vão para o UNASP-EC para iniciar seus estudos em nível universitário.",
      highlight: 'É criada a primeira versão no Chile com o nome "Sueña en GRANDE".',
    },
    {
      year: "2003-2004",
      title: "Primeiras Graduações",
      description: "Se graduam os primeiros profissionais frutos do projeto.",
    },
    {
      year: "2016",
      title: "Expansão Global",
      description:
        'O projeto rompe mais fronteiras e é lançado pela Associação Geral para o mundo com o nome "Think BIG".',
    },
    {
      year: "2000-2018",
      title: "Crescimento Exponencial",
      description:
        "Milhares de jovens são beneficiados pelo projeto — estima-se aproximadamente 30.000 na América do Sul.",
    },
    {
      year: "2019",
      title: "20 Anos de Impacto",
      description: "Crescimento do projeto na América do Sul para 35.000 jovens beneficiados.",
      highlight: "O Sonhando Alto celebra 20 anos!",
    },
    {
      year: "2020-2021",
      title: "Adaptação na Pandemia",
      description:
        "Cerca de 35.000 jovens impactados. Com a COVID-19, ~500 estudantes seguiram nas atividades. O projeto reforçou o uso de lives, apps e plataformas online para treinar e manter as vendas e o financiamento dos estudos.",
    },
    {
      year: "2022-2024",
      title: "Avanços Tecnológicos",
      description:
        "Consolidação do uso de redes sociais, aplicativos e eventos virtuais. Expansão para além da América do Sul (México, Tanzânia, Filipinas). A filosofia Think BIG se fortaleceu, atraindo novas gerações.",
    },
    {
      year: "2025",
      title: "25 Anos de História",
      description:
        "Comemoração do 25º aniversário. Semana da Colportagem promovida pelo UNASP-EC (28 set.–4 out.), homenagens aos pioneiros e aos pastores.",
      highlight: "Mais de 50.000 jovens beneficiados, consolidando legado educacional e missionário.",
    },
  ]

  return (
    <section className="bg-background py-16 px-4 sm:py-24 sm:px-6 lg:px-8" style={{backgroundImage: 'url("/images/fundo-invertido-laranja.webp")'}}>
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center text-[#0ba9ea] pt-11">
          <h2 className="mb-4 text-4xl font-bold tracking-tight  sm:text-5xl lg:text-6xl text-balance">
            25 Anos de Sucesso!
          </h2>
          <p className="text-xl text-muted-foreground sm:text-2xl text-balance">
            Muitas conquistas e milhares de vidas transformadas
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 md:left-1/2 md:-translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-16 md:space-y-24">
            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row md:items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Year badge - centered on the line */}
                  <div className="absolute  left-8 md:left-1/2 md:-translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#003366] text-primary-foreground shadow-xl ring-8 ring-background">
                      <span className="text-sm font-bold leading-tight text-center px-2">{event.year}</span>
                    </div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-24 md:ml-0 md:w-[calc(50%-3rem)] ${
                      isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                    }`}
                  >
                    <div className="group rounded-xl border-2 border-[#003366]/50 bg-background p-6 shadow-lg transition-all hover:border-[#003366] hover:shadow-xl hover:-translate-y-1">
                      <h3 className="mb-3 text-2xl font-bold text-[#003366]">{event.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                      {event.highlight && (
                        <div className="mt-4 rounded-lg bg-[#003366]/10 border border-[#003366]/30 px-4 py-3">
                          <p className="text-sm font-semibold text-[#003366]">{event.highlight}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Footer stats */}
        <div className="mt-16 grid gap-8 rounded-2xl bg-[#003366] p-8 text-center sm:grid-cols-3">
          <div>
            <div className="text-4xl font-bold text-primary-foreground">25</div>
            <div className="mt-2 text-sm text-primary-foreground/90">Anos de História</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-foreground">50K+</div>
            <div className="mt-2 text-sm text-primary-foreground/90">Jovens Beneficiados</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-foreground">Global</div>
            <div className="mt-2 text-sm text-primary-foreground/90">Alcance Mundial</div>
          </div>
        </div>
      </div>
    </section>
  )
}

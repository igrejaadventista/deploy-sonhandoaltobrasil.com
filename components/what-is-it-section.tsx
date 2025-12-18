export default function WhatIsItSection() {
  return (
    <section id="o-que-e" className="pt-5 px-4 lg:bg-transparent">
      <div
        className="w-full max-w-none mx-auto rounded-3xl p-12 md:p-20 shadow-lg relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/fundo-invertido-laranja.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay para garantir legibilidade do texto */}
        <div className="absolute inset-0 bg-orange-500/30 rounded-3xl"></div>
        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6 text-white">
            <h1 className="text-3xl lg:text-6xl font-bold flex items-center">
              <span className="bg-sky-600 px-1">O que é?</span>
            </h1>
            <h3 className="text-2xl lg:text-4xl font-semibold">
              Experimente sonhar e nós ajudamos você a realizar!
            </h3>
            <p className="text-lg lg:text-2xl leading-relaxed text-justify opacity-90">
              Sabe aquele sonho de ir para a universidade, ter uma carreira, fazer amigos, transformar vidas e
              apresentar Jesus a muita gente? O <b>Sonhando Alto</b> é o seu lugar!<br /> Há 25 anos, o Sonhando Alto é o programa
              que acelera o caminho de quem sonha em ingressar na universidade, mas não possui recursos para isso.
              Durante o trajeto, você desenvolve talentos e cresce nos aspectos pessoal e espiritual.
            </p>
          </div>

          {/* Vídeo com capa (não inicia automaticamente) */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-3xl max-h-[500px]   aspect-video rounded-2xl overflow-hidden shadow-xl border-8 border-white">
              <video
                className="w-full h-full  object-cover "
                controls
                playsInline
                poster="/images/video-poster.webp" 
              >
                <source src="/videos/video-sonhando-alto.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

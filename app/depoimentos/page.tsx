import TestimonialsSectionFull from "@/components/testimonials-section-full";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Vídeos de Testemunhos */}
        <section className="pt-36 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500 mb-4">
              Histórias que Inspiram
            </h2>
            <p className="text-gray-600 mb-10 text-lg font-serif italic">
              Assista a testemunhos de quem decidiu Sonhar Alto.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vídeo 1 */}
              <div className="aspect-video rounded-xl overflow-hidden shadow-md bg-black  ">
                <video
                  className="w-full h-full object-contain"
                  controls
                  preload="none"
                  playsInline
                  controlsList="nodownload"
                  poster="/images/depoimentos/maxilaene.webp"
                >
                  <source
                    src="/videos/testemunho_maxilaene.mp4"
                    type="video/mp4"
                  />
                  Seu navegador não suporta vídeos HTML5.
                </video>
              </div>

              {/* Vídeo 2 */}
              <div className="aspect-video rounded-xl overflow-hidden shadow-md bg-black  ">
                <video
                  className="w-full h-full object-contain"
                  controls
                  preload="none"
                  playsInline
                  controlsList="nodownload"
                  poster="/images/depoimentos/julio_diniz.webp"
                >
                  <source
                    src="/videos/testemunho_julio_diniz.mp4"
                    type="video/mp4"
                  />
                  Seu navegador não suporta vídeos HTML5.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos em texto */}
        <TestimonialsSectionFull />
      </main>
    </div>
  );
}

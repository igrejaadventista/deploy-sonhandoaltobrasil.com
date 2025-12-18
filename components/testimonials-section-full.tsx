"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, GraduationCap, User } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

const testimonials = [
  {
    name: "Ezequias Moz",
    course: "Publicidade e Propaganda",
    image: "/images/depoimentos/ezequias.webp",
    status: "estudante",
    quote:
      "Através do Sonhando Alto realizei o sonho de estudar em uma faculdade adventista...",
    story:
      "Estudante de Publicidade e Propaganda na FADMINAS, realizou o sonho de estudar em uma faculdade adventista por meio do Projeto Sonhando Alto. Ao longo da colportagem, teve a oportunidade de conhecer pessoas, viver novas experiências e pregar o evangelho. Hoje, reconhece que o projeto é um caminho para alcançar objetivos, desenvolver dons e servir a Deus.",
  },
  {
    name: "Lara",
    course: "Psicologia",
    image: "/images/depoimentos/lara.webp",
    status: "estudante",
    quote:
      "Sempre sonhou em ser Psicóloga e hoje esse sonho está se tornando realidade...",
    story:
      "Sempre sonhou em ser Psicóloga e hoje vê esse sonho se tornar realidade graças ao ministério da colportagem. Além do apoio financeiro, a experiência fortaleceu sua formação espiritual, moldou seu caráter e lhe deu a oportunidade de levar muitas pessoas a conhecerem o amor de Deus.",
  },
  {
    name: "Milena",
    course: "Pedagogia",
    image: "/images/depoimentos/milena.webp",
    status: "estudante",
    quote:
      "Sempre sonhou em estudar em uma faculdade adventista e hoje vive essa conquista...",
    story:
      "Sempre sonhou em estudar em uma faculdade adventista e hoje, graças a Deus e à colportagem, vive essa conquista. Atualmente cursa Pedagogia na FADMINAS e é grata por cada aprendizado e vitória alcançados ao longo dessa jornada.",
  },
  {
    name: "Israel Cunha",
    course: "Direito",
    image: "/images/depoimentos/israelCunha.webp",
    status: "formado",
    quote:
      "Minha história com o Projeto Sonhando Alto começou em 2003, em Macapá...",
    story:
      "Minha história com o Projeto Sonhando Alto começou em 2003, em Macapá, quando dei meus primeiros passos na colportagem. Com o apoio do projeto, consegui ingressar na universidade, mas precisei interromper os estudos. Em 2010, Deus me deu uma nova oportunidade em Goiás: conquistei uma bolsa, ingressei no curso de Direito no UNASP, colportei todas as férias, me formei em 2015 e passei na OAB de primeira. Hoje, para a glória de Deus, sou professor e coordenador do curso de Direito na UIAENE. Se você acredita que Deus pode transformar sua história, venha viver o propósito que o Sonhando Alto oferece!",
  },
  {
    name: "Pedro Henrique",
    course: "Psicologia",
    image: "/images/depoimentos/pedroHenrique.webp",
    status: "estudante",
    quote:
      "Venho de uma família simples, mas sempre sonhei em estudar em uma instituição adventista...",
    story:
      "Venho de uma família simples e de uma cidade pequena, mas sempre sonhei em estudar em uma instituição adventista. Em 2019, conheci a colportagem e o Projeto Sonhando Alto, que tornaram esse sonho possível. Com essa oportunidade, iniciei a faculdade, realizei meu casamento e aprendi que fé e perseverança caminham juntas. Hoje, estou realizando meu maior sonho: formar-me em Psicologia na Faculdade Adventista do Paraná. Se você deseja ver Deus agir na sua vida, venha Sonhar Alto também!",
  },
  {
    name: "Ana Luiza",
    course: "Direito",
    image: "/images/depoimentos/anaLuiza.webp",
    status: "estudante",
    quote:
      "Sou estudante de Direito e encontrei na colportagem uma experiência que transformou minha vida...",
    story:
      "Sou estudante de Direito na FADMINAS e encontrei na colportagem uma experiência que transformou minha vida. Durante as férias, aprendi a vencer inseguranças, fortalecer minha fé e desenvolver habilidades que levarei para toda a vida. Mais do que isso, tive o privilégio de levar esperança a muitas pessoas. Agora, prestes a me formar, reconheço que tudo isso só foi possível graças a Deus por meio do Projeto Sonhando Alto. Venha viver essa transformação você também!",
  },
  {
    name: "Érica Giacomolli",
    course: "Enfermagem",
    image: "/images/depoimentos/ericaGiacomolli.webp",
    status: "estudante",
    quote:
      "Em 2021, eu buscava um novo rumo para minha vida e sonhava em estudar...",
    story:
      "Em 2021, buscava um novo rumo para minha vida e sonhava em estudar, mas não tinha recursos financeiros. Ao conhecer o Projeto Sonhando Alto, vi portas se abrirem de uma forma que jamais imaginei. Hoje, estou no último ano de Enfermagem, com a fé fortalecida e a certeza de que Deus guiou cada passo dessa jornada. Foram 10 férias de colportagem, cheias de experiências marcantes. Se você deseja viver o impossível de Deus, venha Sonhar Alto!",
  },
  {
    name: "Dayane Benevido",
    course: "Psicologia",
    image: "/images/depoimentos/dayaneBenevido.webp",
    status: "estudante",
    quote:
      "Minha história foi transformada ao conhecer o Projeto Sonhando Alto...",
    story:
      "Natural de Rondônia, teve sua história transformada em 2016 ao conhecer o Projeto Sonhando Alto. Em 2017 participou da primeira campanha, movida pelo sonho da graduação. Após um período no voluntariado, retornou em 2020 e, em 2021, iniciou Psicologia na Faculdade Adventista do Paraná. Hoje, prestes a se formar em 2025, carrega no coração a certeza de que vale a pena confiar e Sonhar Alto com Deus!",
  },
  {
    name: "Rafael Oliveira",
    course: "Teologia",
    image: "/images/depoimentos/rafaelOliveira.webp",
    status: "estudante",
    quote:
      "Aos 18 anos, aceitei o convite para participar do Projeto Sonhando Alto...",
    story:
      "Em 2021, aos 18 anos, aceitou o convite para participar do Projeto Sonhando Alto — e essa decisão mudou completamente sua vida. Por meio da colportagem, cresceu espiritualmente, amadureceu como pessoa e teve a oportunidade de ingressar no UNIAENE e no internato. Hoje, está prestes a concluir a graduação em Teologia e reconhece que tudo começou com um “sim” para Deus. O Sonhando Alto pode ser um divisor de águas na sua vida também!",
  },
  {
    name: "João Paulo Guedes",
    course: "Teologia",
    image: "/images/depoimentos/joaoPauloGuedes.webp",
    status: "estudante",
    quote:
      "Aos 18 anos, tomei a melhor decisão da minha vida ao entrar no projeto...",
    story:
      "Aos 18 anos, tomou a melhor decisão da sua vida ao entrar no Projeto Sonhando Alto. Em 2019, iniciou o curso de Pedagogia no UNIAENE e hoje está se formando. Motivado por essa experiência, segue também na graduação em Teologia. Grato a Deus por tudo o que viveu até aqui, acredita que o Sonhando Alto transforma destinos. Se você deseja ir além, dê um “play no futuro”.",
  },
  {
    name: "Larissa Nascimento",
    course: "Psicologia",
    image: "/images/depoimentos/larissaNascimento.webp",
    status: "estudante",
    quote:
      "O Projeto Sonhando Alto foi um verdadeiro divisor de águas na minha vida...",
    story:
      "O Projeto Sonhando Alto foi um verdadeiro divisor de águas na sua vida. Por meio dele, um sonho que estava adormecido voltou a viver. Enfrentou desafios, viveu conquistas, construiu amizades e realizou o grande sonho de entrar na universidade. Hoje, sente-se transformada e preparada para o futuro. Se você deseja ver Deus agir na sua história, venha Sonhar Alto!",
  },
  {
    name: "Gessica Soares",
    course: "Psicologia",
    image: "/images/depoimentos/gessicaSoares.webp",
    status: "estudante",
    quote: "Fui a primeira da minha família a conquistar o ensino superior...",
    story:
      "Aos 18 anos, deixou o interior com o sonho de conquistar novas oportunidades. No Projeto Sonhando Alto, encontrou crescimento emocional, espiritual e profissional. Tornou-se a primeira da família a conquistar o ensino superior, formou-se em Pedagogia e hoje conclui Psicologia. Tudo isso graças a Jesus e ao Sonhando Alto. Se você sonha em romper limites, esse projeto é para você!",
  },
  {
    name: "Carlos Monsores",
    course: "Teologia",
    image: "/images/depoimentos/carlosMonsores.webp",
    status: "estudante",
    quote: "Minha vida foi transformada ao conhecer o Projeto Sonhando Alto...",
    story:
      "Em 2019, sua vida foi transformada ao conhecer a Igreja e o Projeto Sonhando Alto. Através da colportagem, conquistou bolsas, sustento e direção para seguir no ministério. Hoje, está no último ano de Teologia, certo de que Deus continua sustentando seu chamado. Se você deseja viver uma história de fé e propósito, venha Sonhar Alto!",
  },
  {
    name: "Ana Greice",
    course: "História",
    image: "/images/depoimentos/anaGreice.webp",
    status: "formado",
    quote:
      "Deixei emprego e cidade para viver a experiência do Projeto Sonhando Alto...",
    story:
      "Natural de Pelotas (RS), deixou emprego e cidade para viver a experiência do Projeto Sonhando Alto. Nesse caminho, conquistou bolsas de estudo, conheceu seu esposo, entregou sua vida a Jesus e se formou em História no UNASP-EC. Hoje, como líder de colportagem, inspira outros a viverem a transformação que ela viveu. O Sonhando Alto pode mudar a sua história também!",
  },
  {
    name: "Matheus Guimarães",
    course: "Teologia",
    image: "/images/depoimentos/matheusGuimaraes.webp",
    status: "estudante",
    quote:
      "Após a frustração do vestibular, encontrei no Sonhando Alto uma nova chance...",
    story:
      "Iniciou na colportagem em 2016 e, após a frustração do vestibular, encontrou no Projeto Sonhando Alto uma nova chance. Foi lá que conquistou sua primeira bolsa, conheceu sua esposa, Ana Greice, e fortaleceu seu chamado. Hoje, cursando Teologia e com 33 campanhas vividas, testemunha que o Sonhando Alto marcou completamente sua trajetória. Se você deseja viver propósito, esse é o seu lugar!",
  },
  {
    name: "Lívia Lima",
    course: "Psicologia",
    image: "/images/depoimentos/liviaLima.webp",
    status: "estudante",
    quote: "No Projeto Sonhando Alto, descobri meu verdadeiro chamado...",
    story:
      "Começou a colportar em 2019 e, no Projeto Sonhando Alto, descobriu seu verdadeiro chamado. Ao longo das campanhas, aprendeu que não é sobre habilidades humanas, mas sobre o poder de Deus. Hoje, prestes a se formar em Psicologia no UNASP, reconhece que sua vida foi completamente transformada por essa experiência. Se você quer crescer espiritualmente e profissionalmente, venha Sonhar Alto!",
  },
];

export default function IDecidedSection() {
  const [current, setCurrent] = useState(0);
  const [filter, setFilter] = useState<"todos" | "estudante" | "formado">(
    "todos"
  );
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(
    null
  );
  const [mounted, setMounted] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px)");

  const filteredTestimonials = testimonials.filter((t) =>
    filter === "todos" ? true : t.status === filter
  );

  // ✅ marca quando o componente montou
  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ resetar índice ao mudar filtro
  useEffect(() => {
    setCurrent(0);
  }, [filter]);

  // ✅ autoplay em mobile/tablet
  useEffect(() => {
    if (isDesktop) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % filteredTestimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isDesktop, filteredTestimonials.length]);

  // ⛔️ só aqui você interrompe o render se não estiver montado
  if (!mounted) {
    return null;
  }

  // Funções auxiliares
  const goNext = () =>
    setCurrent((prev) => (prev + 1) % filteredTestimonials.length);

  const goPrev = () =>
    setCurrent(
      (prev) =>
        (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length
    );

  return (
    <section
      id="depoimentos"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center mt-24">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500 mb-4">
          Eu decidi! Eu realizei!
        </h2>
        <p className="text-gray-600 mb-12 font-serif italic text-lg sm:text-xl lg:text-1xl">
          O Sonhando Alto acelera o caminho do seu sonho até aqui. <br />
          Veja os depoimentos de quem já transformou sua vida!
        </p>

        {/* Filtros */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          <Button
            variant={filter === "todos" ? "default" : "outline"}
            onClick={() => setFilter("todos")}
            className="flex items-center gap-2 mb-2 sm:mb-0"
          >
            <User className="h-4 w-4" />
            Todos
          </Button>
          <Button
            variant={filter === "estudante" ? "default" : "outline"}
            onClick={() => setFilter("estudante")}
            className="flex items-center gap-2 mb-2 sm:mb-0"
          >
            <User className="h-4 w-4" />
            Estudantes
          </Button>
          <Button
            variant={filter === "formado" ? "default" : "outline"}
            onClick={() => setFilter("formado")}
            className="flex items-center gap-2"
          >
            <GraduationCap className="h-4 w-4" />
            Formados
          </Button>
        </div>

        <div className="relative flex items-center justify-center">
          {!isDesktop && filteredTestimonials.length > 0 && (
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
            {filteredTestimonials.length > 0 ? (
              filteredTestimonials.map((testimonial, index) => {
                if (!isDesktop && index !== current) return null;
                if (isTablet && !isDesktop && Math.abs(index - current) > 1)
                  return null;

                return (
                  <div
                    key={index}
                    className="relative transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="relative w-[180px] h-[320px] sm:w-[200px] sm:h-[360px] lg:w-[220px] lg:h-[400px] overflow-hidden rounded-xl shadow-md group">
                      <Image
                        src={testimonial.image}
                        alt={`Depoimento de ${testimonial.name}`}
                        fill
                        priority
                        className="object-cover object-top rounded-xl"
                        sizes="(max-width: 767px) 180px, (max-width: 1023px) 200px, 220px"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 flex flex-col justify-end p-4 z-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-xl">
                        <span
                          className={`px-2 py-1 w-fit text-xs rounded-full ${
                            testimonial.status === "formado"
                              ? "bg-green-500  text-white"
                              : "bg-blue-500 text-white"
                          }`}
                        >
                          {testimonial.status === "formado"
                            ? "Formado"
                            : "Estudante"}
                        </span>

                        <div className="mt-auto">
                          <h3 className="text-white text-sm font-medium mb-1">
                            {testimonial.name}
                          </h3>
                          <p className="text-orange-300 text-lg lg:text-xl font-bold mb-3">
                            {testimonial.course}
                          </p>
                          <p className="text-white text-xs sm:text-sm line-clamp-3 mb-3">
                            "{testimonial.quote}"
                          </p>

                          <button
                            onClick={() => setSelectedTestimonial(index)}
                            className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold rounded"
                          >
                            Ver História Completa
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="py-12 text-gray-500">
                Nenhum depoimento encontrado para esta categoria.
              </div>
            )}
          </div>

          {!isDesktop && filteredTestimonials.length > 0 && (
            <button
              onClick={goNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange-100 hover:bg-orange-300 p-2 rounded-full z-10"
              aria-label="Próximo depoimento"
            >
              <ChevronRight />
            </button>
          )}
        </div>

        {!isDesktop && filteredTestimonials.length > 0 && (
          <div className="flex justify-center items-center mt-6 gap-2">
            {filteredTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                  index === current ? "bg-orange-500" : "bg-orange-200"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Modal */}
        <Dialog
          open={selectedTestimonial !== null}
          onOpenChange={(open) => !open && setSelectedTestimonial(null)}
        >
          <DialogContent className="max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90vh] overflow-y-auto">
            {selectedTestimonial !== null && (
              <>
                <DialogHeader className="flex justify-between items-center">
                  <DialogTitle className="sr-only">
                    Depoimento de{" "}
                    {filteredTestimonials[selectedTestimonial].name}
                  </DialogTitle>
                  <div className="text-center w-full">
                    <h3 className="text-gray-800">
                      {filteredTestimonials[selectedTestimonial].name}
                    </h3>
                    <p className="text-orange-500 text-xl font-bold">
                      {filteredTestimonials[selectedTestimonial].course}
                    </p>
                  </div>
                </DialogHeader>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  {/* Foto */}
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden flex items-center justify-center bg-white">
                    <Image
                      src={filteredTestimonials[selectedTestimonial].image}
                      alt={`Depoimento de ${filteredTestimonials[selectedTestimonial].name}`}
                      fill
                      priority
                      className=" object-contain px-0"
                    />
                  </div>

                  {/* Texto */}
                  <div className="space-y-4">
                    {/* <blockquote className="text-gray-700 italic">
                      "{filteredTestimonials[selectedTestimonial].quote}"
                    </blockquote> */}
                    <p className="text-gray-600">
                      {filteredTestimonials[selectedTestimonial].story}
                    </p>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

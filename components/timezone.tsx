"use client";

import { JSX } from "react";
import { Pagination, Autoplay } from "swiper/modules";
import { MoveRightIcon } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { timelineEvents } from "@/utils/timezone";

import "swiper/css";
import "swiper/css/pagination";
import "@/styles/swiper.css";

export default function TimeZoneSection(): JSX.Element {
  return (
    <section className="pt-4 px-4">
      <div className="w-full max-w-none mx-auto rounded-3xl pt-8 md:p-12 lg:pt-24 relative overflow-hidden min-h-[550px] md:min-h-[650px]">
        {/* Background */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500 via-amber-500/90 to-orange-600" />
        <div className="absolute inset-0 rounded-3xl bg-white/10" />

        <div className="relative z-10 h-full flex flex-col gap-10 text-white">
          {/* Header */}
          <div className="max-w-3xl px-2 space-y-4">
            <h2 className="inline-block text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-white/30 px-3 py-1 rounded-lg">
              NOSSA HISTÓRIA
            </h2>

            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed opacity-95 text-justify">
              Um sonho que começou pequeno, em Curitiba, e hoje inspira milhares
              de jovens ao redor do mundo a{" "}
              <span className="font-bold">
                pensar grande, estudar e viver uma missão.
              </span>{" "}
              Esta linha do tempo mostra alguns dos marcos mais importantes
              dessa jornada.
            </p>
          </div>

          {/* Timeline container */}
          <div className="mx-1 bg-white/10 text-white border border-white/30 rounded-2xl p-4 md:p-6 backdrop-blur-md relative">
            <div className="flex items-center justify-between gap-4 mb-4 md:mb-6">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold">
                  Linha do tempo do projeto
                </h3>
                <p className="text-sm md:text-base opacity-85">
                  Arraste para o lado ou aguarde a rotação automática.
                </p>
              </div>

              <span className="hidden md:inline-flex text-xs uppercase tracking-wide bg-white/30 px-3 py-1 rounded-full">
                2000 → 2025
              </span>
            </div>

            {/* Carousel */}
            <div className="relative pb-10 cursor-grab active:cursor-grabbing">
              <Swiper
                modules={[Pagination, Autoplay]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                spaceBetween={16}
                slidesPerView={1.1}
                breakpoints={{
                  640: { slidesPerView: 1.4 },
                  768: { slidesPerView: 2.1 },
                  1024: { slidesPerView: 3.1 },
                }}
                className="mySwiper"
              >
                {timelineEvents.map((event) => (
                  <SwiperSlide key={event.year + event.title}>
                    <article className="h-[300px] max-w-xl  bg-gradient-to-br from-blue-400 via-blue-500  to-blue-600 border border-white/80 rounded-3xl p-4 flex flex-col gap-2 shadow-lg backdrop-blur-sm">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-300" />
                        <span className="text-base font-semibold uppercase tracking-wide text-white/90">
                          {event.year}
                        </span>
                      </div>

                      <h4 className="text-lg font-semibold text-white">
                        {event.title}
                      </h4>

                      <p className="text-sm md:text-base leading-relaxed text-white/90">
                        {event.description}
                      </p>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

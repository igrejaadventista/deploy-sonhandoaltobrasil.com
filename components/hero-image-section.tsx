import Image from "next/image";

export default function HeroImageSection() {
  return (
    <section className="relative w-full h-[700px] md:h-[600px] lg:h-[750px] overflow-hidden">
      {/* Banner otimizado */}
      <Image
        src="/images/banner.webp"
        alt="Banner de fundo"
        fill
        priority
        quality={90}
        className="object-cover object-center"
      />

      {/* Coração central */}
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <Image
          src="/images/img-central-coracao.webp"
          alt="Coração Central"
          width={1000}
          height={1000}
          priority
          className="w-[500px] sm:w-[600px] md:w-[500px] lg:w-[700px] animate-heartbeat"
        />
      </div>
    </section>
  );
}

"use client";

import { cn } from "@/lib/utils";
import { Be_Vietnam_Pro } from "next/font/google";

import CarouselHero from "@/components/carousel-hero";

import { MetaProvider } from "@/contexts/meta-context";

import { OurNumbers } from "@/components/page-components/our-numbers";
import { useMediaQuery } from "react-responsive";
import { HeroForm } from "@/components/forms/hero";
import { useImoveis } from "@/utils/queries";
import { Loading } from "./loading";
import { Imovel } from "@/types/global";

const font = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["200", "400", "700", "900"],
});

export const Hero = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 624px)" });

  const randomNumber = Math.floor(Math.random() * 4) + 1;
  const quantityImoveis = useImoveis(5).data?.data;

  if (!quantityImoveis) {
    return <Loading />;
  }

  const imoveisData = quantityImoveis[randomNumber] as Imovel;

  return (
    <section className="px-[15px] w-full  pt-32 md:pt-48 overflow-x-hidden ">
      <div className="w-full max-w-[1216px] mx-auto">
        {/* Hero Area */}
        <div className="flex flex-col lg:flex-row gap-14">
          {/* CTA AREA */}
          <div className="w-full max-w-[530px] flex flex-col gap-5">
            <h1
              className={cn("font-bold text-5xl md:text-6xl", font.className)}
              rel="preload"
            >
              O primeiro passo para
              <span className="text-secondary-red font-extrabold">
                {" para seu novo lar! "}
              </span>
            </h1>
            <p className={cn("font-normal", font.className)}>
              Transforme o sonho do primeiro apartamento em realidade com a
              Construtora Metrocasa, opções ideais para quem busca qualidade e
              boa localização.{" "}
              <strong>
                Agende uma visita e descubra como é simples começar essa nova
                fase da sua vida.
              </strong>
            </p>

            {/*  FORM AREA */}
            <div className="p-8 rounded-md shadow-xl md:min-w-[780px] z-10 bg-white flex items-center justify-center">
              <HeroForm
                className="gap-5 items-center flex-col md:flex-row "
                errorMessage={isMobile ? true : false}
                label={isMobile ? true : false}
                variant={"primary"}
              />
            </div>
          </div>

          {/* SLIDER AREA */}
          <CarouselHero imovel={imoveisData} />
        </div>

        {/* Our Numbers */}
        <OurNumbers />
      </div>
    </section>
  );
};

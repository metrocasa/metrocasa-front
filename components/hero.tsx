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
import { Slider } from "./slider";

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
    <section className="px-[15px] w-full  pt-0 md:pt-0 overflow-x-hidden ">
      <div className="w-full max-w-[1216px] mx-auto">
        {/* Our Numbers */}
        <OurNumbers />
      </div>
    </section>
  );
};

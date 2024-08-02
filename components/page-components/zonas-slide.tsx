"use client";

import * as React from "react";
import { zonas } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Title } from "../title";

export const Zonas = () => {
  return (
    <section className="w-full h-auto py-24 px-[15px] bg-[#121212]">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col gap-5 items-center text-white">
        <Title subtitle="" title="Onde você quer morar?" className="text-white">
          Descubra as características únicas de cada área da cidade e encontre a
          opção perfeita para o seu estilo de vida!
        </Title>

        {/* SLIDER */}
        <div className="flex md:flex-row flex-col gap-8 ">
          {zonas.map((slide, i) => (
            <Link key={i} href={`/empreendimentos`}>
              <div className="w-full h-[350px] relative overflow-hidden rounded-xl">
                <h5 className="absolute bottom-10 left-[50%] -translate-x-[50%] z-10 font-bold text-3xl text-white">
                  {slide.zone}
                </h5>
                <Image
                  src={slide.image}
                  alt={`Veja apartamentos no(a) ${slide.zone}`}
                  width={500}
                  height={500}
                  className="w-full h-full rounded-xl object-cover transform transition-transform duration-300 ease-in-out hover:scale-110 bg-gradient-to-t/40 from-black"
                  loading="lazy"
                />

                <div className="absolute bottom-0 left-0 w-full h-[45%] bg-gradient-to-t pointer-events-none from-black/70 rounded-lg hover:bg-none" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

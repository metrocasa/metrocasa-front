import { MoveRight } from "lucide-react";
import Image from "next/image";

import React from "react";

import { Button } from "@/components/ui/button";
import { Title } from "../title";

export const AboutUs = () => {
  return (
    <section className="w-full py-10 px-[15px]">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col justify-center md:flex-row gap-2 md:gap-4">
        {/* LEFT */}
        <div className="w-full flex flex-col justify-center gap-8">
          {/* IMAGE */}
          <div className="h-auto md:w-[670px]">
            <Image
              src={"/about-image.webp"}
              alt="Metrocasa Jardim Botânico"
              width={900}
              height={900}
              className="rounded-xl max-w-[600px]"
            />
          </div>
        </div>

        {/* RIGHT*/}
        <div className="w-full flex flex-col items-center justify-center">
          <Title
            title="Conheça a Metrocasa"
            subtitle="Quem Somos?"
            className="w-full !p-0 !m-0"
          />
          {/* CONTENT */}
          <div className="flex flex-col gap-5 ">
            <p>
              A <strong>Construtora Metrocasa</strong> é fruto da visão e
              experiência de fundadores com uma longa trajetória no mercado da
              construção civil.
              <br />
              <br />
              Movidos pela realização dos sonhos dos nossos clientes e baseados
              na excelência construtiva do mercado imobiliário, unimos
              atendimento personalizado, conceitos inovadores, diferenciais e
              apoio em todo o seu processo de compra e pós compra, com muita
              dedicação para deixar você mais perto do seu sonho.
              <br />
              <br />
              Nossos condomínios são modernos, bem equipados e pensados para
              oferecer o melhor estilo de vida aos moradores, localizados em
              excelentes bairros da cidade, próximos a comodidades e meios de
              transporte público, proporcionando conveniência e praticidade.
              Tudo isso com preço baixo e financiamento pelo programa Minha Casa
              Minha Vida.
            </p>
            <Button variant="primary" size="lg" className="self-start">
              Saiba mais
              <MoveRight strokeWidth={2} className="w-14" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

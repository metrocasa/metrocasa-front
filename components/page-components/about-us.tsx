import { MoveRight } from "lucide-react";
import Image from "next/image";

import React from "react";

import { Button } from "@/components/ui/button";
import { Title } from "../title";

export const AboutUs = () => {
  return (
    <section className="w-full py-10 px-[15px]">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col md:flex-row gap-2 md:gap-14">
        {/* LEFT */}
        <div className="w-full flex flex-col gap-8">
          <Title title="Conheça a Metrocasa" subtitle="Quem Somos?" />

          {/* IMAGE */}
          <div className="h-[438px] md:w-[670px]">
            <Image
              src={"/sobre/fachada.jpg"}
              alt="Metrocasa Jardim Botânico"
              width={900}
              height={900}
              className="object-cover h-full w-full rounded-xl"
            />
          </div>
        </div>

        {/* RIGHT*/}
        <div className="w-full flex flex-col justify-end gap-5">
          {/* CONTENT */}
          <div className="flex flex-col gap-5 ">
            <p>
              A Construtora Metrocasa é fruto da visão e experiência de
              fundadores com uma longa trajetória no mercado da construção
              civil.
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

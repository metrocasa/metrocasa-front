import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export const LancamentoSection = () => {
  return (
    <section className="bg-white-bg bg-cover w-full">
      <div className=" w-full max-w-[1216px] mx-auto py-24 px-[15px] flex flex-col lg:flex-row gap-5 items-center justify-between">
        <Image
          alt="Conheça o ..."
          src={"/conheca.png"}
          width={500}
          height={500}
          loading="lazy"
        />

        <div className="flex flex-col gap-5 max-w-[700px] px-[20px]">
          <h1 className=" text-primary-dark text-2xl">
            Conheça o Metrocasa
            <br />
            <span className="text-light text-main-red font-bold text-5xl">
              Estação Giovanni Gronchi
            </span>
          </h1>

          <p>
            <strong>
              Viver em Giovanni Gronchi é mais do que encontrar um lar, é
              descobrir um estilo de vida repleto de cultura, lazer e culinária
              memorável.
            </strong>
            <br />
            <br />
            Venha fazer de Giovanni Gronchi o seu próximo endereço e deixe-se
            envolver por essa atmosfera única.{" "}
            <strong>
              Conheça o empreendimento Metrocasa Estação Giovanni Gronchi!
            </strong>{" "}
            São unidades studios, 2 dormitórios, 1 dormitório com office e
            cobertura duplex. Além de uma gama de comodidades como salão de
            jogos, área de churrasco, espaço kids, academia, lavanderia e uma
            infinidade de outras opções.
          </p>
          <Button variant="primary" className="self-start px-10">
            Ver Mais
          </Button>
        </div>
      </div>
    </section>
  );
};

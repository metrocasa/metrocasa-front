import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

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
            <span className="text-light text-main-red font-bold text-4xl">
              Estação Giovanni Gronchi
            </span>
          </h1>

          <p>
            <strong>
              Faça deste empreendimento o seu próximo lar dos sonhos e realize o
              desejo de conquistar seu novo apartamento com a Construtora
              Metrocasa!
            </strong>
            <br />
            <br />
            Conheça o empreendimento Metrocasa Estação Giovanni Gronchi.
            <br /> São unidades studios, 2 dormitórios, 1 dormitório com office
            e cobertura duplex. além de uma variedade de comodidades como área
            de churrasco, espaço kids, academia, lavanderia e uma infinidade de
            outras opções.
          </p>
          <Button variant="primary" className="self-start px-10">
            <Link href={"/empreendimentos/giovanni-gronchi/34"}>Ver Mais</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

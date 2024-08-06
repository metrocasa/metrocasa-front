import { HeroForm } from "@/components/forms/hero";
import { Button } from "@/components/ui/button";
import { Imovel } from "@/types/global";
import { MapIcon, MapPinnedIcon, TramFront } from "lucide-react";
import Link from "next/link";
import React from "react";

export const MainContent = ({ imovel }: { imovel: Imovel }) => {
  return (
    <section className="w-full px-[15px] md:px-0  pt-4 bg-[#f7f7f7]">
      <div className="w-full max-w-[1216px] mx-auto">
        <div className="flex flex-col md:flex-row gap-10">
          {/* LEFT */}
          <div className="md:w-[65%]">
            {/* NAVIGATION BUTTONS */}
            <div className="w-full rounded-xl mb-10 flex justify-between">
              <Button variant={"border-r"} className="w-full" asChild>
                <Link
                  href={`/empreendimentos/${imovel.attributes.title}/${imovel.id}/#images`}
                >
                  Imagens do Empreendimento
                </Link>
              </Button>

              <Button variant={"border-r"} className="w-full" asChild>
                <Link
                  href={`/empreendimentos/${imovel.attributes.title}/${imovel.id}/#plantas`}
                >
                  Plantas
                </Link>
              </Button>

              <Button variant={"border-r"} className="w-full" asChild>
                <Link
                  href={`/empreendimentos/${imovel.attributes.title}/${imovel.id}/#facilidades`}
                >
                  Áreas Comuns
                </Link>
              </Button>

              <Button variant={"border-r"} className="w-full" asChild>
                <Link
                  href={`/empreendimentos/${imovel.attributes.title}/${imovel.id}/#regiao`}
                >
                  Conheça a Região
                </Link>
              </Button>
            </div>

            <div
              className="py-14 md:text-xl"
              dangerouslySetInnerHTML={{
                __html: imovel.attributes.description,
              }}
            />
          </div>

          {/* RIGHT */}
          <div className="md:w-[35%] flex flex-col h-full relative">
            {/* VISITE O DECORADO */}
            <div className="md:self-end md:-mt-36 bg-white p-8 rounded-lg flex flex-col gap-4 shadow-xl transition hover:shadow-2xl">
              <h4 className="text-center text-2xl font-bold text-main-red">
                Precisa de mais informações?
              </h4>
              <HeroForm className="flex-col" variant={"primary"} />
            </div>

            {/* <div className="mt-24">CONTEUDO EXTRA</div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

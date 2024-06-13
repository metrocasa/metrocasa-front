import { HeroForm } from "@/components/forms/hero";
import { Imovel } from "@/types/global";
import { MapIcon, MapPinnedIcon, TramFront } from "lucide-react";
import React from "react";

export const MainContent = ({ imovel }: { imovel: Imovel }) => {
  return (
    <section className="w-full px-[15px] md:px-0 md:pt-24 pt-10">
      <div className="w-full max-w-[1216px] mx-auto">
        <div className="flex flex-col md:flex-row gap-10">
          {/* LEFT */}
          <div className="md:w-[65%]">
            <h2 className="text-3xl font-semibold text-center md:text-left ">
              Uma oportunidade para todos que sempre desejaram morar no(a){" "}
              <strong>{imovel.attributes.neighborhoods}</strong>
            </h2>

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
            <div className="md:self-end md:-mt-36 bg-white p-8 rounded-lg flex flex-col gap-4 shadow-md">
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

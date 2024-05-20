import { Imovel } from '@/types/global';
import { MapIcon, MapPinnedIcon, TramFront } from 'lucide-react';
import React from 'react';

export const MainContent = ({ imovel }: { imovel: Imovel }) => {
  return (
    <section className="w-full px-[15px] md:px-0 py-24">
      <div className="w-full max-w-[1216px] mx-auto">
        <div className="flex flex-col-reverse md:flex-row gap-10">
          {/* LEFT */}
          <div className="w-full">
            <h2 className="text-3xl font-semibold text-center md:text-left ">
              Um horizonte que se abre para quem sempre desejou comprar no(a){' '}
              <strong>{imovel.attributes.neighborhoods}</strong>
            </h2>

            <div
              className="py-14"
              dangerouslySetInnerHTML={{
                __html: imovel.attributes.description,
              }}
            />
          </div>

          {/* RIGHT */}
          <div className="w-full h-full relative">
            {/* VISITE O DECORADO */}
            <div className="md:-mt-36 bg-white p-8 rounded-lg flex flex-col gap-4 shadow-md">
              <h4 className="text-center text-2xl font-bold text-main-red">
                Visite o Decorado
              </h4>
              <span className="flex gap-2 mb-1">
                <MapPinnedIcon />
                Av. Ipiranga, 344 – 37º Andar <br />
                Edifício Itália República - São Paulo – SP CEP: 01046-010
              </span>
              <span className="flex gap-2">
                <TramFront />4 min. Estação República
              </span>
            </div>

            {/* <div className="mt-24">CONTEUDO EXTRA</div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

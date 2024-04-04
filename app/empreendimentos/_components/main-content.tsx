import { Imovel } from '@/contexts/imoveis-context';
import { MapIcon, MapPinnedIcon, TramFront } from 'lucide-react';
import React from 'react';

export const MainContent = ({ imovel }: { imovel: Imovel }) => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  console.log(imovel);

  return (
    <section className="w-full px-[15px] md:px-0 py-24">
      <div className="w-full max-w-[1216px] mx-auto">
        <div className="flex gap-10">
          {/* RIGHT */}
          <div className="w-full h-auto ">
            <h2 className="text-3xl font-semibold">
              Um horizonte que se abre para quem sempre desejou comprar no(a){' '}
              <strong>{imovel.attributes.neighborhoods}</strong>
            </h2>
          </div>

          {/* LEFT */}
          <div className="w-full h-full relative">
            {/* VISITE O DECORADO */}
            <div className="absolute -top-36 bg-white p-8 rounded-lg flex flex-col gap-4 shadow-md">
              <h4 className="text-center text-2xl font-bold text-main-red">
                Visite o Decorado
              </h4>
              <span className="flex gap-2 mb-1">
                <MapPinnedIcon />
                Alameda dos Ubiatans, 238 - Saúde São Paulo - SP
              </span>
              <span className="flex gap-2">
                <TramFront />4 min. 350m Estação São Judas
              </span>
            </div>

            <h2 className="mt-24">CONTEUDO EXTRA</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

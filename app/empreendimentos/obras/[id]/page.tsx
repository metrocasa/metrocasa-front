'use client';

import { Footer } from '@/components/globals/Footer';
import { Header } from '@/components/globals/Header';
import { Progress } from '@/components/ui/progress';
import { useImovelById } from '@/utils/queries';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const ObrasPage = ({ params }: { params: { id: number } }) => {
  const imovel = useImovelById(Number(params.id));
  const obrasDetails = imovel.data?.attributes.evolucao_obras;

  return (
    <>
      <Header />
      <div className="">
        <div className="w-full max-w-[1280px] mx-auto h-full pt-36 flex flex-col gap-10">
          {/* Title */}
          <h1 className="text-4xl font-bold ml-2 text-center text-main-red">
            Evolução de Obras {imovel.data?.attributes.title}
          </h1>

          {/* CONTENT */}
          <div className="border border-gray-300 rounded-lg p-10 flex flex-col lg:flex-row gap-8">
            {/* LEFT */}
            <div className="w-full md:w-[60%] flex flex-col gap-8">
              <div>
                <h2 className="font-bold text-2xl">Endereço da Obra:</h2>
                <span>{imovel.data?.attributes.address}</span>
              </div>

              {/* PROGRESS */}
              <div className="flex flex-col gap-4">
                <div>
                  <span>Percentual de Obra</span>
                  <Progress
                    value={obrasDetails?.percentual_de_obras}
                    className="bg-main-red/15"
                  />
                </div>

                <div>
                  <span>Demolição</span>
                  <Progress
                    value={obrasDetails?.demolicao}
                    className="bg-main-red/15"
                  />
                </div>

                <div>
                  <span>Terraplanagem</span>
                  <Progress
                    value={obrasDetails?.terraplanagem}
                    className="bg-main-red/15"
                  />
                </div>

                <div>
                  <span>Fundação Profunda</span>
                  <Progress
                    value={obrasDetails?.fundacao_profunda}
                    className="bg-main-red/15"
                  />
                </div>

                <div>
                  <span>Fundação Superficial</span>
                  <Progress
                    value={obrasDetails?.fundacao_superficial}
                    className="bg-main-red/15"
                  />
                </div>

                <div>
                  <span>Estrutura</span>
                  <Progress
                    value={obrasDetails?.estrutura}
                    className="bg-main-red/15"
                  />
                </div>

                <div>
                  <span>Fechamento</span>
                  <Progress
                    value={obrasDetails?.fechamento}
                    className="bg-main-red/15"
                  />
                </div>

                <div>
                  <span>Acabamento</span>
                  <Progress
                    value={obrasDetails?.acabamento}
                    className="bg-main-red/15"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="w-full flex flex-wrap justify-center md:justify-start gap-2 overflow-hidden">
              {obrasDetails?.gallery.data.map((image, i) => (
                <div key={i} className="w-full md:w-[340px] md:h-[300px]">
                  <Image
                    src={image.attributes.url as string}
                    className="w-full h-full object-cover rounded-lg"
                    alt="Imagem da Obra"
                    width={780}
                    height={780}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ObrasPage;

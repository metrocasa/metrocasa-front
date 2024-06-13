import { Button } from '@/components/ui/button';
import { Imovel } from '@/types/global';

import { DownloadIcon, Loader2Icon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import React, { useEffect, useState } from 'react';

export const Card = ({ imovel }: { imovel: Imovel }) => {
  const [imovelInfo, setImovelInfo] = useState<Imovel | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImovel = async () => {
      try {
        const response = await fetch(`/api/imoveis/${imovel}`);
        const data = await response.json();
        setImovelInfo(data);
      } catch (error) {
        console.error('Erro ao buscar imóvel:', error);
        // Lógica de tratamento de erro (opcional)
      } finally {
        setIsLoading(false);
      }
    };
    fetchImovel();
  }, [imovel]);

  if (isLoading) {
    return (
      <div className="text-white/30  h-[400px] w-full rounded-lg flex items-center justify-center">
        <Image
          src={`${'/placeholder.jpg'}`}
          alt={'Fachada'}
          className={`object-cover transition h-[400px] w-full rounded-lg`}
          width={900}
          height={900}
          priority
        />

        <Loader2Icon className="animate-spin w-8 h-8 text-white/50 absolute" />
      </div>
    ); // Exibir um indicador de carregamento
  }

  if (!imovel) {
    return <div className="text-white">Erro ao carregar imóvel.</div>; // Exibir mensagem de erro
  }

  return (
    <Link
      href={`/${imovel.attributes.slug}/${imovel.id}`}
      className={'relative'}
    >
      <div key={imovel.id}>
        <Image
          src={`${
            imovel.attributes.fachada.data.attributes.url ||
            '/public/placeholder.jpg'
          }`}
          alt={'Fachada'}
          className={`object-cover transition h-[400px] w-full rounded-lg`}
          width={900}
          height={900}
          priority
        />

        <div
          className={`absolute top-0 left-0 w-full h-full bg-gradient-bg rounded-lg`}
        />

        <div className="absolute bottom-0 p-5 flex flex-col gap-5">
          <h2 className="text-white font-bold text-3xl">
            {imovel.attributes.title}
          </h2>

          {/* DOWNLOAD BUTTONS */}
          <div className="flex gap-4 w-full">
            {/* RI */}
            {
              <Link
                href={imovel.attributes.materiais?.ri.data.attributes.url || ''}
              >
                <Button variant={'primary'} className="flex items-center gap-3">
                  <DownloadIcon className="w-4 h-4" />
                  R.I
                </Button>
              </Link>
            }

            <div className="flex gap-4">
              {/* BOOK A3 */}
              {imovel.attributes.materiais?.is_active &&
                imovel.attributes.materiais?.a3.data && (
                  <Link
                    href={
                      imovel.attributes.materiais?.a3.data.attributes.url || ''
                    }
                  >
                    <Button
                      variant={'primary'}
                      className="flex items-center gap-3"
                    >
                      <DownloadIcon className="w-4 h-4" />
                      A3
                    </Button>
                  </Link>
                )}

              {/* BOOK FASE 1 */}
              {imovel.attributes.materiais?.is_active &&
                imovel.attributes.materiais?.fase_1.data && (
                  <Link
                    href={
                      imovel.attributes.materiais?.fase_1.data.attributes.url ||
                      ''
                    }
                  >
                    <Button
                      variant={'primary'}
                      className="flex items-center gap-3"
                    >
                      <DownloadIcon className="w-4 h-4" />
                      FASE 1
                    </Button>
                  </Link>
                )}

              {/* BOOK FASE 2 */}
              {imovel.attributes.materiais?.is_active &&
                imovel.attributes.materiais?.fase_2.data && (
                  <Link
                    href={
                      imovel.attributes.materiais?.fase_2.data.attributes.url ||
                      ''
                    }
                  >
                    <Button
                      variant={'primary'}
                      className="flex items-center gap-3"
                    >
                      <DownloadIcon className="w-4 h-4" />
                      FASE 2
                    </Button>
                  </Link>
                )}

              {/* BOOK FASE 3 */}
              {imovel.attributes.materiais?.is_active &&
                imovel.attributes.materiais?.fase_3.data && (
                  <Link
                    href={
                      imovel.attributes.materiais?.fase_3.data.attributes.url ||
                      ''
                    }
                  >
                    <Button
                      variant={'primary'}
                      className="flex items-center gap-3"
                    >
                      <DownloadIcon className="w-4 h-4" />
                      FASE 3
                    </Button>
                  </Link>
                )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

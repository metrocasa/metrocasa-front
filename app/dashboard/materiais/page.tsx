'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { List } from './_components/list';
import { MetaProvider, useMetaContext } from '@/contexts/meta-context';
import {
  DownloadIcon,
  Laptop2Icon,
  Loader2Icon,
  SmartphoneIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
// import { useMateriais } from '@/contexts/materiais-context';
import Link from 'next/link';
import Image from 'next/image';
import { Imovel } from '@/types/global';
import { useImoveis, useMateriais } from '@/utils/queries';
import { Loading } from '@/components/loading';
import { is } from '@react-three/fiber/dist/declarations/src/core/utils';

const Materiais = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const { currentPageSize, setMeta, setCurrentPageSize } = useMetaContext();

  // Imoveis
  const [imoveisList, setImoveisList] = React.useState<Imovel[]>([]);
  const imoveis = useImoveis(currentPageSize);
  const imoveisQuantity = useImoveis(15);
  const meta = imoveis.data?.meta;

  // Materiais
  const materiais = useMateriais();
  const linksUteis = materiais.data?.data.attributes.links_uteis;
  const ads = materiais.data?.data.attributes.fb_google_ads.data;
  const materiaisGraficos = materiais.data?.data.attributes.materiais_graficos;
  const campanhaSemanal = materiais.data?.data.attributes.campanha_semanal;
  const booksDeValorizacao = materiais.data?.data.attributes.books_valorizacao;

  React.useEffect(() => {
    if (imoveis.data?.data) {
      setImoveisList(imoveis.data.data);
    }
  }, [imoveis.data?.data]);

  const handleShowMore = () => {
    setCurrentPageSize(currentPageSize + 8);
  };

  if (imoveisQuantity.isLoading && imoveis.isLoading && meta && materiais)
    return <Loading />;

  return (
    <section className="bg-tertiary-black w-full flex flex-col lg:pl-[400px] min-h-screen n md:p-14 p-10">
      <h1 className="text-3xl font-bold text-main-red md:mb-[15px]">
        Materiais
      </h1>
      {imoveisList.length || materiais?.data ? (
        <>
          <Suspense>
            <List imoveis={imoveisList} />
          </Suspense>

          {/* IDLE */}
          <div className="w-full max-w-[1216px] mx-auto flex items-center justify-center">
            <Button
              onClick={() => handleShowMore()}
              variant="primary"
              size="lg"
              className={
                imoveis.isFetching
                  ? 'bg-main-red/30 pointer-events-none cursor-not-allowed'
                  : 'bg-main-red'
              }
            >
              {!imoveis.isFetching ? (
                'MOSTRAR MAIS'
              ) : (
                <Loader2Icon className="animate-spin text-white w-6 h-6" />
              )}
            </Button>
          </div>
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <Loader2Icon className="animate-spin w-8 h-8 text-main-red" />
        </div>
      )}
    </section>
  );
};

export default Materiais;

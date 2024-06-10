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
            {imoveis.data?.meta.pagination.page !==
              imoveis.data?.meta.pagination.pageSize && (
              <Button
                onClick={() => handleShowMore()}
                variant="primary"
                size="lg"
                className="bg-main-red"
              >
                MOSTRAR MAIS
              </Button>
            )}
          </div>

          {/* LOADING */}
          <div className="w-full flex  justify-center">
            {imoveis.isFetching && (
              <Button
                onClick={() => handleShowMore()}
                variant="primary"
                size="lg"
                className="pointer-events-none bg-main-red/50"
              >
                <Loader2Icon className="animate-spin text-white w-6 h-6" />
              </Button>
            )}
          </div>
          <Accordion type="single" collapsible>
            {/* Campanha Semannal */}
            <AccordionItem value="campanha-semanal">
              <AccordionTrigger>Camapanha Semanal</AccordionTrigger>
              <AccordionContent>
                <h3>Criativos de Campanha Semanal</h3>
                <div className="flex justify-between md:justify-start gap-4 flex-wrap">
                  {/* BANNER MOBILE DOWNLOAD */}
                  <Button variant={'primary'} className="w-full md:w-fit">
                    <Link
                      href={`${BASE_URL}${campanhaSemanal?.criativo_mobile.data.attributes.url}`}
                      target="_blank"
                      className="flex gap-2 items-center"
                      download
                    >
                      <SmartphoneIcon />
                      Banner Mobile
                    </Link>
                  </Button>

                  {/* BANNER DESKTOP DOWNLOAD */}
                  <Button variant={'primary'} className="w-full md:w-fit">
                    <Link
                      href={`${BASE_URL}${campanhaSemanal?.criativo_mobile.data.attributes.url}`}
                      target="_blank"
                      className="flex gap-2 items-center"
                      download
                    >
                      <Laptop2Icon />
                      Banner Desktop
                    </Link>
                  </Button>

                  {/* Material de Apoio*/}
                  <Button variant={'primary'} className="w-full md:w-fit">
                    <Link
                      href={`${BASE_URL}${campanhaSemanal?.flyers}`}
                      target="_blank"
                      className="flex gap-2 items-center"
                      download
                    >
                      <DownloadIcon />
                      Flyers
                    </Link>
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* BOOKS DE VALORIZAÇÃO*/}
            <AccordionItem value="books">
              <AccordionTrigger>Books de Valorização</AccordionTrigger>
              <AccordionContent className="flex gap-4 flex-wrap">
                {booksDeValorizacao?.map((book, i) => (
                  <Button
                    key={i}
                    variant={'primary'}
                    className="w-full md:w-fit"
                  >
                    <Link
                      href={`${BASE_URL}${book.book_de_valorizacao.data.attributes.url}`}
                      target="_blank"
                      className="flex items-center gap-2"
                      download
                    >
                      <SmartphoneIcon />
                      {book.title}
                    </Link>
                  </Button>
                ))}
              </AccordionContent>
            </AccordionItem>

            {/* LINKS UTEIS */}
            <AccordionItem value="links-uteis">
              <AccordionTrigger>Links Úteis</AccordionTrigger>
              <AccordionContent className="flex gap-4 flex-wrap">
                {linksUteis?.map((item, i) => (
                  <Button
                    key={i}
                    variant={'primary'}
                    className="w-full md:w-fit"
                  >
                    <Link
                      href={`${BASE_URL}${item.link}`}
                      target="_blank"
                      className="flex items-center gap-2"
                      download
                    >
                      <SmartphoneIcon />
                      {item.title}
                    </Link>
                  </Button>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* MATERIAIS DE DIVULGAÇÃO ADS */}
          {ads && (
            <div>
              <h1 className="text-3xl font-bold text-main-red md:mb-[15px] py-11 text-center md:text-start">
                Material de divugação Facebook/Google Ads
              </h1>
              <div className="flex gap-4 md:flex-row flex-col flex-wrap ">
                {ads?.map((ad, i) => (
                  <Link
                    key={i}
                    href={`${BASE_URL}${ad.attributes.url}`}
                    className="h-[335px] w-[335px] rounded-lg"
                    target="_blank"
                  >
                    <Image
                      src={`${ad.attributes.url}`}
                      width={500}
                      height={500}
                      alt="ADS"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* MATERIAIS GRÁFICOS */}
          {materiaisGraficos && (
            <div>
              <h1 className="text-3xl font-bold text-main-red md:mb-[15px] py-11 text-center md:text-start">
                Materiais Gráficos
              </h1>
              <div className="flex gap-4 md:flex-row flex-col flex-wrap ">
                {materiaisGraficos?.map((item, i) => (
                  <Link
                    key={i}
                    href={`${BASE_URL}${item.media.data.attributes.url}`}
                    target="_blank"
                  >
                    <Button variant={'primary'}>{`${item.title}`}</Button>
                  </Link>
                ))}
              </div>
            </div>
          )}
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

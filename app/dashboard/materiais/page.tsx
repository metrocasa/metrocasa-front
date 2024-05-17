'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { List } from './_components/list';
import { useImoveis } from '@/contexts/imoveis-context';
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
import { useMateriais } from '@/contexts/materiais-context';
import Link from 'next/link';
import Image from 'next/image';

const Materiais = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const { imoveis, fetchImoveis, meta, currentPageSize } = useImoveis();

  const { materiais } = useMateriais();
  const campanhaSemanal = materiais?.data.attributes.campanha_semanal;
  const booksDeValorizacao = materiais?.data.attributes.books_valorizacao;
  const ads = materiais?.data.attributes.fb_google_ads.data;
  const linksUteis = materiais?.data.attributes.links_uteis;
  const materiaisGraficos = materiais?.data.attributes.materiais_graficos;

  console.log(materiais?.data.attributes);

  const [loading, setLoading] = useState(false);

  const handleShowMore = () => {
    const total = meta.pagination.total;
    setLoading(true);

    fetchImoveis(currentPageSize + 4).then(() => {
      setLoading(false);
    });
  };

  return (
    <section className="bg-tertiary-black w-full flex flex-col lg:pl-[400px] min-h-screen n md:p-14 p-10">
      <h1 className="text-3xl font-bold text-main-red md:mb-[15px]">
        Materiais
      </h1>
      {imoveis.length || materiais?.data ? (
        <>
          <Suspense>
            <List imoveis={imoveis} />
            {meta.pagination.pageSize <= meta.pagination.total && (
              <Button
                onClick={() => handleShowMore()}
                variant="primary"
                size="lg"
                className={`${
                  loading && 'pointer-events-none self-center'
                } mb-24`}
              >
                {loading ? (
                  <Loader2Icon className="animate-spin text-white w-6 h-6" />
                ) : (
                  'MOSTRAR MAIS'
                )}
              </Button>
            )}
          </Suspense>
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
                      href={`${BASE_URL}${materiais?.data.attributes.campanha_semanal.flyers}`}
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

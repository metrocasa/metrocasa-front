import { Button } from '@/components/ui/button';
import { Imovel } from '@/types/global';

import { DownloadIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

export const Card = ({ imovel }: { imovel: Imovel }) => {
  return (
    <Link
      href={`/${imovel.attributes.slug}/${imovel.id}`}
      className={'relative'}
    >
      <div key={imovel.id}>
        <Image
          src={`${imovel.attributes.fachada.data.attributes.url}`}
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
          {/* <span className="hover:bg-secondary-red transition bg-main-red text-white self-start p-1 px-5 rounded text-sm">
            {imovel.attributes.status}
          </span> */}
          <h2 className="text-white font-bold text-3xl">
            {imovel.attributes.title}
          </h2>

          {/* DOWNLOAD BUTTONS */}
          <div
            className={`flex gap-4 w-full ${
              imovel.attributes.materiais.books.fase_2.disponivel ||
              imovel.attributes.materiais.books.fase_3.disponivel
                ? 'flex-col'
                : ''
            }`}
          >
            {/* RI */}
            <Link href={imovel.attributes.materiais.ri}>
              <Button variant={'primary'} className="flex items-center gap-3">
                <DownloadIcon className="w-4 h-4" />
                R.I
              </Button>
            </Link>

            <div className="flex gap-4">
              {/* BOOK FASE 1 - Padrão */}
              <Link href={imovel.attributes.materiais.books.a3}>
                <Button variant={'primary'} className="flex items-center gap-3">
                  <DownloadIcon className="w-4 h-4" />
                  {imovel.attributes.materiais.books.fase_2.disponivel ||
                  imovel.attributes.materiais.books.fase_3.disponivel
                    ? 'FASE 1'
                    : 'BOOK A3'}
                </Button>
              </Link>

              {/* BOOK FASE 2 */}
              {imovel.attributes.materiais.books.fase_2.disponivel && (
                <Link href={imovel.attributes.materiais.books.fase_2.link}>
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
              {imovel.attributes.materiais.books.fase_3.disponivel && (
                <Link href={imovel.attributes.materiais.books.fase_3.link}>
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

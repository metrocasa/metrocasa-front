'use client';

import React from 'react';

import BackgroundVideo from 'next-video/background-video';

import { useMediaQuery } from 'react-responsive';

import { MetaProvider } from '@/contexts/meta-context';
import Image from 'next/image';
import Link from 'next/link';
import { Skeleton } from './ui/skeleton';
import { Imoveis, Imovel } from '@/types/global';
import { useImoveis } from '@/utils/queries';

const CarouselHero = ({ imovel }: { imovel: Imovel }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 770px)' });

  const getRandomImages = (i: number) => {
    const images = imovel?.attributes.main_gallery.data[i]?.attributes.url;
    return images;
  };

  return (
    <>
      {imovel ? (
        <Link
          href={`/empreendimentos/${imovel?.attributes.slug}/${imovel?.id}`}
          className="md:-mr-[445px] flex gap-4 overflow-hidden"
        >
          <div className="relative w-full md:max-w-[433px] md:h-[474px] h-[400px] rounded-2xl overflow-hidden">
            {!isMobile ? (
              <BackgroundVideo
                src={isMobile ? '' : imovel?.attributes.video_hero}
                poster={`${imovel?.attributes.fachada.data?.attributes.url}`}
                className="active w-full h-full rounded-xl object-cover bg-center "
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-bg-reversed rounded-lg" />
                <div className="absolute top-0 p-5 flex flex-col gap-2">
                  <h2 className="text-white font-bold text-xl">
                    {`${imovel?.attributes.title}`}
                  </h2>
                  <span className="text-white font-medium text-sm">
                    {`${imovel?.attributes.subtitle}`}
                  </span>
                </div>
              </BackgroundVideo>
            ) : (
              <div className="relative w-full md:max-w-[433px] md:h-[474px] h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src={`${imovel?.attributes.fachada.data.attributes.url}`}
                  alt={imovel?.attributes.title}
                  width={450}
                  height={450}
                  className="active w-full h-full rounded-xl object-cover bg-center"
                  priority
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-bg-reversed rounded-lg" />
                <div className="absolute top-0 p-5 flex flex-col gap-2">
                  <h2 className="text-white font-bold text-xl">
                    {`${imovel?.attributes.title}`}
                  </h2>
                  <span className="text-white font-medium text-sm">
                    {`${imovel?.attributes.subtitle}`}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="hidden md:block relative w-[197px] h-[474px]">
            <Image
              src={`${getRandomImages(1)}`}
              alt={imovel?.attributes.title}
              width={600}
              height={600}
              className="active w-full h-full rounded-xl object-cover bg-center "
              priority
            />

            <div className="absolute top-0 left-0 w-full h-full bg-gradient-bg rounded-lg" />
          </div>
          <div className="hidden md:block  relative w-[197px] h-[474px]">
            <Image
              src={`${getRandomImages(3)}`}
              alt={imovel?.attributes.title}
              width={600}
              height={600}
              className="active w-full h-full rounded-xl object-cover bg-center "
              priority
            />

            <div className="absolute top-0 left-0 w-full h-full bg-gradient-bg rounded-lg" />
          </div>
          <div className="hidden md:block relative w-[197px] h-[474px]">
            <Image
              src={`${getRandomImages(7)}`}
              alt={imovel?.attributes.title}
              width={600}
              height={600}
              className="active w-full h-full rounded-xl object-cover bg-center "
              priority
            />

            <div className="absolute top-0 left-0 w-full h-full bg-gradient-bg rounded-lg" />
          </div>
        </Link>
      ) : (
        <div className="md:-mr-[445px] flex gap-4 overflow-hidden ">
          <div className="relative w-full md:max-w-[433px] md:h-[474px] h-[400px] rounded-2xl overflow-hidden">
            <Skeleton className="w-full h-full rounded-lg bg-main-red/10" />
          </div>

          <div className="hidden md:block relative w-[290px] h-[474px] rounded-lg">
            <Skeleton className="w-full h-full rounded-lg bg-main-red/10" />
          </div>
          <div className="hidden md:block relative w-[290px] h-[474px] rounded-lg">
            <Skeleton className="w-full h-full rounded-lg bg-main-red/10" />
          </div>
          <div className="hidden md:block relative w-[290px] h-[474px] rounded-lg">
            <Skeleton className="w-full h-full rounded-lg bg-main-red/10" />
          </div>
        </div>
      )}
    </>
  );
};

export default CarouselHero;

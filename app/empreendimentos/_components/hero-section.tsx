import BackgroundVideo from 'next-video/background-video';
import Tour from '@/videos/tour.mp4';
import TourTwo from 'https://cdn.planoeplano.com.br/2024/02/15/16/46/ac85d160f7c2d01ade752c2e151708141054c1ad.mp4';

import { Imovel } from '@/contexts/imoveis-context';

import React from 'react';
import Image from 'next/image';

export const HeroSection = ({ imovel }: { imovel: Imovel }) => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  return (
    <section className="relative px-[15px] md:px-0 w-full h-[550px] mt-[100px] ">
      {/* IMAGE */}
      <BackgroundVideo
        src={Tour}
        poster={`${BASE_URL}${imovel.attributes.fachada.data.attributes.url}`}
        onError={() => console.log('No video')}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/70" />
        {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black" /> */}

        <div className="absolute top-0 left-[50%] -translate-x-[50%] w-full h-full max-w-[1216px] mx-auto flex items-center">
          {/* INFORMATION */}
          <div className="flex flex-col gap-14">
            <span className="font-medium bg-white p-1 px-4 rounded text-primary-dark w-fit">
              {imovel.attributes.status}
            </span>

            <div className="flex flex-col gap-6">
              <span className="text-white">
                Apartamento em{' '}
                <strong>{imovel.attributes.neighborhoods}</strong>
              </span>
              <Image
                src={`${BASE_URL}${imovel.attributes.logo.data.attributes.url}`}
                alt={`Logo Metrocasa ${imovel.attributes.title}`}
                width={500}
                height={500}
              />

              <h2 className="text-secondary-dark bg-white p-2 px-4 rounded self-start">
                {imovel.attributes.subtitle}
              </h2>
            </div>
          </div>
        </div>
      </BackgroundVideo>
    </section>
  );
};

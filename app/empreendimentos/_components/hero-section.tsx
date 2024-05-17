import BackgroundVideo from 'next-video/background-video';

import { Imovel } from '@/contexts/imoveis-context';

import React from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

export const HeroSection = ({ imovel }: { imovel: Imovel }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 850px)' });

  return (
    <section className="w-full h-[520px] mt-[100px]">
      <div className="relative h-auto w-full">
        {!isMobile ? (
          <BackgroundVideo
            src={isMobile ? '' : imovel.attributes.video_background}
            poster={`${imovel.attributes.fachada.data.attributes.url}`}
            className="w-full h-[520px] object-cover absolute"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black/70" />
            {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black" /> */}

            <div className="z-20 md:absolute px-[15px] top-0 md:left-[50%] md:-translate-x-[50%] w-full h-full max-w-[1216px] mx-auto flex items-center">
              {/* INFORMATION */}
              <div className="flex flex-col items-center md:items-start gap-14">
                <span className="font-medium bg-white p-1 px-4 rounded text-primary-dark w-fit">
                  {imovel.attributes.status}
                </span>

                <div className="flex flex-col items-center md:items-start gap-6 ">
                  <span className="text-white">
                    Apartamento em{' '}
                    <strong>{imovel.attributes.neighborhoods}</strong>
                  </span>
                  <Image
                    src={`${imovel.attributes.logo.data.attributes.url}`}
                    alt={`Logo Metrocasa ${imovel.attributes.title}`}
                    width={500}
                    height={500}
                    className="max-w-[320px] md:w-full"
                  />

                  <h2 className="text-secondary-dark bg-white p-2 px-4 rounded self-start text-center md:text-start">
                    {imovel.attributes.subtitle}
                  </h2>
                </div>
              </div>
            </div>
          </BackgroundVideo>
        ) : (
          <section className="w-full h-[520px] mt-[100px]">
            <Image
              src={`${imovel.attributes.fachada.data.attributes.url}`}
              alt={imovel.attributes.title}
              width={1900}
              height={1900}
              className="absolute w-full h-full object-cover bg-center "
            />
            {/* Information */}
            <div className="relative h-full w-full flex items-center justify-center">
              <div className="flex flex-col items-center md:items-start gap-6 z-10">
                <span className="text-white">
                  Apartamento em{' '}
                  <strong>{imovel.attributes.neighborhoods}</strong>
                </span>
                <Image
                  src={`${imovel.attributes.logo.data.attributes.url}`}
                  alt={`Logo Metrocasa ${imovel.attributes.title}`}
                  width={500}
                  height={500}
                  className="max-w-[320px] md:w-full"
                />

                <h2 className="w-full self-center text-secondary-dark bg-white p-2 px-4 rounded md:self-start text-center md:text-start text-wrap">
                  {imovel.attributes.subtitle}
                </h2>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-bg-reversed z-10" />
          </section>
        )}
      </div>
    </section>
  );
};

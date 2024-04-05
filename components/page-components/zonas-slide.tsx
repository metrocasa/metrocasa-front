import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { zonas } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { Title } from '../title';

export const Zonas = () => {
  const plugin = React.useRef(Autoplay({ delay: 4000 }));

  return (
    <section className=" w-full h-auto py-24 px-[15px]">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col gap-14 items-center">
        <Title subtitle="De Sul à Oeste" title="Onde você quer morar?" />

        {/* SLIDER */}
        <div className="flex md:flex-row flex-col gap-8 ">
          {zonas.map((slide, index) => (
            <Link key={index} href={`/empreendimentos?zone=${slide.zone}`}>
              <div className="w-full h-[426px] relative">
                <div className="absolute top-0 left-0 w-full h-full rounded-xl" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 rounded-lg" />

                <h5 className="absolute bottom-10 left-[50%] -translate-x-[50%] z-10 font-bold text-3xl text-white">
                  {slide.zone}
                </h5>
                {/* DESKTOP */}
                <Image
                  src={slide.image}
                  alt={slide.zone}
                  width={500}
                  height={500}
                  className="w-full h-[426px] rounded-xl object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

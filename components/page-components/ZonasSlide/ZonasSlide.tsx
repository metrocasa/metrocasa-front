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
import { zonasSlide } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

export const ZonasSlide = () => {
  const plugin = React.useRef(Autoplay({ delay: 4000 }));

  return (
    <section className=" w-full h-auto py-24 px-[15px]">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col gap-14 items-center">
        <h1 className="text-center text-main-red text-3xl md:text-4xl font-bold">
          Em qual região você quer morar?
        </h1>

        {/* SLIDER */}
        <div className="flex md:flex-row flex-col gap-8 ">
          {zonasSlide.map((slide, index) => (
            <Link href={`/empreendimentos?region=${slide.zone}`}>
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

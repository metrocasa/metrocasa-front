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
    <section className=" w-full h-auto py-24 px-[15px] lg:bg-red-bg bg-no-repeat bg-right ">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col gap-14 items-center">
        <h1 className="text-center text-main-red text-3xl md:text-4xl font-bold">
          Em qual região você quer morar?
        </h1>

        {/* SLIDER */}
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full items-center flex justify-center"
        >
          <CarouselContent>
            {zonasSlide.map((slide, index) => (
              <CarouselItem
                key={index}
                className="flex flex-col lg:flex-row justify-between items-center md:gap-11"
              >
                {/* MOBILE */}
                <Image
                  src={slide.image}
                  alt={slide.zone}
                  width={500}
                  height={500}
                  className="lg:hidden w-full overflow-hidden h-[230px] object-cover"
                />
                {/* DESKTOP */}
                <Image
                  src={slide.image}
                  alt={slide.zone}
                  width={500}
                  height={500}
                  className="hidden lg:block w-full h-full"
                />

                <div className="bg-white p-6 md:p-14 flex flex-col gap-5 max-w-[700px]">
                  <h1 className="text-2xl uppercase">
                    Zona <br />
                    <span className="text-5xl md:text-7xl font-bold text-secondary-red">
                      {slide.zone}
                    </span>
                  </h1>
                  <p dangerouslySetInnerHTML={{ __html: slide.description }} />
                  <Button
                    variant={'primary'}
                    size={'lg'}
                    className="self-start"
                  >
                    <Link href={slide.link}>Ver Empreendimentos</Link>
                  </Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex items-center justify-center" />
          <CarouselNext className="hidden md:flex items-center justify-center" />
        </Carousel>
      </div>
    </section>
  );
};

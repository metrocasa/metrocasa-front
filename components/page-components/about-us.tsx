import { ChevronRight, MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Be_Vietnam_Pro } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const font = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['200', '400', '700', '900'],
});

export const AboutUs = () => {
  return (
    <section className="w-full py-24">
      <div className="w-full max-w-[1216px] mx-auto flex gap-14">
        {/* LEFT */}
        <div className="w-full flex flex-col gap-8">
          {/* SUBTITLE */}
          <div className="flex gap-2 text-main-red items-center">
            <MoveRight strokeWidth={1} className="w-14" />
            <h5 className="text-lg font-medium">Empreendimentos</h5>
          </div>

          <h2 className={cn('text-5xl font-bold', font.className)}>
            Conheça a Metrocasa
          </h2>

          {/* IMAGE */}
          <div className="h-[438px] w-[670px]">
            <Image
              src={'/sobre/fachada-jardim-botanico.jpg'}
              alt="Metrocasa Jardim Botânico"
              width={900}
              height={900}
              className="object-cover h-full w-full rounded-xl"
            />
          </div>
        </div>

        {/* RIGHT*/}
        <div className="w-full flex flex-col justify-between gap-5">
          {/* IMAGE */}
          <Image
            src={'/sobre/praca-da-arvore-fachada.jpg'}
            alt="Metrocasa Jardim Botânico"
            width={700}
            height={700}
            className="object-cover h-full w-full rounded-xl bg-gradient-to-r from-cyan-500"
          />

          {/* CONTENT */}
          <div className="flex flex-col  gap-5">
            <p>
              Archito Group se présente comme un outil pluridisciplinaire et
              complet regroupant diverses maitrises et compétences utiles à
              l’investissement immobilier. OWN Group se positionne toujours et
              exclusivement du côté des investisseurs. Uncommonly spacious and
              handsomely appointed.
            </p>
            <Button variant="primary" size="lg" className="self-start">
              Saiba mais
              <MoveRight strokeWidth={2} className="w-14" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

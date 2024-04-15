import { MoveRight } from 'lucide-react';
import Image from 'next/image';

import React from 'react';

import { Button } from '@/components/ui/button';
import { Title } from '../title';

export const AboutUs = () => {
  return (
    <section className="w-full py-10 md:py-24 px-[15px]">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col md:flex-row gap-2 md:gap-14">
        {/* LEFT */}
        <div className="w-full flex flex-col gap-8">
          <Title title="Conheça a Metrocasa" subtitle="Quem Somos?" />

          {/* IMAGE */}
          <div className="h-[438px] md:w-[670px]">
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
            className="object-cover h-full w-full rounded-xl"
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

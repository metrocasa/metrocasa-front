'use client';

import React from 'react';
import List from './_components/list';
import { useImoveis } from '@/contexts/imoveis-context';
import { Loader2Icon } from 'lucide-react';

const Materiais = () => {
  const { imoveis, quantityImoveis } = useImoveis();

  console.log(imoveis);

  return (
    <section className="bg-tertiary-black w-full flex flex-col lg:pl-[400px] h-screen md:p-14 p-10">
      <h1 className="text-3xl font-bold text-main-red mb-[75px]">Materiais</h1>
      {imoveis.length ? (
        <List imoveis={imoveis} />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <Loader2Icon className="animate-spin w-8 h-8 text-main-red" />
        </div>
      )}
    </section>
  );
};

export default Materiais;

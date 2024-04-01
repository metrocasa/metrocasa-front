'use client';

import { ConhecaSection } from '@/components/ConhecaSection';
import EmpreendimentoList from '@/components/EmpreendimentoList/EmpreendimentoList';
import { Filter } from '@/components/Filter';
import { FormSection } from '@/components/FormSection';
import { MainForm } from '@/components/Forms/MainForm';
import { Slider } from '@/components/Slider';
import { Loading } from '@/components/loading';

import { useImoveis } from '@/contexts/imoveis-context';
import { useState } from 'react';

export default function Home() {
  const { imoveis } = useImoveis();

  return (
    <>
      {imoveis.length ? (
        <div>
          <div className="z-10">
            <Slider />
          </div>

          <Filter />

          <EmpreendimentoList />
          <FormSection />
          <ConhecaSection />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

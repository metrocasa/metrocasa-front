'use client';

import { EmpreendimentoList } from '@/components/EmpreendimentoList/empreendimento-list';
import { HeroSection } from '@/components/page-components/hero-section';
import { Loading } from '@/components/loading';

import { useImoveis } from '@/contexts/imoveis-context';

import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/globals/Header';
import { Filter } from '@/components/globals/Filter';
import { Suspense } from 'react';

const EmpreendimentosPage = () => {
  const { imoveis } = useImoveis();

  return (
    <>
      <Header />
      {imoveis.length ? (
        <div>
          <HeroSection title={'Empreendimentos'} />
          <Filter />
          {/* TODO: ADD A SKELETON IF NEEDED */}
          <Suspense>
            <EmpreendimentoList />
          </Suspense>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default EmpreendimentosPage;

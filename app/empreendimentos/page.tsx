'use client';

import EmpreendimentoList from '@/components/EmpreendimentoList/empreendimento-list';
import { HeroSection } from '@/components/page-components/hero-section';
import { Loading } from '@/components/loading';

import { useImoveis } from '@/contexts/imoveis-context';

import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/Header';
import { Filter } from '@/components/filter';

export default function EmpreendimentosPage() {
  const { imoveis } = useImoveis();

  const searchParams = useSearchParams();
  const region = searchParams.get('region');
  const status = searchParams.get('status');
  const search = searchParams.get('search');
  const zone = searchParams.get('zone');

  return (
    <>
      <Header />
      {imoveis.length ? (
        <div>
          <HeroSection title={'Empreendimentos'} />
          <Filter />
          <EmpreendimentoList
            region={region}
            status={status}
            search={search}
            zone={zone}
          />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

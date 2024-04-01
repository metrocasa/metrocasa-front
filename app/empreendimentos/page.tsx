'use client';

import EmpreendimentoList from '@/components/EmpreendimentoList/EmpreendimentoList';
import { HeroSection } from '@/components/HeroSection';
import { Loading } from '@/components/loading';

import { useImoveis } from '@/contexts/imoveis-context';

import { useSearchParams } from 'next/navigation';

export default function EmpreendimentosPage() {
  const { imoveis } = useImoveis();

  const searchParams = useSearchParams();
  const region = searchParams.get('region');
  const status = searchParams.get('status');
  const search = searchParams.get('search');

  return (
    <>
      {imoveis.length ? (
        <div>
          <HeroSection title={'Empreendimentos'} />
          <EmpreendimentoList region={region} status={status} search={search} />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

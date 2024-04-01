'use client';

import EmpreendimentoList from '@/components/EmpreendimentoList/EmpreendimentoList';
import HeroSection from '@/components/HeroSection';
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
      <HeroSection title={'Empreendimentos'} />
      <EmpreendimentoList region={region} status={status} search={search} />
    </>
  );
}

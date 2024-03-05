import EmpreendimentoList from '@/components/EmpreendimentoList/EmpreendimentoList';
import HeroSection from '@/components/HeroSection/HeroSection';
import Image from 'next/image';

export default function EmpreendimentosPage() {
  return (
    <>
      <HeroSection title={'Empreendimentos'} />
      <EmpreendimentoList />
    </>
  );
}

import EmpreendimentoList from '@/components/EmpreendimentoList/EmpreendimentoList';
import Filter from '@/components/Filter/Filter';
import Slider from '@/components/Slider/Slider';

import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Slider />
      <Filter />
      <EmpreendimentoList />
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <h1></h1>
      </div>
    </>
  );
}

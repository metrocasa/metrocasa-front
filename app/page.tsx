import EmpreendimentoList from '@/components/EmpreendimentoList/EmpreendimentoList';
import Filter from '@/components/Filter';
import Slider from '@/components/Slider';

export default function Home() {
  return (
    <>
      <div className="z-10">
        <Slider />
      </div>

      <Filter />

      <EmpreendimentoList />
    </>
  );
}

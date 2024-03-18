import EmpreendimentoList from "@/components/EmpreendimentoList/EmpreendimentoList";
import Filter from "@/components/Filter/Filter";
import Slider from "@/components/Slider/Slider";

export default function Home() {
  return (
    <>
      <div className="relative  mb-14">
        <div className="z-60">
          <Slider />
        </div>

        <div className="w-full z-60 absolute z-50 -bottom-8 mx-auto">
          <Filter />
        </div>
      </div>
      <EmpreendimentoList />
    </>
  );
}

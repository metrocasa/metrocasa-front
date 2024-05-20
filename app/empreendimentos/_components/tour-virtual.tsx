import { Imovel } from '@/types/global';

export const TourVirtual = ({ imovel }: { imovel: Imovel }) => {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center gap-10">
        <div className="rounded-lg md:rounded-none bg-slate-300 h-[600px] md:h-[800px] w-full">
          <iframe
            src={imovel.attributes.tour_virtual}
            className="w-full h-full rounded-lg md:rounded-none"
          />
        </div>
      </div>
    </section>
  );
};

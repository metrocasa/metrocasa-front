import { Imovel } from '@/contexts/imoveis-context';

import { Title } from '@/components/title';

const FacilitiesSection = ({ imovel }: { imovel: Imovel }) => {
  return (
    <section className="w-full py-24">
      <div className="w-full max-w-[1216px] mx-auto">
        <Title
          subtitle="Mais facildiades para você"
          title="Mais Facilidades para Você"
        />
        <h1>FACILITIES</h1>
      </div>
    </section>
  );
};

export default FacilitiesSection;

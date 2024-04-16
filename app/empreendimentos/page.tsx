import { Suspense } from 'react';

import { EmpreendimentoList } from '@/components/empreendimento-list/empreendimento-list';
import { HeroSection } from '@/components/page-components/hero-section';

import { Header } from '@/components/globals/Header';
import { Filter } from '@/components/globals/Filter';
import { Footer } from '@/components/globals/Footer';

import { EtapaSection } from '@/components/page-components/etapa-section/etapa-section';
import { FormSection } from '@/components/page-components/form-section';

const EmpreendimentosPage = () => {
  return (
    <>
      <Header />

      <div>
        <HeroSection title={'Empreendimentos'} />
        <Filter />
        {/* TODO: ADD A SKELETON IF NEEDED */}
        <Suspense>
          <EmpreendimentoList />
        </Suspense>

        <div className="mt-14">
          <EtapaSection />
        </div>
        <FormSection
          title="Aqui na Metrocasa, você realiza o sonho do seu apartamento próprio com descontos incríveis e as melhores condições de pagamento."
          subtitle="Não perca a chance, venha participar do nosso Feirão de Imóveis e aproveite ofertas imperdíveis somente este final de semana!"
        />
      </div>
      <Footer />
    </>
  );
};

export default EmpreendimentosPage;

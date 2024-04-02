'use client';

import EmpreendimentoList from '@/components/EmpreendimentoList/EmpreendimentoList';
import { Filter } from '@/components/Filter';
import { FormSection } from '@/components/page-components/FormSection';
import { Slider } from '@/components/Slider';
import { Loading } from '@/components/loading';

import { useImoveis } from '@/contexts/imoveis-context';

import { LancamentoSection } from '@/components/page-components/LancamentoSection';
import { EtapaSection } from '@/components/page-components/EtapaSection/EtapaSection';
import { ZonasSlide } from '@/components/page-components/ZonasSlide/ZonasSlide';
import { Testmonials } from '@/components/page-components/Testmonials';
import { FaqSection } from '@/components/page-components/faq';
import { Footer } from '@/components/Footer';

export default function Home() {
  const { imoveis } = useImoveis();

  return (
    <>
      {imoveis.length ? (
        <div>
          <div className="z-10">
            <Slider />
          </div>

          <Filter />

          <EmpreendimentoList />
          <FormSection />
          <LancamentoSection />
          <EtapaSection />
          <ZonasSlide />
          <Testmonials />
          <FaqSection />
          <Footer />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

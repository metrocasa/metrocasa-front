'use client';

import EmpreendimentoList from '@/components/EmpreendimentoList/EmpreendimentoList';
import { Filter } from '@/components/Filter';
import { FormSection } from '@/components/page-components/FormSection';

import { Loading } from '@/components/loading';

import { useImoveis } from '@/contexts/imoveis-context';

import { LancamentoSection } from '@/components/page-components/LancamentoSection';
import { EtapaSection } from '@/components/page-components/EtapaSection/EtapaSection';
import { ZonasSlide } from '@/components/page-components/ZonasSlide/ZonasSlide';
import { Testmonials } from '@/components/page-components/Testmonials';
import { FaqSection } from '@/components/page-components/faq';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/hero';
import { AboutUs } from '@/components/page-components/about-us';
import { Header } from '@/components/Header';

export default function Home() {
  const { imoveis } = useImoveis();

  return (
    <>
      {imoveis.length ? (
        <div>
          <Header />

          <Hero />
          <AboutUs />
          <EmpreendimentoList />
          <Filter />

          <LancamentoSection />
          {/* <EtapaSection /> */}
          <ZonasSlide />
          <FormSection />
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

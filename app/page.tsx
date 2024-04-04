'use client';

import EmpreendimentoList from '@/components/EmpreendimentoList/empreendimento-list';

import { FormSection } from '@/components/page-components/form-section';
import { Filter } from '@/components/filter';

import { Loading } from '@/components/loading';

import { useImoveis } from '@/contexts/imoveis-context';

import { LancamentoSection } from '@/components/page-components/lancamento-section';
import { EtapaSection } from '@/components/page-components/EtapaSection/etapa-section';
import { Zonas } from '@/components/page-components/zonas-slide';
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
          <Zonas />
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

'use client';

import { EmpreendimentoList } from '@/components/empreendimento-list/empreendimento-list';

import { FormSection } from '@/components/page-components/form-section';

import { Loading } from '@/components/loading';

import { useImoveis } from '@/contexts/imoveis-context';

import { LancamentoSection } from '@/components/page-components/lancamento-section';

import { Zonas } from '@/components/page-components/zonas-slide';

import { FaqSection } from '@/components/page-components/faq';
import { Footer } from '@/components/globals/Footer';
import { Hero } from '@/components/hero';
import { AboutUs } from '@/components/page-components/about-us';
import { Header } from '@/components/globals/Header';
import { Filter } from '@/components/globals/Filter';

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
          <Zonas />
          <FormSection title="Aqui na Metrocasa, você realiza o sonho do seu apartamento próprio com descontos incríveis e as melhores condições de pagamento." />
          {/* <Testmonials />  */}
          <FaqSection />

          <Footer />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

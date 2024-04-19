import { Zonas } from '@/components/page-components/zonas-slide';
import { EmpreendimentoList } from '@/components/empreendimento-list/empreendimento-list';
import { FormSection } from '@/components/page-components/form-section';
import { LancamentoSection } from '@/components/page-components/lancamento-section';
import { FaqSection } from '@/components/page-components/faq';
import { Footer } from '@/components/globals/Footer';
import { Hero } from '@/components/hero';
import { AboutUs } from '@/components/page-components/about-us';
import { Header } from '@/components/globals/Header';
import { Filter } from '@/components/globals/Filter';
import { Testmonials } from '@/components/page-components/testmonials-section';

export default async function Home() {
  return (
    <>
      <Header />

      <Hero />
      <AboutUs />
      <EmpreendimentoList />
      <Filter />
      <LancamentoSection />
      <Zonas />
      <FormSection title="Aqui na Metrocasa, você realiza o sonho do seu apartamento próprio com descontos incríveis e as melhores condições de pagamento." />
      {/* <Testmonials /> */}
      <FaqSection />

      <Footer />
    </>
  );
}

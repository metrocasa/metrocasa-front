import { Zonas } from "@/components/page-components/zonas-slide";
import { EmpreendimentoList } from "@/components/empreendimento-list/empreendimento-list";
import { FormSection } from "@/components/page-components/form-section";
import { LancamentoSection } from "@/components/page-components/lancamento-section";
import { FaqSection } from "@/components/page-components/faq";
import { Footer } from "@/components/globals/Footer";
import { Hero } from "@/components/hero";
import { AboutUs } from "@/components/page-components/about-us";
import { Header } from "@/components/globals/Header";
import { Filter } from "@/components/globals/Filter";
import { Testmonials } from "@/components/page-components/testmonials-section";

import PopupFeirao from "@/components/popup-feirao";
import { Slider } from "@/components/slider";

export default async function Home() {
  return (
    <>
      <PopupFeirao />
      <Header />

      <div className="pt-[75px] lg:pt-[100px] w-full">
        <Slider />
      </div>

      <EmpreendimentoList />
      {/* <Hero /> */}
      {/* <AboutUs /> */}
      <LancamentoSection />
      <Zonas />
      <FormSection
        title="Pronto para dar o próximo passo? Agende sua visita agora e descubra o apartamento dos seus sonhos!
        "
        subtitle="Oportunidades únicas com parcelas acessíveis e condições de pagamento que facilitam a compra do seu imóvel."
      />
      <Testmonials />
      {/* <FaqSection /> */}

      <Footer />
    </>
  );
}

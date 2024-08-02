import { Suspense } from "react";

import { EmpreendimentoList } from "@/components/empreendimento-list/empreendimento-list";
import { HeroSection } from "@/components/page-components/hero-section";

import { Header } from "@/components/globals/Header";
import { Filter } from "@/components/globals/Filter";
import { Footer } from "@/components/globals/Footer";

import { EtapaSection } from "@/components/page-components/etapa-section/etapa-section";
import { FormSection } from "@/components/page-components/form-section";
import { Title } from "@/components/title";

const EmpreendimentosPage = async () => {
  return (
    <>
      <Header />

      <div>
        <HeroSection styles="">
          <div className="p-6 md:p-14 md:px-24 rounded-lg bg-white/10 text-black flex flex-col gap-8 items-center justify-center backdrop-blur-sm border border-white/25 shadow-lg">
            <h4 className="text-white font-medium text-2xl md:text-4xl">
              Encontre seu Imóvel
            </h4>
            <Filter styles="" label={false} />
          </div>
        </HeroSection>

        <div className="p-4">
          <Title
            subtitle="Conheça nossos empreendimentos"
            title="O primeiro passo para o seu Apê!"
          >
            <p className="max-w-[80%]">
              Nossos empreendimentos estão em excelentes bairros da cidade,
              próximos a comodidades e meios de transporte público,
              proporcionando conveniência e praticidade, com financiamento
              direto ou pelo programa Minha Casa Minha Vida.
            </p>
          </Title>
        </div>
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

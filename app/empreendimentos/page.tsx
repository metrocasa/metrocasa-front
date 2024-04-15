'use client';

import { Suspense, useState } from 'react';

import { EmpreendimentoList } from '@/components/empreendimento-list/empreendimento-list';
import { HeroSection } from '@/components/page-components/hero-section';
import { Loading } from '@/components/loading';

import { useImoveis } from '@/contexts/imoveis-context';

import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/globals/Header';
import { Filter } from '@/components/globals/Filter';
import { Footer } from '@/components/globals/Footer';
import { PaginationComp } from '@/components/pagination';
import { Button } from '@/components/ui/button';

import { MouseEvent } from 'react';
import { pages } from 'next/dist/build/templates/app-page';
import { Loader2Icon } from 'lucide-react';
import { EtapaSection } from '@/components/page-components/EtapaSection/etapa-section';
import { FormSection } from '@/components/page-components/form-section';

const EmpreendimentosPage = () => {
  const { imoveis, fetchImoveis, meta, currentPageSize } = useImoveis();
  const [loading, setLoading] = useState(false);

  const handleShowMore = () => {
    const total = meta.pagination.total;
    setLoading(true);

    fetchImoveis(currentPageSize).then(() => {
      setLoading(false);
    });
  };

  return (
    <>
      <Header />
      {imoveis.length ? (
        <div>
          <HeroSection title={'Empreendimentos'} />
          <Filter />
          {/* TODO: ADD A SKELETON IF NEEDED */}
          <Suspense>
            <EmpreendimentoList />
          </Suspense>
          <div className="w-full max-w-[1216px] mx-auto flex items-center justify-center">
            {meta.pagination.pageSize <= meta.pagination.total && (
              <Button
                onClick={() => handleShowMore()}
                variant="primary"
                size="lg"
                className={`${loading && 'pointer-events-none'}`}
              >
                {loading ? (
                  <Loader2Icon className="animate-spin text-white w-6 h-6" />
                ) : (
                  'MOSTRAR MAIS'
                )}
              </Button>
            )}
          </div>
          <div className="mt-14">
            <EtapaSection />
          </div>
          <FormSection
            title="Aqui na Metrocasa, você realiza o sonho do seu apartamento próprio com descontos incríveis e as melhores condições de pagamento."
            subtitle="Não perca a chance, venha participar do nosso Feirão de Imóveis e aproveite ofertas imperdíveis somente este final de semana!"
          />
          <Footer />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default EmpreendimentosPage;

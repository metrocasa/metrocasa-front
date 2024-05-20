'use client';

import React from 'react';
import { Header } from '@/components/globals/Header';

import { HeroSection } from '../_components/hero-section';
import { MainContent } from '../_components/main-content';

import { Plantas } from '../_components/plantas-section';
import FacilitiesSection from '../_components/facilities-section';
import { MapsSection } from '../_components/maps-section';
import { FormSection } from '@/components/page-components/form-section';
import { Footer } from '@/components/globals/Footer';

import { useImoveis } from '@/contexts/imoveis-context';
import TabsSection from '../_components/tabs-section';
import { Imovel } from '@/types/global';

interface ParamsValues {
  empreendimento: string[];
}

const EmpreendimentoDetails = ({ params }: { params: ParamsValues }) => {
  const [imovel, setImovelData] = React.useState<Imovel | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const imovelData = await fetchImovelById(
          Number(params.empreendimento[1]),
        );
        if (!imovelData) {
          throw new Error('Imóvel não encontrado');
        }
        setImovelData(imovelData);
      } catch (error) {
        console.log('Erro ao buscar imóvel', error);
      }
    };
    fetchData();
  }, []);

  const { fetchImovelById } = useImoveis();

  return (
    <>
      {imovel && (
        <>
          <div>
            <Header />
            <HeroSection imovel={imovel} />
            <MainContent imovel={imovel} />
          </div>

          {/* TABS */}
          <TabsSection imovel={imovel} />
          {/* Plantas */}
          {imovel?.attributes.activate_planta_section && (
            <Plantas imovel={imovel} />
          )}

          {/* Facildiades */}
          <FacilitiesSection imovel={imovel} />

          {/* Maps */}
          <MapsSection imovel={imovel} />

          {/* Form */}
          <FormSection
            title="Entre em contato"
            subtitle="Deixe seus dados que enviaremos mais informações sobre o empreendimento:"
          />

          {/* Footer */}
          <Footer />
        </>
      )}
    </>
  );
};

export default EmpreendimentoDetails;

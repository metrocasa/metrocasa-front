'use client';

import { Loading } from '@/components/loading';
import axios from 'axios';

import { useEffect, useState } from 'react';
import { Header } from '@/components/globals/Header';
import { Imovel } from '@/contexts/imoveis-context';
import { HeroSection } from '../_components/hero-section';
import { MainContent } from '../_components/main-content';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { MainGallery } from '../_components/main-gallery';
import { TourVirtual } from '../_components/tour-virtual';
import { Plantas } from '../_components/plantas-section';
import FacilitiesSection from '../_components/facilities-section';
import { MapsSection } from '../_components/maps-section';
import { FormSection } from '@/components/page-components/form-section';
import { Footer } from '@/components/globals/Footer';

interface ParamsValues {
  empreendimento: string[];
}

const EmpreendimentoDetails = ({ params }: { params: ParamsValues }) => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [imovel, setImovel] = useState<Imovel | null>(null);

  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    const fetchImoveis = async () => {
      const id = params.empreendimento[1];
      try {
        // CONFIG DA API TOKEN DE IMOVEIS
        const config = {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN_IMOVEIS}`,
          },
        };

        const response = await axios.get(
          `${BASE_URL}/api/imoveis/${id}?populate[planta_comp][populate][planta_image][fields]=*url&populate[fachada][populate][fields][0]=url&populate[logo][populate][fields][0]=url&populate[main_gallery][populate][fields][0]=url`,

          config,
        );
        setImovel(response.data.data);
      } catch (error) {
        console.error('Erro ao buscar imóveis:', error);
      }
    };

    fetchImoveis();
  }, []);

  return (
    <>
      {imovel ? (
        <>
          <div>
            <Header />
            <HeroSection imovel={imovel} />
            <MainContent imovel={imovel} />
          </div>

          {/* TABS */}
          <section className="w-full px-[15px] md:px-0 py-24">
            <div className="w-full">
              <Tabs className="w-full flex flex-col ">
                <TabList className="w-full max-w-[1216px] mx-auto flex gap-14 items-center justify-center p-4 rounded-lg  py-8">
                  {/* TAB GALERIA  */}
                  <Tab
                    className={
                      selectedTab === 0
                        ? 'text-3xl cursor-pointer font-bold focus:outline-none'
                        : 'text-3xl cursor-pointer font-normal'
                    }
                    onClick={() => setSelectedTab(0)}
                  >
                    Galeria
                  </Tab>

                  {/* TAB TOUR VIRTUAL */}
                  <Tab
                    className={
                      selectedTab === 1
                        ? 'text-3xl cursor-pointer font-bold focus:outline-none'
                        : 'text-3xl cursor-pointer font-normal'
                    }
                    onClick={() => setSelectedTab(1)}
                  >
                    Tour Virtual
                  </Tab>
                </TabList>

                <TabPanel>
                  <MainGallery imovel={imovel} />
                </TabPanel>
                <TabPanel>
                  <TourVirtual imovel={imovel} />
                </TabPanel>
              </Tabs>
            </div>
          </section>

          {/* Plantas */}
          {imovel.attributes.activate_planta_section && (
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
      ) : (
        <Loading />
      )}
    </>
  );
};

export default EmpreendimentoDetails;

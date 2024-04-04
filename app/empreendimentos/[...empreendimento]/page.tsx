'use client';

import { Loading } from '@/components/loading';
import axios from 'axios';

import { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Imovel } from '@/contexts/imoveis-context';
import { HeroSection } from '../_components/hero-section';
import { MainContent } from '../_components/main-content';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { MainGallery } from '../_components/main-gallery';

interface ParamsValues {
  empreendimento: string[];
}

const EmpreendimentoDetails = ({ params }: { params: ParamsValues }) => {
  const [imovel, setImovel] = useState<Imovel | null>(null);
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  console.log('IMOVEL: ', imovel);

  const [selectedTab, setSelectedTab] = useState(0);
  console.log(selectedTab);

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
          `${BASE_URL}/api/imoveis/${id}?populate=*`,
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
                  <h1>Make changes to your account here.</h1>
                </TabPanel>
              </Tabs>
            </div>
          </section>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default EmpreendimentoDetails;

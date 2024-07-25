"use client";

import React from "react";
import { Header } from "@/components/globals/Header";

import { HeroSection } from "../_components/hero-section";
import { MainContent } from "../_components/main-content";

import { Plantas } from "../_components/plantas-section";
import FacilitiesSection from "../_components/facilities-section";
import { MapsSection } from "../_components/maps-section";
import { FormSection } from "@/components/page-components/form-section";
import { Footer } from "@/components/globals/Footer";

// import { useImoveis } from '@/contexts/imoveis-context';
import TabsSection from "../_components/tabs-section";
import { Imovel } from "@/types/global";
import { useImoveis, useImovelById } from "@/utils/queries";
import Loading from "../loading";
import ChatbaseWidget from "@/components/chatbaseWidget";
import Link from "next/link";
import Image from "next/image";

interface ParamsValues {
  empreendimento: string[];
}

const EmpreendimentoDetails = ({ params }: { params: ParamsValues }) => {
  // const imoveis = useImoveis(10);
  const imovelId = Number(params.empreendimento[1]);
  const imovel = useImovelById(imovelId).data;

  if (!params.empreendimento[1]) throw new Error("Missing id");
  if (!imovel) return <Loading />;

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

          {/* Evolução de Obras */}
          {imovel.attributes.evolucao_obras && (
            <div className="w-full max-w-[1280px] mx-auto pb-24">
              <Link href={`/empreendimentos/obras/${imovel.id}`}>
                <Image
                  src={"/evolucao-banner.jpg"}
                  width={900}
                  height={900}
                  alt={"Evolução de Obras"}
                  className="w-full max-w-[1000px] mx-auto rounded-lg cursor-pointer"
                />
              </Link>
            </div>
          )}

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

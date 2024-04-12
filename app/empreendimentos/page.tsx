"use client";

import { EmpreendimentoList } from "@/components/empreendimento-list/empreendimento-list";
import { HeroSection } from "@/components/page-components/hero-section";
import { Loading } from "@/components/loading";

import { useImoveis } from "@/contexts/imoveis-context";

import { useSearchParams } from "next/navigation";
import { Header } from "@/components/globals/Header";
import { Filter } from "@/components/globals/Filter";
import { Suspense } from "react";
import { Footer } from "@/components/globals/Footer";
import { PaginationComp } from "@/components/pagination";
import { Button } from "@/components/ui/button";

import { MouseEvent } from "react";
import { pages } from "next/dist/build/templates/app-page";

const EmpreendimentosPage = () => {
  const { imoveis, fetchImoveis, meta } = useImoveis();

  const handleShowMore = () => {
    const nextPage = meta.pagination.page + 1;
    fetchImoveis(nextPage, 3);
  };

  return (
    <>
      <Header />
      {imoveis.length ? (
        <div>
          <HeroSection title={"Empreendimentos"} />
          <Filter />
          {/* TODO: ADD A SKELETON IF NEEDED */}
          <Suspense>
            <EmpreendimentoList />
          </Suspense>
          <Button onClick={() => handleShowMore()}>MOSTRAR MAIS</Button>
          <Footer />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default EmpreendimentosPage;

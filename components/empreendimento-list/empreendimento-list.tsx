"use client";

import React, { use, useEffect, useState } from "react";
import { EmpreendimentoCard } from "./empreendimento-card";
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";

import { usePathname, useSearchParams } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import { Title } from "../title";
import { Button } from "../ui/button";
import { FileWarningIcon, Loader2Icon, MoveRight } from "lucide-react";

import { Skeleton } from "../ui/skeleton";
import posthog from "posthog-js";
import { useAllImoveis, useImoveis, useSearchImovel } from "@/utils/queries";
import { useMetaContext } from "@/contexts/meta-context";
import { Loading } from "../loading";
import { Imoveis, Imovel } from "@/types/global";
import { useQuery } from "@tanstack/react-query";
import { getAllImoveis } from "@/actions/get-imoveis";
import { Filter } from "../globals/Filter";

export const EmpreendimentoList = () => {
  const { currentPageSize, setMeta, setCurrentPageSize } = useMetaContext();

  const [imoveisList, setImoveisList] = useState<Imovel[]>([]);
  const imoveis = useImoveis(currentPageSize);
  const meta = imoveis.data?.meta;

  useEffect(() => {
    if (imoveis.data?.data) {
      setImoveisList(imoveis.data.data);
    }
  }, [imoveis.data?.data]);

  const isMobile = useMediaQuery({ query: "(max-width: 424px)" });

  // PARAMS
  const path = usePathname();

  const searchParams = useSearchParams();
  const region = searchParams.get("region");
  const status = searchParams.get("status");
  const search = searchParams.get("search");
  const zone = searchParams.get("zone");

  // FILTERED IMOVEIS
  const { data: searchImoveis, isLoading } = useSearchImovel(search as string);

  // Show more imoveis
  const handleShowMore = () => {
    setCurrentPageSize(currentPageSize + 10);
  };

  if (imoveis.isLoading && imoveis.isLoading && meta) return <Loading />;

  return (
    <>
      {imoveis.isSuccess ? (
        <>
          {/* RENDERIZAR NA PAGINA HOME */}
          {path === "/" && (
            <section className="w-full pt-4 px-[15px] md:px-4 mb-6">
              <div className="w-full max-w-[1216px] mx-auto flex flex-col justify-center items-center md:flex-row gap-2 md:gap-14 py-8">
                <div className="w-full max-w-[100%] mx-auto md:py-14 flex flex-col gap-4">
                  <div
                    className={
                      "flex gap-2 text-main-red items-center md:justify-start justify-center"
                    }
                  >
                    <MoveRight
                      strokeWidth={1}
                      className="w-14 hidden md:block"
                    />
                    <h5 className={"text-lg font-bold"}>De Leste a Oeste</h5>
                  </div>

                  <h2
                    className={
                      "text-3xl md:text-5xl font-bold text-center md:text-start"
                    }
                  >
                    Apartamentos em todas as regiões da Cidade de São Paulo
                  </h2>
                </div>

                <div className="h-auto w-full md:max-w-[35%] pt-5">
                  <Filter styles="!px-0 !w-full" />
                </div>
              </div>

              <Swiper
                spaceBetween={isMobile ? 15 : 20}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                effect={isMobile ? "fade" : ""}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  300: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 1,
                  },
                  800: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                  1400: {
                    slidesPerView: 5,
                  },
                }}
                modules={[Autoplay, Pagination, EffectFade]}
              >
                {imoveis.data?.data.map((imovel, i) => (
                  <SwiperSlide key={i}>
                    <Link
                      href={`/empreendimentos/${imovel.attributes.slug}/${imovel.id}`}
                    >
                      <EmpreendimentoCard key={imovel.id} data={imovel} />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>
          )}

          {/* RENDER DA PAGINA EMPREENDIMENTOS */}
          {path.startsWith("/empreendimentos") && !isLoading && (
            <>
              {/* IF THERES NO DATA ON SEARCH */}
              {search && !searchImoveis?.data.length && (
                <div className="w-full flex flex-col gap-4 items-center justify-center p-10 text-2xl font-bold text-gray-300">
                  <FileWarningIcon className="w-10 h-10" />
                  Ops! Nenhum imóvel encontrado
                </div>
              )}

              <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-6"
                id="list"
              >
                {(search ? searchImoveis?.data : imoveisList)?.map(
                  (imovel: Imovel, i: number) => (
                    <Link
                      key={i}
                      href={`/empreendimentos/${imovel.attributes.slug}/${imovel.id}`}
                      className={`flex flex-1  ${
                        search || region || (status && "md:max-w-[350px]")
                      }`}
                    >
                      <EmpreendimentoCard key={imovel.id} data={imovel} />
                    </Link>
                  )
                )}
              </div>

              {/* BUTTON LOAD MORE */}
              {searchImoveis?.data.length !== 0 ||
                (imoveis.data && (
                  <div className="w-full max-w-[1216px] mx-auto flex items-center justify-center">
                    <Button
                      onClick={() => handleShowMore()}
                      variant="primary"
                      size="lg"
                      className={
                        imoveis.isFetching
                          ? "bg-main-red/30 pointer-events-none cursor-not-allowed"
                          : "bg-main-red"
                      }
                    >
                      {!imoveis.isFetching ? (
                        "MOSTRAR MAIS"
                      ) : (
                        <Loader2Icon className="animate-spin text-white w-6 h-6" />
                      )}
                    </Button>
                  </div>
                ))}
            </>
          )}
        </>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 mb-6 max-w-[1350px] mx-auto py-10">
          {[1, 2, 3, 4].map((item, i) => (
            <div key={i} className="w-full">
              <div className="w-full flex flex-col space-y-3 px-4">
                <Skeleton className="h-[400px] w-full  rounded-xl bg-main-red/10" />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

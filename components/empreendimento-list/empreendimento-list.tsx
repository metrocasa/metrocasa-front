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
import { Loader2Icon, MoveRight } from "lucide-react";

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
  const searchImoveis = useSearchImovel(search as string).data;

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
            <section className="w-full pt-4 px-[15px] md:px-0 mb-6">
              <div className="w-full max-w-[1216px] mx-auto flex flex-col justify-center items-center md:flex-row gap-2 md:gap-14">
                <div className="w-full max-w-[100%] mx-auto md:py-14 flex flex-col gap-4">
                  <div className={"flex gap-2 text-main-red items-center"}>
                    <MoveRight strokeWidth={1} className="w-14" />
                    <h5 className={"text-lg font-bold"}>De Leste a Oeste</h5>
                  </div>

                  <h2 className={"text-4xl md:text-5xl font-bold"}>
                    Conheça seu novo apartamento
                  </h2>
                </div>

                <div className="h-auto w-full max-w-[35%] pt-5">
                  <Filter />
                </div>
              </div>

              <Swiper
                spaceBetween={isMobile ? 15 : 185}
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
                      onClick={() => {
                        posthog.capture(`${imovel.attributes.slug}`, {
                          property: "value",
                        });
                        posthog.group(
                          "Interesse em: ",
                          imovel.attributes.title
                        );
                      }}
                    >
                      <EmpreendimentoCard key={imovel.id} data={imovel} />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>
          )}

          {/* RENDER DA PAGINA EMPREENDIMENTOS */}
          {path.startsWith("/empreendimentos") && (
            <>
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
                      onClick={() => {
                        posthog.capture(`${imovel.attributes.slug}`, {
                          property: "value",
                        });
                        posthog.group(
                          "Interesse em: ",
                          imovel.attributes.title
                        );
                      }}
                    >
                      <EmpreendimentoCard key={imovel.id} data={imovel} />
                    </Link>
                  )
                )}
              </div>

              {/* BUTTON LOAD MORE */}
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
            </>
          )}
        </>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 mb-6 max-w-[1350px] mx-auto py-10">
          {[1, 2, 3, 4].map((item, i) => (
            <div key={i} className="">
              <div className="flex flex-col space-y-3">
                <Skeleton className="h-[400px] w-[300px] rounded-xl bg-main-red/10" />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

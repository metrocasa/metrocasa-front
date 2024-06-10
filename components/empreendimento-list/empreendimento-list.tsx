'use client';

import React, { use, useState } from 'react';
import { EmpreendimentoCard } from './empreendimento-card';
import Link from 'next/link';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';

import { usePathname, useSearchParams } from 'next/navigation';
import { useMediaQuery } from 'react-responsive';
import { Title } from '../title';
import { Button } from '../ui/button';
import { Loader2Icon } from 'lucide-react';

import { Skeleton } from '../ui/skeleton';
import posthog from 'posthog-js';
import { useImoveis } from '@/utils/queries';
import { useMetaContext } from '@/contexts/meta-context';
import { Loading } from '../loading';
import { Imovel } from '@/types/global';
import { useIsFetching } from '@tanstack/react-query';

export const EmpreendimentoList = () => {
  const { currentPageSize, setMeta, setCurrentPageSize } = useMetaContext();

  const [imoveisList, setImoveisList] = React.useState<Imovel[]>([]);
  const imoveis = useImoveis(currentPageSize);
  const imoveisQuantity = useImoveis(15);
  const meta = imoveis.data?.meta;

  React.useEffect(() => {
    if (imoveis.data?.data) {
      setImoveisList(imoveis.data.data);
    }
  }, [imoveis.data?.data]);

  const isMobile = useMediaQuery({ query: '(max-width: 424px)' });

  const path = usePathname();

  // PARAMS
  const searchParams = useSearchParams();
  const region = searchParams.get('region');
  const status = searchParams.get('status');
  const search = searchParams.get('search');
  const zone = searchParams.get('zone');

  // TODO: CRIAR UM FILTRO AQUI

  const handleShowMore = () => {
    setCurrentPageSize(currentPageSize + 8);
  };

  if (imoveisQuantity.isLoading && imoveis.isLoading && meta)
    return <Loading />;

  return (
    <>
      {imoveisList.length ? (
        <>
          {/* RENDERIZAR NA PAGINA HOME */}
          {path === '/' && (
            <section className="w-full pt-24 px-[15px] md:px-0 mb-6">
              <Title
                subtitle="De leste a Oeste"
                title="Conheça seu novo Apartamento"
              />

              <Swiper
                spaceBetween={isMobile ? 15 : 185}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                effect={isMobile ? 'fade' : ''}
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
                {imoveisQuantity.data?.data.map((imovel, i) => (
                  <SwiperSlide key={i}>
                    <Link
                      href={`/empreendimentos/${imovel.attributes.slug}/${imovel.id}`}
                      onClick={() => {
                        posthog.capture(`${imovel.attributes.slug}`, {
                          property: 'value',
                        });
                        posthog.group(
                          'Interesse em: ',
                          imovel.attributes.title,
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
          {path.startsWith('/empreendimentos') && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 mb-6">
                {imoveisList.map((imovel: Imovel, i: number) => (
                  <Link
                    key={i}
                    href={`/empreendimentos/${imovel.attributes.slug}/${imovel.id}`}
                    className={`flex flex-1  ${
                      search || region || (status && 'md:max-w-[350px]')
                    }`}
                    onClick={() => {
                      posthog.capture(`${imovel.attributes.slug}`, {
                        property: 'value',
                      });
                      posthog.group('Interesse em: ', imovel.attributes.title);
                    }}
                  >
                    <EmpreendimentoCard key={imovel.id} data={imovel} />
                  </Link>
                ))}
              </div>

              {/* IDLE */}
              <div className="w-full max-w-[1216px] mx-auto flex items-center justify-center">
                {imoveis.data?.meta.pagination.page !==
                  imoveis.data?.meta.pagination.pageSize && (
                  <Button
                    onClick={() => handleShowMore()}
                    variant="primary"
                    size="lg"
                    className="bg-main-red"
                  >
                    MOSTRAR MAIS
                  </Button>
                )}
              </div>

              {/* LOADING */}
              <div className="w-full flex  justify-center">
                {imoveis.isFetching && (
                  <Button
                    onClick={() => handleShowMore()}
                    variant="primary"
                    size="lg"
                    className="pointer-events-none bg-main-red/50"
                  >
                    <Loader2Icon className="animate-spin text-white w-6 h-6" />
                  </Button>
                )}
              </div>
            </>
          )}
        </>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 mb-6">
          {[1, 2, 3, 4].map((item, i) => (
            <div key={i}>
              <div className="flex flex-col space-y-3">
                <Skeleton className="h-[400px] w-[340px] rounded-xl bg-main-red/10" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px] bg-main-red/10" />
                  <Skeleton className="h-4 w-[200px] bg-main-red/10" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

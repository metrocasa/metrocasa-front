'use client';

import React from 'react';
import { EmpreendimentoCard } from './empreendimento-card';
import Link from 'next/link';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';

import { useImoveis } from '@/contexts/imoveis-context';
import { usePathname, useSearchParams } from 'next/navigation';
import { useMediaQuery } from 'react-responsive';
import { Title } from '../title';

export const EmpreendimentoList = () => {
  const { imoveis, quantityImoveis } = useImoveis();

  const isMobile = useMediaQuery({ query: '(max-width: 424px)' });

  const path = usePathname();

  // PARAMS
  const searchParams = useSearchParams();
  const region = searchParams.get('region');
  const status = searchParams.get('status');
  const search = searchParams.get('search');
  const zone = searchParams.get('zone');

  const filteredImoveis = (
    paramSearch: string | null | undefined,
    paramRegion: string | null | undefined,
    paramStatus: string | null | undefined,
    paramZone: string | null | undefined,
  ) => {
    // Transformar os parâmetros de filtro, se estiverem definidos
    const normalizedSearch = paramSearch
      ? paramSearch.trim().toLowerCase().normalize()
      : null;
    const normalizedRegion = paramRegion
      ? paramRegion.trim().toLowerCase().normalize()
      : null;
    const normalizedStatus = paramStatus
      ? paramStatus.trim().toLowerCase().normalize()
      : null;
    const normalizedZone = paramZone
      ? paramZone.trim().toLowerCase().normalize()
      : null;

    // Verificar se todos os filtros estão vazios
    if (
      !normalizedSearch &&
      !normalizedRegion &&
      !normalizedStatus &&
      !normalizedZone
    ) {
      // Se nenhum filtro estiver preenchido, retornar todos os imóveis
      return imoveis;
    }

    // Aplicar os filtros individualmente se estiverem preenchidos
    let filtered = [...imoveis];

    if (normalizedSearch) {
      filtered = filtered.filter((imovel) => {
        const search = imovel.attributes.title;
        return (
          typeof search === 'string' &&
          search.trim().toLowerCase().normalize() === normalizedSearch
        );
      });
    }

    if (normalizedRegion) {
      filtered = filtered.filter((imovel) => {
        const region = imovel.attributes.neighborhoods;
        return (
          typeof region === 'string' &&
          region.trim().toLowerCase().normalize() === normalizedRegion
        );
      });
    }

    if (normalizedStatus) {
      filtered = filtered.filter((imovel) => {
        const status = imovel.attributes.status;
        return (
          typeof status === 'string' &&
          status.trim().toLowerCase().normalize() === normalizedStatus
        );
      });
    }

    if (normalizedZone) {
      filtered = filtered.filter((imovel) => {
        const zone = imovel.attributes.zone;
        return (
          typeof search === 'string' &&
          zone.trim().toLowerCase().normalize() === normalizedZone
        );
      });
    }

    return filtered;
  };

  return (
    <>
      {/* RENDERIZAR NA PAGINA HOME */}
      {path === '/' && (
        <section className="w-full pt-24 px-[15px] md:px-0">
          <Title
            title="Conheça seu novo Apartamento"
            subtitle="Seu mais novo"
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
            {quantityImoveis(15).map((imovel, i) => (
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
      {path.startsWith('/empreendimentos') && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
          {filteredImoveis(search, region, status, zone).map((imovel, i) => (
            <Link
              key={i}
              href={`/empreendimentos/${imovel.attributes.slug}/${imovel.id}`}
              className={`flex flex-1  ${
                search || region || (status && 'md:max-w-[350px]')
              }`}
            >
              <EmpreendimentoCard key={imovel.id} data={imovel} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

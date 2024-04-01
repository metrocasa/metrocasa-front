'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmpreendimentoCard from './EmpreendimentoCard';
import Link from 'next/link';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Pagination } from 'swiper/modules';

import { useImoveis } from '@/contexts/imoveis-context';
import { usePathname, useRouter } from 'next/navigation';

interface IProps {
  region?: string | null;
  status?: string | null;
  search?: string | null;
}

const EmpreendimentoList = ({ search, region, status }: IProps) => {
  const path = usePathname();

  const { imoveis, quantityImoveis } = useImoveis();

  const filteredImoveis = (
    paramTitle: string | null | undefined,
    paramNeighborhoods: string | null | undefined,
    paramStatus: string | null | undefined,
  ) => {
    // Verificar se todos os filtros estão vazios
    if (!paramTitle && !paramNeighborhoods && !paramStatus) {
      // Se nenhum filtro estiver preenchido, retornar todos os imóveis
      return imoveis;
    }

    // Aplicar os filtros individualmente se estiverem preenchidos
    let filtered = [...imoveis];

    if (paramTitle) {
      filtered = filtered.filter((imovel) =>
        imovel.attributes.title?.includes(paramTitle),
      );
    }

    if (paramNeighborhoods) {
      filtered = filtered.filter(
        (imovel) => imovel.attributes.neighborhoods === paramNeighborhoods,
      );
    }

    if (paramStatus) {
      filtered = filtered.filter(
        (imovel) => imovel.attributes.status === paramStatus,
      );
    }

    return filtered;
  };

  console.log('FILTER: ', filteredImoveis(search, region, status));

  return (
    <>
      {/* RENDERIZAR NA PAGINA HOME */}
      {path === '/' && (
        <Swiper
          spaceBetween={2}
          slidesPerView={5}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            800: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1400: {
              slidesPerView: 5,
            },
          }}
          modules={[Pagination]}
        >
          {quantityImoveis(10).map((imovel, index) => (
            <SwiperSlide key={index}>
              <Link
                href={`/empreendimentos/${imovel.attributes.slug}/${imovel.id}`}
              >
                <EmpreendimentoCard key={imovel.id} data={imovel} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* RENDER DA PAGINA EMPREENDIMENTOS */}
      {path.startsWith('/empreendimentos') && (
        <div className="flex gap-[2px] flex-wrap w-full">
          {filteredImoveis(search, region, status).map((imovel, index) => (
            <Link
              key={index}
              href={`/empreendimentos/${imovel.attributes.slug}/${imovel.id}`}
            >
              <EmpreendimentoCard key={imovel.id} data={imovel} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default EmpreendimentoList;

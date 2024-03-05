'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmpreendimentoCard from './EmpreendimentoCard';
import Link from 'next/link';

interface Imovel {
  id: number;
  attributes: {
    title: string;
    slug: string;
    fachada: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    hash: string;
  };
}

const EmpreendimentoList = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const POPULATE_PARAM = process.env.POPULATE_PARAM;

  const [imoveis, setImoveis] = useState<Imovel[]>([]);

  useEffect(() => {
    const fetchImoveis = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/imoveis${POPULATE_PARAM}`,
        );
        setImoveis(response.data.data);
      } catch (error) {
        console.error('Erro ao buscar imóveis:', error);
      }
    };

    fetchImoveis();
  }, []);

  return (
    <div className="flex gap-1">
      {imoveis.map((imovel) => (
        <Link
          key={imovel.attributes.title}
          href={`/empreendimentos/${imovel.attributes.slug}/${imovel.id}`}
        >
          <EmpreendimentoCard key={imovel.id} data={imovel} />
        </Link>
      ))}
    </div>
  );
};

export default EmpreendimentoList;

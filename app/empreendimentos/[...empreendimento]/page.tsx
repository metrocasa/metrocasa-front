'use client';

import { HeroSection } from '@/components/page-components/HeroSection';
import { Loading } from '@/components/loading';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

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

interface ParamsValues {
  empreendimento: string[];
}

const EmpreendimentoDetails = ({ params }: { params: ParamsValues }) => {
  const [imovel, setImovel] = useState<Imovel | null>(null);
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  console.log(params);

  useEffect(() => {
    const fetchImoveis = async () => {
      const id = params.empreendimento[1];
      try {
        const response = await axios.get(
          `${BASE_URL}/api/imoveis/${id}?populate=*`,
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
        <div>
          <HeroSection title={'Detalhes do Empreendimento'} />
          <h1>Detalhes do Produto: </h1>
          <img
            src={`http://localhost:1337${imovel.attributes.fachada.data.attributes.url}`}
            alt={imovel.attributes.title}
            className="w-96 h-[520px] object-cover relative"
          />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default EmpreendimentoDetails;

'use client';

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
  console.log(params);

  useEffect(() => {
    const fetchImoveis = async () => {
      const id = params.empreendimento[1];
      try {
        const response = await axios.get(
          `http://localhost:1337/api/imoveis/${id}?populate=*`,
        );
        setImovel(response.data.data);
      } catch (error) {
        console.error('Erro ao buscar imóveis:', error);
      }
    };

    fetchImoveis();
  }, []);

  return (
    <div>
      {imovel ? (
        <>
          <h1>Detalhes do Produto: </h1>
          <img
            src={`http://localhost:1337${imovel.attributes.fachada.data.attributes.url}`}
            alt={imovel.attributes.title}
            className="w-96 h-[520px] object-cover relative"
          />
        </>
      ) : (
        <p>Carregando detalhes do imóvel...</p>
      )}
    </div>
  );
};

export default EmpreendimentoDetails;

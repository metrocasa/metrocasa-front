'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;

// Definindo o tipo para o array de imóveis
export interface Imovel {
  id: number;
  attributes: {
    title: string;
    subtitle: string;
    slug: string;
    fachada: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    logo: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    main_gallery: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      }[];
    };
    zone: string;
    neighborhoods: string;
    status: string;
    hash: string;
  };
}

// Criando o contexto
const ImoveisContext = createContext<{
  imoveis: Imovel[];
  fetchImoveis: () => Promise<void>;
  quantityImoveis: (n: number) => Imovel[];
}>({
  imoveis: [],
  fetchImoveis: async () => {},
  quantityImoveis: (n: number) => [],
});

// Componente de provedor de contexto
export const ImoveisProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [imoveis, setImoveis] = useState<Imovel[]>([]);

  // Função para buscar imóveis
  const fetchImoveis = async () => {
    try {
      // CONFIG DA API TOKEN DE IMOVEIS
      const config = {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN_IMOVEIS}`,
        },
      };

      const response = await axios.get(
        `${BASE_URL}/api/imoveis/?populate=*`,
        config,
      );
      setImoveis(response.data.data);
    } catch (error) {
      console.error('Erro ao buscar imóveis:', error);
    }
  };

  const quantityImoveis = (quantity: number): Imovel[] => {
    return imoveis.slice(0, quantity);
  };

  useEffect(() => {
    fetchImoveis();
  }, []);

  return (
    <ImoveisContext.Provider value={{ imoveis, fetchImoveis, quantityImoveis }}>
      {children}
    </ImoveisContext.Provider>
  );
};

// Hook para consumir o contexto
export const useImoveis = () => useContext(ImoveisContext);

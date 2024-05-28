'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { usePathname } from 'next/navigation';
import { Imovel } from '@/types/global';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;

type ExtendedImoveisContextProps = {
  imoveis: Imovel[];
  meta: any;
  setMeta: (meta: any) => void;
  fetchImoveis: (page?: number, pageSize?: number) => Promise<void>;
  fetchImovelById: (n: number) => Promise<Imovel | null>;
  quantityImoveis: (n: number) => Imovel[];
  currentPageSize: number;
  setCurrentPageSize: (pageSize: number) => void;
};

// Criando o contexto
const ImoveisContext = createContext<ExtendedImoveisContextProps>({
  imoveis: [],
  meta: null,
  setMeta: (meta: any) => {},
  fetchImoveis: async () => {},
  fetchImovelById: async (n: number) => null,
  quantityImoveis: (n: number) => [],
  currentPageSize: 4,
  setCurrentPageSize: () => {},
});

// Componente de provedor de contexto
export const ImoveisProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [imoveis, setImoveis] = useState<Imovel[]>([]);
  const [meta, setMeta] = useState<number>();
  const [currentPageSize, setCurrentPageSize] = useState<number>(8);

  // Função para buscar imóveis
  const fetchImoveis = async (pageSize = currentPageSize) => {
    try {
      // CONFIG DA API TOKEN DE IMOVEIS
      const headers = new Headers({
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN_IMOVEIS}`,
      });

      const response = await fetch(
        `${BASE_URL}/api/imoveis?pagination[page]=1&pagination[pageSize]=${pageSize}&populate[planta_comp][populate][planta_image][fields][0]=url&populate[fachada][populate][fields][0]=url&populate[logo][populate][fields][0]=url&populate[main_gallery][populate][fields][0]=url&populate[materiais][populate]=*`,
        {
          headers: headers,
        },
      );
      if (!response.ok) {
        throw new Error('Erro ao buscar imóveis');
      }
      const data = await response.json();
      setCurrentPageSize(pageSize + 8);
      setImoveis(data.data);
      setMeta(data.meta);
    } catch (error) {
      console.error('Erro ao buscar imóveis:', error);
    }
  };

  // Função para buscar imóvel por ID
  const fetchImovelById = async (id: number) => {
    try {
      // CONFIG DA API TOKEN DE IMOVEIS
      const headers = new Headers({
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN_IMOVEIS}`,
      });

      const response = await fetch(
        `${BASE_URL}/api/imoveis/${id}?populate[planta_comp][populate][planta_image][fields]=*url&populate[fachada][populate][fields][0]=url&populate[logo][populate][fields][0]=url&populate[main_gallery][populate][fields][0]=url&populate[panoramas][populate]=*`,
        {
          headers: headers,
          cache: 'force-cache',
          next: {
            revalidate: 600, // 1h
          },
        },
      );
      if (!response.ok) {
        throw new Error('Erro ao buscar imóvel por ID');
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Erro ao buscar imóvel por ID:', error);
    }
  };

  // Função para buscar imóveis por quantidade
  const quantityImoveis = (quantity: number): Imovel[] => {
    return imoveis.slice(0, quantity);
  };

  useEffect(() => {
    fetchImoveis();
  }, []);

  return (
    <ImoveisContext.Provider
      value={{
        imoveis,
        meta,
        setMeta,
        fetchImoveis,
        fetchImovelById,
        quantityImoveis,
        currentPageSize,
        setCurrentPageSize,
      }}
    >
      {children}
    </ImoveisContext.Provider>
  );
};

// Hook para consumir o contexto
export const useImoveis = () => useContext(ImoveisContext);

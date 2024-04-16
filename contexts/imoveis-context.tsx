'use client';

import { cache, createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

import Cookies from 'js-cookie';
import { usePathname } from 'next/navigation';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;

// Definindo o tipo para o array de imóveis
export interface Imovel {
  id: number;
  attributes: {
    slug: string;
    title: string;
    description: string;
    subtitle: string;
    address: string;
    address_json: {
      className: string;
      height: string;
      width: string;
      loading: 'eager' | 'lazy';
      src: string;
      style: {
        border: number;
      };
    };
    fachada: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    active_on_materiais: boolean;
    materiais: {
      ri: string;
      books: {
        a3: string;
        fase_2: {
          link: string;
          disponivel: boolean;
        };
        fase_3: {
          link: string;
          disponivel: boolean;
        };
      };
    };

    facilities: string[];
    about_the_region: string;
    video_hero: string;
    video_background: string;
    tour_virtual: string;
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
    activate_planta_section: boolean;
    zone: string;
    neighborhoods: string;
    status: string;
    hash: string;
    planta_comp: {
      id: string;
      planta_title: string;
      planta_image: {
        data: {
          attributes: {
            url: string;
            width: string;
            height: string;
          };
        };
      };
    }[];
  };
}

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

  const path = usePathname();

  // Função para buscar imóveis
  const fetchImoveis = async (pageSize = currentPageSize) => {
    const isDashboardPage = path.startsWith('/dashboard');
    const authorizationToken = isDashboardPage
      ? Cookies.get('session')
      : process.env.NEXT_PUBLIC_API_TOKEN_IMOVEIS;

    try {
      // CONFIG DA API TOKEN DE IMOVEIS
      const config = {
        headers: {
          Authorization: `Bearer ${authorizationToken}`,
        },
      };

      const response = await axios.get(
        `${BASE_URL}/api/imoveis?pagination[page]=1&pagination[pageSize]=${pageSize}&populate[planta_comp][populate][planta_image][fields][0]=url&populate[fachada][populate][fields][0]=url&populate[logo][populate][fields][0]=url&populate[main_gallery][populate][fields][0]=url&populate[materiais][populate]=*`,
        config,
      );
      setCurrentPageSize(pageSize + 8);
      setImoveis(response.data.data);
      setMeta(response.data.meta);
    } catch (error) {
      console.error('Erro ao buscar imóveis:', error);
    }
  };

  // Função para buscar imóvel por ID
  const fetchImovelById = async (id: number) => {
    try {
      // CONFIG DA API TOKEN DE IMOVEIS
      const config = {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN_IMOVEIS}`,
        },
      };

      const response = await axios.get(
        `${BASE_URL}/api/imoveis/${id}?populate[planta_comp][populate][planta_image][fields]=*url&populate[fachada][populate][fields][0]=url&populate[logo][populate][fields][0]=url&populate[main_gallery][populate][fields][0]=url`,
        config,
      );

      return response.data.data;
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

"use client";

import { cache, createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

import Cookies from "js-cookie";
import { usePathname } from "next/navigation";

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
      loading: "eager" | "lazy";
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

// Criando o contexto
const ImoveisContext = createContext<{
  imoveis: Imovel[];
  meta: any;
  setMeta: (meta: any) => void;
  fetchImoveis: (page?: number, pageSize?: number) => Promise<void>;
  quantityImoveis: (n: number) => Imovel[];
}>({
  imoveis: [],
  meta: null,
  setMeta: (meta: any) => {},
  fetchImoveis: async () => {},
  quantityImoveis: (n: number) => [],
});

// Componente de provedor de contexto
export const ImoveisProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [imoveis, setImoveis] = useState<Imovel[]>([]);
  const [meta, setMeta] = useState<number>();

  const path = usePathname();

  // Função para buscar imóveis
  const fetchImoveis = cache(async (page = 1, pageSize = 4) => {
    const isDashboardPage = path.startsWith("/dashboard");
    const authorizationToken = isDashboardPage
      ? Cookies.get("session")
      : process.env.NEXT_PUBLIC_API_TOKEN_IMOVEIS;

    try {
      // CONFIG DA API TOKEN DE IMOVEIS
      const config = {
        headers: {
          Authorization: `Bearer ${authorizationToken}`,
        },
      };

      const response = await axios.get(
        `${BASE_URL}/api/imoveis?pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate[planta_comp][populate][planta_image][fields][0]=url&populate[fachada][populate][fields][0]=url&populate[logo][populate][fields][0]=url&populate[main_gallery][populate][fields][0]=url&populate[materiais][populate]=*`,
        config
      );
      setImoveis(response.data.data);
      setMeta(response.data.meta);
    } catch (error) {
      console.error("Erro ao buscar imóveis:", error);
    }
  });

  const quantityImoveis = (quantity: number): Imovel[] => {
    return imoveis.slice(0, quantity);
  };

  useEffect(() => {
    fetchImoveis();
  }, []);

  return (
    <ImoveisContext.Provider
      value={{ imoveis, meta, setMeta, fetchImoveis, quantityImoveis }}
    >
      {children}
    </ImoveisContext.Provider>
  );
};

// Hook para consumir o contexto
export const useImoveis = () => useContext(ImoveisContext);

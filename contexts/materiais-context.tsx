import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { usePathname } from 'next/navigation';
import Cookies from 'js-cookie';

// INTERFACE
export interface Materiais {
  data: {
    attributes: {
      books_valorizacao: {
        title: string;
        book_de_valorizacao: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
      }[];
      campanha_semanal: {
        criativo_desktop: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
        criativo_mobile: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
        flyers: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
      };
      fb_google_ads: {
        data: {
          id: number;
          attributes: {
            url: string;
          };
        }[];
      };
      links_uteis: {
        title: string;
        link: string;
      }[];
      materiais_graficos: {
        title: string;
        media: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
      }[];
    };
  };
}

const MateriaisContext = createContext<{ materiais: Materiais | null }>({
  materiais: null,
});

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const MateriaisProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [materiais, setMateriais] = useState<Materiais | null>(null);

  const path = usePathname();
  const isDashboardPage = path.startsWith('/dashboard');

  useEffect(() => {
    const fetchMateriais = async () => {
      try {
        const authorizationToken = isDashboardPage
          ? Cookies.get('session')
          : process.env.NEXT_PUBLIC_API_TOKEN_IMOVEIS;

        const config = {
          headers: {
            Authorization: `Bearer ${authorizationToken}`,
          },
        };

        const response = await axios.get<Materiais>(
          `${BASE_URL}/api/material?populate[0]=campanha_semanal&populate[1]=campanha_semanal.criativo_mobile&populate[2]=campanha_semanal.criativo_desktop&populate[3]=campanha_semanal.material_de_apoio&populate[4]=campanha_semanal.relampagop&populate[5]=campanha_semanal.flyers&populate[6]=books_valorizacao&populate[7]=books_valorizacao.book_de_valorizacao&populate[8]=books_valorizacao.title&populate[9]=fb_google_ads&populate[10]=links_uteis&populate[11]=links_uteis.title&populate[12]=links_uteis.link&populate[13]=materiais_graficos&populate[14]=materiais_graficos.media`,
          config,
        );
        setMateriais(response.data);
      } catch (error) {
        console.error('Error fetching Materiais:', error);
        setMateriais(null);
      }
    };

    fetchMateriais();
  }, [isDashboardPage]);

  return (
    <MateriaisContext.Provider value={{ materiais }}>
      {children}
    </MateriaisContext.Provider>
  );
};

const useMateriais = (): { materiais: Materiais | null } =>
  useContext(MateriaisContext);

export { MateriaisProvider, useMateriais };

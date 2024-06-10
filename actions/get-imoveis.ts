import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;
const TOKEN = process.env.NEXT_PUBLIC_API_TOKEN_IMOVEIS!;

// Função para fazer fetch do feirão.
export const getImoveis = async (pageSize: number) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/api/imoveis?pagination[page]=1&pagination[pageSize]=${pageSize}&populate[planta_comp][populate][planta_image][fields][0]=url&populate[fachada][populate][fields][0]=url&populate[logo][populate][fields][0]=url&populate[main_gallery][populate][fields][0]=url&populate[materiais][populate]=*`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      },
    );

    if (!res) {
      throw new Error('Erro ao buscar imóveis');
    }

    return await res.data;
  } catch (error) {
    console.error('Erro ao buscar imóveis:', error);
  }
};

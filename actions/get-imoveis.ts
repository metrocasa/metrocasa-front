import { Imoveis } from '@/types/global';
import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;
const TOKEN = process.env.NEXT_PUBLIC_API_GENERAL_TOKEN!;

// GET ALL IMOVEIS W/PAGE SIZE
export const getImoveis = async (pageSize: number) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/api/imoveis?pagination[page]=1&pagination[pageSize]=${pageSize}&populate[planta_comp][populate][fields][0]=url&populate[materiais][populate][ri][fields][0]=url&populate[materiais][populate][a3][fields][0]=url&populate[materiais][populate][fase_1][fields][0]=url&populate[materiais][populate][fase_2][fields][0]=url&populate[materiais][populate][fase_3][fields][0]=url&populate[evolucao_obras][populate][gallery][fields][0]=url&populate[main_gallery][populate]=*&populate[fachada][fields][0]=url&populate[logo][fields][0]=url`,
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

// GET ALL IMOVEIS W/PAGE SIZE
export const getAllImoveis = async () => {
  try {
    const res = await axios.get(
      `${BASE_URL}/api/imoveis?populate[planta_comp][populate][fields][0]=url&populate[materiais][populate][ri][fields][0]=url&populate[materiais][populate][a3][fields][0]=url&populate[materiais][populate][fase_1][fields][0]=url&populate[materiais][populate][fase_2][fields][0]=url&populate[materiais][populate][fase_3][fields][0]=url&populate[evolucao_obras][populate][gallery][fields][0]=url&populate[main_gallery][populate]=*&populate[fachada][fields][0]=url&populate[logo][fields][0]=url`,
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

// SEARCH IMOVEL
export const searchImoveis = async (search: string) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/api/imoveis?filters[title][$contains]=${search}&populate[planta_comp][populate][fields][0]=url&populate[materiais][populate][ri][fields][0]=url&populate[materiais][populate][a3][fields][0]=url&populate[materiais][populate][fase_1][fields][0]=url&populate[materiais][populate][fase_2][fields][0]=url&populate[materiais][populate][fase_3][fields][0]=url&populate[evolucao_obras][populate][gallery][fields][0]=url&populate[main_gallery][populate]=*&populate[fachada][fields][0]=url&populate[logo][fields][0]=url`,
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

// GET IMOVEL BY ID
export const getImovelById = async (id: number) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/api/imoveis/${id}?populate[planta_comp][populate][fields][0]=url&populate[materiais][populate][ri][fields][0]=url&populate[materiais][populate][a3][fields][0]=url&populate[materiais][populate][fase_1][fields][0]=url&populate[materiais][populate][fase_2][fields][0]=url&populate[materiais][populate][fase_3][fields][0]=url&populate[evolucao_obras][populate][gallery][fields][0]=url&populate[main_gallery][populate]=*&populate[fachada][fields][0]=url&populate[logo][fields][0]=url`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      },
    );

    return res.data.data;
  } catch (error) {
    console.error('Erro ao buscar imóvel por ID:', error);
  }
};

// TODO: talvez criar função pra buscar imoveis por quantidade

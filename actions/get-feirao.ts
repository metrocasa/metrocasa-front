import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;
const TOKEN = process.env.NEXT_PUBLIC_API_TOKEN_IMOVEIS!;

// Função para fazer fetch do feirão.
export const getFeirao = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/api/feirao?populate=*`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    if (!res) {
      throw new Error('Erro ao buscar feirão');
    }
    return await res.data;
  } catch (error) {
    console.error('Erro ao buscar feirão:', error);
  }
};

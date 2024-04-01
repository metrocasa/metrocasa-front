'use server';

import axios from 'axios';

export const getAllProperties = async () => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  try {
    const response = await fetch(`${BASE_URL}/api/imoveis/?populate=*`);
    if (!response.ok) {
      console.log('Erro while fetching');
      return;
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Erro ao buscar imóveis:', error);
  }
};

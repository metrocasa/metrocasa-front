import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;
const TOKEN = process.env.NEXT_PUBLIC_API_TOKEN_IMOVEIS!;

export const getMateriais = async () => {
  const res = await axios.get(
    `${BASE_URL}/api/material?populate[0]=campanha_semanal&populate[1]=campanha_semanal.criativo_mobile&populate[2]=campanha_semanal.criativo_desktop&populate[3]=campanha_semanal.material_de_apoio&populate[4]=campanha_semanal.relampagop&populate[5]=campanha_semanal.flyers&populate[6]=books_valorizacao&populate[7]=books_valorizacao.book_de_valorizacao&populate[8]=books_valorizacao.title&populate[9]=fb_google_ads&populate[10]=links_uteis&populate[11]=links_uteis.title&populate[12]=links_uteis.link&populate[13]=materiais_graficos&populate[14]=materiais_graficos.media`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    },
  );

  return await res.data;
};

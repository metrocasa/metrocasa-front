import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;
const TOKEN = process.env.NEXT_PUBLIC_API_GENERAL_TOKEN!;

// GET ALL IMOVEIS W/PAGE SIZE
export const getAllBanners = async () => {
  try {
    const res = await axios.get(
      `${BASE_URL}/api/banners?populate[desktop_image]=*`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    if (!res) {
      throw new Error("Erro ao buscar imóveis");
    }

    return await res.data;
  } catch (error) {
    console.error("Erro ao buscar imóveis:", error);
  }
};

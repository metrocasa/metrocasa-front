import { useImoveis } from '@/contexts/imoveis-context';

import Cookies from 'js-cookie';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;

export async function getImoveis(pageSize: number, path: string) {
  const isDashboardPage = path.startsWith('/dashboard');
  const authorizationToken = isDashboardPage
    ? Cookies.get('session')
    : process.env.NEXT_PUBLIC_API_TOKEN_IMOVEIS;

  const config = {
    headers: {
      Authorization: `Bearer ${authorizationToken}`,
    },
  };

  const response = await fetch(
    `${BASE_URL}/api/imoveis?pagination[page]=1&pagination[pageSize]=${pageSize}&populate[planta_comp][populate][planta_image][fields][0]=url&populate[fachada][populate][fields][0]=url&populate[logo][populate][fields][0]=url&populate[main_gallery][populate][fields][0]=url&populate[materiais][populate]=*`,
    config,
  );

  const imoveis = await response.json();

  return imoveis;
}

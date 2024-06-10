import { getFeirao } from '@/actions/get-feirao';
import { getImoveis } from '@/actions/get-imoveis';
import { FeiraoProps } from '@/types/global';
import { useQuery } from '@tanstack/react-query';

// GET FEIRÃO
export const useFeirao = () => {
  return useQuery<FeiraoProps>({
    queryKey: ['feirao'],
    queryFn: getFeirao,
    refetchOnWindowFocus: false,
  });
};

// GET IMOVEIS
export const useImoveis = (pageSize: number) => {
  return useQuery({
    queryKey: ['imoveis', pageSize],
    queryFn: () => getImoveis(pageSize),
    refetchOnWindowFocus: false,
  });
};

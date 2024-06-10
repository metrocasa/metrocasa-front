import { getFeirao } from '@/actions/get-feirao';
import { getImoveis, getImovelById } from '@/actions/get-imoveis';
import { getMateriais } from '@/actions/get-materiais';
import { FeiraoProps, Imoveis, Imovel, Materiais } from '@/types/global';
import { useQuery } from '@tanstack/react-query';

// GET FEIRÃO
export const useFeirao = () => {
  return useQuery<FeiraoProps>({
    queryKey: ['feirao'],
    queryFn: getFeirao,
  });
};

// GET IMOVEIS
export const useImoveis = (pageSize: number) => {
  return useQuery<Imoveis>({
    queryKey: ['imoveis', pageSize],
    queryFn: () => getImoveis(pageSize),
  });
};

// GET IMOVEL BY ID
export const useImovelById = (id: number) => {
  return useQuery<Imovel>({
    queryKey: ['imovel', id],
    queryFn: () => getImovelById(id),
  });
};

// GET MATERIAIS
export const useMateriais = () => {
  return useQuery<Materiais>({
    queryKey: ['materiais'],
    queryFn: getMateriais,
  });
};

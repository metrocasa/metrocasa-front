import { getAllBanners } from "@/actions/get-banners";
import { getFeirao } from "@/actions/get-feirao";
import {
  getAllImoveis,
  getImoveis,
  getImovelById,
  searchImoveis,
} from "@/actions/get-imoveis";
import { getMateriais } from "@/actions/get-materiais";
import {
  BannerProps,
  FeiraoProps,
  Imoveis,
  Imovel,
  Materiais,
} from "@/types/global";
import {
  dehydrate,
  keepPreviousData,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

// FEIRÃO
// get feirão
export const useFeirao = () => {
  return useQuery<FeiraoProps>({
    queryKey: ["feirao"],
    queryFn: getFeirao,
    placeholderData: keepPreviousData,
  });
};

// BANNERS
// get feirão
export const useBanners = () => {
  return useQuery<BannerProps>({
    queryKey: ["banners"],
    queryFn: getAllBanners,
    placeholderData: keepPreviousData,
  });
};

// IMOVEIS
// get imoveis
export const useImoveis = (pageSize: number) => {
  return useQuery<Imoveis>({
    queryKey: ["imoveis", pageSize],
    queryFn: () => getImoveis(pageSize),
    placeholderData: keepPreviousData,
  });
};

// get imovel by id
export const useImovelById = (id: number) => {
  return useQuery<Imovel>({
    queryKey: ["imovel", id],
    queryFn: () => getImovelById(id),
    placeholderData: keepPreviousData,
  });
};

// search imovel
export const useSearchImovel = (search: string) => {
  return useQuery<Imoveis>({
    queryKey: ["imovelSearch", search],
    queryFn: () => searchImoveis(search),
    placeholderData: keepPreviousData,
  });
};

// get all imoveis
export const useAllImoveis = () => {
  return useQuery<Imoveis>({
    queryKey: ["allImoveis"],
    queryFn: getAllImoveis,
    placeholderData: keepPreviousData,
  });
};

// MATERIAIS
// get materiais
export const useMateriais = () => {
  return useQuery<Materiais>({
    queryKey: ["materiais"],
    queryFn: getMateriais,
    placeholderData: keepPreviousData,
  });
};

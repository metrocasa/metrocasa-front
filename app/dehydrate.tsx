import { getAllImoveis } from '@/actions/get-imoveis';
import { Imoveis } from '@/types/global';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

export default async function Dehydrate({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery<Imoveis>({
    queryKey: ['imoveis'],
    queryFn: getAllImoveis,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}

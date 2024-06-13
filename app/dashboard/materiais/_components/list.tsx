import { MetaProvider } from '@/contexts/meta-context';

import { Card } from './card';
import { Search } from './search';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Imovel } from '@/types/global';

export const List = ({
  imoveis,
}: {
  imoveis: Imovel[];
  search?: string | null;
}) => {
  const params = useSearchParams();
  const search = params.get('search');

  const filteredImoveis = (paramTitle: string | null | undefined) => {
    // Transformar os parâmetros de filtro, se estiverem definidos
    const normalizedTitle = paramTitle
      ? paramTitle.trim().toLowerCase().normalize()
      : null;

    // Verificar se todos os filtros estão vazios
    if (!normalizedTitle) {
      // Se nenhum filtro estiver preenchido, retornar todos os imóveis
      return imoveis;
    }

    // Aplicar os filtros individualmente se estiverem preenchidos
    let filtered = [...imoveis];

    if (normalizedTitle) {
      filtered = filtered.filter((imovel) =>
        imovel.attributes.title
          ?.trim()
          .toLowerCase()
          .normalize()
          .includes(normalizedTitle),
      );
    }

    return filtered;
  };

  return (
    <>
      <Suspense>
        {/* SEARCH */}
        <Search />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-1">
          {/* LISTAGEM */}
          {filteredImoveis(search).map((imovel, i) => (
            <Card key={i} imovel={imovel} />
          ))}
        </div>
      </Suspense>
    </>
  );
};

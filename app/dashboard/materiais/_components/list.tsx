import { Imovel, useImoveis } from '@/contexts/imoveis-context';

import { Card } from './card';
import { Search } from './search';

const List = ({
  imoveis,
  search,
}: {
  imoveis: Imovel[];
  search: string | null;
}) => {
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
      {/* SEARCH */}
      <Search />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-1">
        {/* LISTAGEM */}
        {filteredImoveis(search).map(
          (imovel) =>
            imovel.attributes.active_on_materiais && <Card imovel={imovel} />,
        )}
      </div>
    </>
  );
};

export default List;

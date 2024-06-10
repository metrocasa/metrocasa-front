import { MouseEvent } from 'react';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { MetaProvider } from '@/contexts/meta-context';

export const PaginationComp: React.FC<any> = ({ onFetchImoveis, meta }) => {
  const pageCount = meta.pagination.pageCount;

  const handleShowMore = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const pageSize = meta.pagination.pageSize;
    console.log(pageSize);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        {[...Array(pageCount)].map((_, i) => (
          <PaginationItem key={i}>
            <PaginationLink href="#" onClick={() => onFetchImoveis(i + 1)}>
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href="#" onClick={(e) => handleShowMore(e)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComp;

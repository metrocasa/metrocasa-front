'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { List } from './_components/list';
import { useImoveis } from '@/contexts/imoveis-context';
import { Loader2Icon } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

import Cookies from 'js-cookie';
import { Button } from '@/components/ui/button';

const Materiais = () => {
  const { imoveis, fetchImoveis, meta, currentPageSize } = useImoveis();
  const [loading, setLoading] = useState(false);

  const handleShowMore = () => {
    const total = meta.pagination.total;
    setLoading(true);

    fetchImoveis(currentPageSize).then(() => {
      setLoading(false);
    });
  };

  return (
    <section className="bg-tertiary-black w-full flex flex-col lg:pl-[400px] min-h-screen n md:p-14 p-10">
      <h1 className="text-3xl font-bold text-main-red md:mb-[15px]">
        Materiais
      </h1>
      {imoveis.length ? (
        //TODO: ADD A SKELETON IF NEEDED
        <Suspense>
          <List imoveis={imoveis} />
          {meta.pagination.pageSize <= meta.pagination.total && (
            <Button
              onClick={() => handleShowMore()}
              variant="primary"
              size="lg"
              className={`${loading && 'pointer-events-none self-center'}`}
            >
              {loading ? (
                <Loader2Icon className="animate-spin text-white w-6 h-6" />
              ) : (
                'MOSTRAR MAIS'
              )}
            </Button>
          )}
        </Suspense>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <Loader2Icon className="animate-spin w-8 h-8 text-main-red" />
        </div>
      )}
    </section>
  );
};

export default Materiais;

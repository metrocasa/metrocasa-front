import { cn } from '@/lib/utils';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

export const EmpreendimentoCard = ({ data }: { data: any }) => {
  const path = usePathname();

  return (
    <div
      key={data.id}
      className={cn('relative w-full', path === '/' && 'min-w-[400px]')}
    >
      <Image
        src={`${data.attributes.fachada.data.attributes.url}`}
        alt={`Fachada - ${data.attributes.title}`}
        className={`object-cover transition h-[495px] w-full ${
          path === '/empreendimentos' ? '' : 'rounded-lg'
        }`}
        width={900}
        height={900}
        priority
      />

      <div
        className={`absolute top-0 left-0 w-full h-full bg-gradient-bg ${
          path === '/empreendimentos' ? '' : 'rounded-lg'
        }`}
      />

      <div className="absolute bottom-0 p-5 flex flex-col gap-5">
        <span className="hover:bg-secondary-red transition bg-main-red text-white self-start p-1 px-5 rounded text-sm">
          {data.attributes.status}
        </span>
        <h2 className="text-white font-bold text-3xl">
          {data.attributes.title}
        </h2>
        <span className="text-white font-medium">
          {data.attributes.subtitle}
        </span>
      </div>
    </div>
  );
};

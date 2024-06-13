import { cn } from '@/lib/utils';
import { Imovel } from '@/types/global';
import { Loader2Icon } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export const EmpreendimentoCard = ({ data }: { data: Imovel }) => {
  const path = usePathname();

  const [imovelInfo, setImovelInfo] = useState<Imovel | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImovel = async () => {
      try {
        const response = await fetch(`/api/imoveis/${data.id}`);
        const datas = await response.json();
        setImovelInfo(data);
      } catch (error) {
        console.error('Erro ao buscar imóvel:', error);
        // Lógica de tratamento de erro
      } finally {
        setIsLoading(false);
      }
    };
    fetchImovel();
  }, [data]);

  if (isLoading) {
    return (
      <div className="text-white/30  h-[400px] w-full rounded-lg flex items-center justify-center">
        <Image
          src={`${'/placeholder-white.jpg'}`}
          alt={'Fachada'}
          className={`object-cover transition h-[400px] w-full rounded-lg`}
          width={900}
          height={900}
          priority
        />

        <Loader2Icon className="animate-spin w-8 h-8 text-red-500/50 absolute" />
      </div>
    ); // Exibir um indicador de carregamento
  }

  if (!data) {
    return (
      <div className="text-white">
        Ops! aconteceu alguma coisa aqui, tente recarregar a página!.
      </div>
    ); // Exibir mensagem de erro
  }

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

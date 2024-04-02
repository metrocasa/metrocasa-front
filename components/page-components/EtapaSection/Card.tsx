import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  title: string;
  image: string;
}

const images = [
  { image: 'idependencia' },
  { image: 'vou-casar' },
  { image: 'familia' },
  { image: 'investimento' },
];

export const Card = ({ title, image }: IProps) => {
  return (
    <div className="h-[353px] relative">
      <div className="absolute bottom-0 p-8 flex flex-col gap-5 w-full">
        <h2 className="text-white font-bold text-2xl">{title}</h2>
        <Link href={'/empreendimentos'}>
          <Button variant="primary" size="lg">
            Ver Imóveis
          </Button>
        </Link>
      </div>

      <Image
        src={image}
        alt={title}
        width={473}
        height={453}
        className="rounded-md object-cover w-[273px] h-[353px]"
      />
    </div>
  );
};

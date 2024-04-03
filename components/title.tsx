import { cn } from '@/lib/utils';
import { MoveRight } from 'lucide-react';
import { Be_Vietnam_Pro } from 'next/font/google';

const font = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['200', '400', '700', '900'],
});

interface IProps {
  children?: React.ReactNode;
  title: string;
  subtitle: string;
}

export const Title = ({ children, title, subtitle }: IProps) => {
  return (
    <div className="w-full max-w-[1216px] mx-auto md:py-14 flex flex-col gap-4">
      <div className="flex gap-2 text-main-red items-center">
        <MoveRight strokeWidth={1} className="w-14" />
        <h5 className="text-lg font-medium">{subtitle}</h5>
      </div>

      <h2 className={cn('text-4xl md:text-5xl font-bold', font.className)}>
        {title}
      </h2>
      <div>{children}</div>
    </div>
  );
};

import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  title: string;
  icon: React.ReactElement;
  description: string;
}

export const Card = ({ title, icon, description }: IProps) => {
  return (
    <div className="h-auto bg-white rounded-lg p-8 flex flex-col gap-2">
      {icon}
      <h2 className="text-white font-bold text-2xl">{title}</h2>
      <p className="mb-5">{description}</p>
      <Button variant="primary">Ver Emprendimentos</Button>
    </div>
  );
};

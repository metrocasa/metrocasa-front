import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  title: string;
  icon: React.ReactElement;
  description: string;
}

export const Card = ({ title, icon, description }: IProps) => {
  const formatedTitle = title.toLowerCase().replace(" ", "-");

  return (
    <div className={"relative w-full"}>
      <Image
        src={`/etapa/${formatedTitle}.jpg`}
        alt={`Fachada - ${title}`}
        className={`object-cover transition h-[450px] w-full rounded-md`}
        width={900}
        height={900}
        priority
      />

      <div
        className={`absolute top-0 left-0 w-full h-full bg-red-gradient-bg `}
      />

      <div className="w-full absolute bottom-0 p-5 flex flex-col gap-5">
        <h3 className="text-white font-bold text-3xl">{title}</h3>
        <Button variant={"primary"} className="w-full" asChild>
          <Link href={`/empreendimentos?etapa=${formatedTitle}`}>Ver Mais</Link>
        </Button>
      </div>
    </div>
  );
};

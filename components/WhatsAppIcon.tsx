"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";

export const WhatsAppIcon = () => {
  const path = usePathname();

  <Link
    href="https://api.whatsapp.com/send?phone=551132142300&text=Ol%C3%A1%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20empreendimentos!"
    className="fixed right-7 bottom-7 z-40 animate-in"
  ></Link>;

  return (
    <>
      {!path.startsWith("/dashboard") && (
        <Popover>
          <PopoverTrigger className="fixed right-7 bottom-7 z-40 animate-in">
            <Image
              src={"/icons/whatsapp-color.svg"}
              alt="WhatsApp Metrocasa"
              width={60}
              height={60}
              className="drop-shadow-2xl drop-shadow-main-red"
              priority
            />
          </PopoverTrigger>
          <PopoverContent className="min-h-[200px] max-w-[250px] mr-8 flex flex-col gap-4 items-center justify-center">
            <h3 className="font-bold text-xl">Entrar em Contato</h3>
            <Link href="https://api.whatsapp.com/send?phone=551132142300&text=Ol%C3%A1%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20empreendimentos!">
              <Button variant={"outline"}>Falar com um Consultor</Button>
            </Link>
            <Link href="https://api.whatsapp.com/send?phone=551150610022">
              <Button variant={"primary"}>Central de Atendimento</Button>
            </Link>
          </PopoverContent>
        </Popover>
      )}
    </>
  );
};

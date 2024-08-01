"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { links } from "@/constants";
import { Button } from "@/components/ui/button";
import { Sidebar } from "../sidebar";
import { PhoneIcon } from "lucide-react";
import { useStore } from "zustand";
import { useFeiraoPopup } from "@/stores/feirao-store";

export const Header = () => {
  const { onOpen } = useFeiraoPopup();
  const wppUrl =
    "https://api.whatsapp.com/send?phone=551132142300&text=Ol%C3%A1%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20empreendimentos!";

  return (
    <header className="px-[15px] bg-white py-6 md:py-6 lg:py-2 border-b-2 border-slate-100 fixed top-0 z-50 w-full shadow">
      <div className="max-w-[1216px] mx-auto flex justify-between items-center">
        <div className="flex gap-8 items-center ">
          <Link href={"/"}>
            <Image
              src={"/logo-red.svg"}
              alt="Logo Construtora Metrocasa"
              width={215}
              height={100}
              priority
              className="w-[200px] md:w-[220px]"
            />
          </Link>

          <Link href={wppUrl}>
            <div className="hidden md:flex gap-2">
              <PhoneIcon strokeWidth={1} className="text-main-red" />
              <span>(11) 3214-2300</span>
            </div>
          </Link>
        </div>

        <nav className="hidden lg:flex justify-between items-center">
          <ul className="p-5 flex gap-2 font-bold items-center">
            {links.map((link, i) => (
              <li key={i}>
                <Link
                  aria-label={`${link.label}`}
                  href={link.href}
                  className="text-primary-dark hover:text-main-red p-4 py-7 transition"
                  target={link.target && "_blank"}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <Button
              onClick={onOpen}
              aria-label="Fazer Simulação"
              variant="primary"
              size={"lg"}
            >
              Fazer Simulação
            </Button>
          </ul>
        </nav>

        <div className="lg:hidden">
          <Sidebar />
        </div>
      </div>
    </header>
  );
};

"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

import Sidebar from "./sidebar";

const Header = () => {
  const router = useRouter;

  return (
    <div className="bg-slate-50 py-5 flex justify-between p-5 items-center">
      <Link href={"/"}>
        <Image
          src={"logo-red.svg"}
          alt="Logo metrocasa"
          width={215}
          height={100}
          priority
        />
      </Link>
      <nav className="hidden lg:flex justify-between items-center  ">
        <ul className="p-5 flex gap-7 font-bold">
          <li>
            <Link
              href={"/"}
              className="text-primary-dark hover:text-main-red p-5 py-7 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/empreendimentos"}
              className="text-primary-dark hover:text-main-red p-5 py-7 transition"
            >
              Empreendimentos
            </Link>
          </li>
          <li>
            <Link
              href={"/blog"}
              className="text-primary-dark hover:text-main-red p-5 py-7 transition"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href={"/contato"}
              className="text-primary-dark hover:text-main-red p-5 py-7 transition"
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>

      <div className="lg:hidden">
        <Sidebar />
      </div>
    </div>
  );
};

export default Header;

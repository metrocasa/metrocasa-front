'use client';

import React from 'react';

import Image from 'next/image';
import { Loader2Icon } from 'lucide-react';

const MainContent = () => {
  const user = true;

  return user ? (
    <main className="w-full flex flex-col lg:ml-[350px] h-screen md:p-14 p-10">
      <div className="flex flex-col gap-5">
        {/* <Image
          src={'/logo-red-white.svg'}
          alt={'Perfil'}
          className={`object-cover transition h-[70px] w-[70px] rounded-full`}
          width={900}
          height={900}
          priority
        /> */}

        <div className="object-cover transition h-[70px] w-[70px] rounded-full bg-main-red" />

        <h1 className="text-white text-3xl">
          Bem-vindo, <strong>USUARIO</strong>!
        </h1>
        <hr className="text-white" />
        <h2 className="text-main-red mt-14">
          Veja as ultimas novidades da Metrocasa:
        </h2>
      </div>
    </main>
  ) : (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Loader2Icon className="animate-spin w-8 h-8 text-main-red" />
    </div>
  );
};

export default MainContent;

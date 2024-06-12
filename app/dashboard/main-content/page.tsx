'use client';

import React from 'react';

import Image from 'next/image';
import { Loader2Icon } from 'lucide-react';
import { useUser } from '@/contexts/user-context';

const MainContent = () => {
  const { user } = useUser();

  return user ? (
    <main className="w-full flex flex-col lg:ml-[350px] h-screen md:p-14 p-10">
      <div className="flex flex-col gap-5">
        <Image
          src={
            user?.profile_image?.url
              ? `${user?.profile_image?.url}`
              : '/user-icon.svg'
          }
          alt={'Perfil'}
          className={`object-cover transition h-[70px] w-[70px] rounded-full`}
          width={900}
          height={900}
          priority
        />

        <h1 className="text-white text-3xl">
          Bem-vindo, <strong>{user.username.split(' ')[0]}</strong>!
        </h1>
        <hr className="text-white" />
        <h2 className="text-main-red mt-14">{`{ UNDER DEVELOPMENT } ...`}</h2>
      </div>
    </main>
  ) : (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Loader2Icon className="animate-spin w-8 h-8 text-main-red" />
    </div>
  );
};

export default MainContent;

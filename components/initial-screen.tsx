'use client';

import React from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

import Image from 'next/image';

import { InitialForm } from './forms/initial';
import { useFeirao, useImoveis } from '@/utils/queries';
import { Loading } from './loading';

// DIALOG
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTrigger,
} from '@/components/ui/dialog';

const InitialScreen = () => {
  const [showModal, setShowModal] = React.useState(false);

  const route = useRouter();

  const handleContinue = () => {
    Cookies.set('ft', 'false', { expires: 1 });
    route.refresh();
  };

  // Get feirão Query
  const feirao = useFeirao();
  const imageUrl = feirao.data?.data.attributes.imagem.data.attributes.url;

  const firstTime = Cookies.get('ft');

  return (
    <Dialog defaultOpen={!firstTime}>
      <DialogContent className="flex max-w-[80%] h-[80%] p-0">
        {/* LEFT */}
        <div className="h-full w-full md:w-[50%] ">
          <Image
            src={imageUrl as string}
            width={900}
            height={900}
            alt="Banner Feirão Metrocasa"
            className="w-full h-[100%] object-cover object-center rounded-md"
            priority
          />
        </div>

        {/* RIGHT */}
        <div className="h-full w-full md:w-[50%] p-16 items-center justify-center flex flex-col gap-8 bg-white">
          <Image
            src={'/logo-red.svg'}
            width={200}
            height={200}
            alt="Logo Metrocasa"
          />

          <h1 className="text-3xl">{feirao.data?.data.attributes.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: feirao.data?.data.attributes.description || '',
            }}
          />
          <InitialForm
            className="flex-col max-w-[600px]"
            handleContinue={handleContinue}
            variant={'primary'}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InitialScreen;

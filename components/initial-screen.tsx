'use client';

import React from 'react';
import { Button } from './ui/button';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { set } from 'react-hook-form';
import Image from 'next/image';
import { MainForm } from './forms/main';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import { InitialForm } from './forms/initial';

const InitialScreen = () => {
  const route = useRouter();

  const handleContinue = () => {
    Cookies.set('ft', 'false', { expires: 1 });
    route.refresh();
  };

  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full md:w-[50%] bg-blue-300 h-screen">
        {/* <Swiper slidesPerView={1} effect="fade">
          <SwiperSlide className="h-screen">
            <Image
              src={
                'https://cdn-metrocasa.s3.us-east-1.amazonaws.com/Banner_teste_1_bcc96c91b4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAS2LFRFWEOPKYMION%2F20240531%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240531T194606Z&X-Amz-Expires=900&X-Amz-Signature=f645001b0e5709c51f08eebbe699e790b60268aaad8ef83cf5c24e83fe8a8cc0&X-Amz-SignedHeaders=host&x-id=GetObject'
              }
              width={900}
              height={900}
              alt="Banner"
              className="w-full h-full object-cover object-center"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={
                'https://cdn-metrocasa.s3.us-east-1.amazonaws.com/Banner_teste_1_bcc96c91b4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAS2LFRFWEOPKYMION%2F20240531%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240531T194606Z&X-Amz-Expires=900&X-Amz-Signature=f645001b0e5709c51f08eebbe699e790b60268aaad8ef83cf5c24e83fe8a8cc0&X-Amz-SignedHeaders=host&x-id=GetObject'
              }
              width={900}
              height={900}
              alt="Banner"
              className="w-full h-full object-cover object-center"
            />
          </SwiperSlide>
        </Swiper> */}
        <Image
          src={
            'https://cdn-metrocasa.s3.us-east-1.amazonaws.com/Banner_teste_1_bcc96c91b4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAS2LFRFWEOPKYMION%2F20240531%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240531T194606Z&X-Amz-Expires=900&X-Amz-Signature=f645001b0e5709c51f08eebbe699e790b60268aaad8ef83cf5c24e83fe8a8cc0&X-Amz-SignedHeaders=host&x-id=GetObject'
          }
          width={900}
          height={900}
          alt="Banner"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* RIGHT */}
      <div className="w-full md:w-[50%] h-screen p-16 items-center justify-center flex flex-col gap-8">
        <Image
          src={'/logo-red.svg'}
          width={200}
          height={200}
          alt="Logo Metrocasa"
        />

        <h1 className="text-3xl">Inscreva-se no Feirão</h1>
        <InitialForm
          className="flex-col max-w-[600px]"
          handleContinue={handleContinue}
          variant={'primary'}
        />
      </div>
    </div>
  );
};

export default InitialScreen;

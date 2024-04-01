'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import axios from 'axios';
import Image from 'next/image';

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

interface Banner {
  id: number;
  attributes: {
    banner_title: string;
    desktop_image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    mobile_image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

export const Slider = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/banners?populate=*`);
        setBanners(response.data.data);
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    };

    fetchBanners();
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        effect={'fade'}
        speed={1500}
        autoplay={{ delay: 2500 }}
        pagination={{
          clickable: false,
        }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        className="MainSwiper"
        breakpoints={{
          // Quando a largura da tela for menor que 640px, use a imagem mobile
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // Caso contrário, use a imagem desktop
          1024: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <Image
              src={
                // Verifica se é mobile ou desktop e usa a imagem correspondente
                window.innerWidth < 640
                  ? `${BASE_URL}${banner.attributes.mobile_image.data.attributes.url}`
                  : `${BASE_URL}${banner.attributes.desktop_image.data.attributes.url}`
              }
              alt={banner.attributes.banner_title}
              width={1920}
              height={100}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import axios from 'axios';

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
  };
}

const Slider = () => {
  const [banners, setBanners] = useState<Banner[]>([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get(
          'http://localhost:1337/api/banners?populate=*',
        );
        setBanners(response.data.data);
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    };

    fetchBanners();
  }, []);

  return (
    <>
      <Swiper spaceBetween={0} slidesPerView={1}>
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <img
              src={`http://localhost:1337${banner.attributes.desktop_image.data.attributes.url}`}
              alt={banner.attributes.banner_title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;

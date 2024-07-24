"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import axios from "axios";
import Image from "next/image";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import { Loading } from "./loading";
import { useMediaQuery } from "usehooks-ts";
import { useFeiraoPopup } from "@/stores/feirao-store";
import Link from "next/link";

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
  const isTablet = useMediaQuery("(max-width: 768px)");
  const [banners, setBanners] = useState<Banner[]>([]);
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const { isOpen, onClose, onOpen } = useFeiraoPopup();

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/banners?populate=*`);
        setBanners(response.data.data);
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };

    fetchBanners();
  }, [BASE_URL]);

  if (banners.length === 0) return <Loading />;

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 5500 }}
        // effect={"fade"}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
      >
        {banners?.map((banner) => (
          <SwiperSlide key={banner.id}>
            <Link href={""} onClick={onOpen}>
              <Image
                src={
                  // Verifica se é mobile ou desktop e usa a imagem correspondente
                  isTablet
                    ? `${banner?.attributes?.mobile_image?.data.attributes?.url}`
                    : `${banner?.attributes?.desktop_image?.data.attributes?.url}`
                }
                alt={banner.attributes.banner_title}
                width={1920}
                height={100}
                className="w-full"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

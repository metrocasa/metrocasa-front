"use client";

import { testmonialVideos } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useMediaQuery } from "react-responsive";

import YouTube from "react-youtube";

export const Testmonials = () => {
  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  // const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  // const opts = {
  //   height: isTabletOrMobile ? (isMobile ? "190" : "230") : "300",
  //   width: isTabletOrMobile ? (isMobile ? "360" : "230") : "545",
  //   playerVars: {
  //     autoplay: 0,
  //   },
  // };

  return (
    <section className="w-full py-24">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col items-center gap-10">
        <h1 className="text-4xl font-bold text-main-red">
          Nunca Pare de Sonhar
        </h1>
        <p className="mb-2 text-center max-w-[70%]">
          Descubra histórias inspiradoras de conquistas! Confira abaixo
          depoimentos reais de quem transformou o sonho do apartamento próprio
          em realidade. Sua história pode ser a próxima!
        </p>

        <div className="flex gap-5 w-full flex-wrap items-center justify-center">
          <Link href={"https://www.youtube.com/watch?v=VlPAdTHAXp4"}>
            <Image
              src={"/thumbs/01.jpg"}
              alt="Metrocasa"
              width={500}
              height={500}
            />
          </Link>

          <Link
            href={
              "https://www.youtube.com/watch?v=yYMpUcbRNV0&ab_channel=ConstrutoraMetrocasa"
            }
          >
            <Image
              src={"/thumbs/02.jpg"}
              alt="Metrocasa"
              width={500}
              height={500}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

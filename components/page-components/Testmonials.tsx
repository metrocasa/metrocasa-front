import { testmonialVideos } from '@/constants';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import YouTube from 'react-youtube';

export const Testmonials = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 440px)' });

  const opts = {
    height: isTabletOrMobile ? (isMobile ? '210' : '250') : '320',
    width: isTabletOrMobile ? (isMobile ? '380' : '250') : '565',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <section className="w-full py-24">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col items-center gap-10">
        <h1 className="text-4xl font-bold text-main-red">Depoimentos</h1>

        <div className="flex gap-5 w-full flex-wrap items-center justify-center">
          {testmonialVideos.map((video) => (
            <YouTube videoId={video.id} opts={opts} />
          ))}
        </div>
      </div>
    </section>
  );
};

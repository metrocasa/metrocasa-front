import { testmonialVideos } from '@/constants';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import YouTube from 'react-youtube';

export const TestmonialsComp = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

  const opts = {
    height: isTabletOrMobile ? (isMobile ? '190' : '230') : '300',
    width: isTabletOrMobile ? (isMobile ? '360' : '230') : '545',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <section className="w-full py-24">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col items-center gap-10">
        <h1 className="text-4xl font-bold text-main-red">Depoimentos</h1>

        <div className="flex gap-5 w-full flex-wrap items-center justify-center">
          {testmonialVideos.map((video, i) => (
            <YouTube key={i} videoId={video.id} opts={opts} />
          ))}
        </div>
      </div>
    </section>
  );
};

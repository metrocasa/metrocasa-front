import React from 'react';

import { Imovel } from '@/contexts/imoveis-context';

import Image from 'next/image';

import { SwiperSlide, Swiper, useSwiper } from 'swiper/react';
import { Pagination, Autoplay, EffectFade, Navigation } from 'swiper/modules';

import { useMediaQuery } from 'react-responsive';

// LIGHTBOX
import Lightbox, {
  FullscreenRef,
  SlideshowRef,
  ThumbnailsRef,
  ZoomRef,
} from 'yet-another-react-lightbox';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/styles.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

export const MainGallery = ({ imovel }: { imovel: Imovel }) => {
  const swiper = useSwiper();

  const slideshowRef = React.useRef<SlideshowRef>(null);
  const zoomRef = React.useRef<ZoomRef>(null);
  const fullscreenRef = React.useRef<FullscreenRef>(null);
  const thumbnailsRef = React.useRef<ThumbnailsRef>(null);

  const [openLightBox, setOpenLightBox] = React.useState(false);
  const allImages = imovel.attributes.main_gallery.data.map(
    (img) => img.attributes.url,
  );
  const allImagesMapped = allImages.map((url) => ({
    src: `${url}`,
  }));

  const isMobile = useMediaQuery({ query: '(max-width: 424px)' });

  return (
    <section className="w-full px-[15px] md:px-0">
      <div className="w-full">
        <Swiper
          spaceBetween={isMobile ? 15 : 0}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          effect={isMobile ? 'fade' : ''}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            800: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay, Pagination, EffectFade, Navigation]}
        >
          {/* TODO: CHANGE ARROWS */}
          <ArrowLeftIcon className="swiper-button-prev text-white z-10" />
          <ArrowRightIcon className="swiper-button-next text-white z-10" />

          {imovel.attributes.main_gallery.data.map((image, i) => (
            <SwiperSlide key={i} className="w-[600px] h-[700px]">
              <div className="w-[600px] h-[500px]">
                <Image
                  onClick={() => setOpenLightBox(true)}
                  src={`${image.attributes.url}`}
                  alt="image"
                  width={700}
                  height={700}
                  className="w-full h-full object-cover cursor-pointer rounded"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Lightbox
          plugins={[Slideshow, Thumbnails, Fullscreen, Zoom]}
          open={openLightBox}
          close={() => setOpenLightBox(false)}
          slides={allImagesMapped}
          fullscreen={{ ref: fullscreenRef }}
          zoom={{ ref: zoomRef }}
          slideshow={{ ref: slideshowRef }}
          thumbnails={{ ref: thumbnailsRef }}
          on={{
            click: () => {
              (thumbnailsRef.current?.visible
                ? thumbnailsRef.current?.hide
                : thumbnailsRef.current?.show)?.();
            },
          }}
        />
      </div>
    </section>
  );
};

import React from 'react';

import Image from 'next/image';

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
import { Title } from '@/components/title';
import { Imovel } from '@/types/global';

export const Plantas = ({ imovel }: { imovel: Imovel }) => {
  const plantas = imovel.attributes.planta_comp;

  const slideshowRef = React.useRef<SlideshowRef>(null);
  const zoomRef = React.useRef<ZoomRef>(null);
  const fullscreenRef = React.useRef<FullscreenRef>(null);
  const thumbnailsRef = React.useRef<ThumbnailsRef>(null);

  const allImages = imovel.attributes.planta_comp.map((planta) => [
    planta.planta_image?.data.attributes.url,
    planta.planta_image?.data.attributes.height,
    planta.planta_image?.data.attributes.url,
    planta.planta_title,
  ]);

  const allImagesMapped = allImages.map((url) => ({
    src: `${url[0]}`,
    alt: 'Planta',
    height: Number(url[1]),
    width: Number(url[2]),
    thumbnailCaption: url[3],
  }));

  const slides = allImagesMapped.map(({ src, width, height }) => ({
    src: src,
    width,
    height,
  }));

  const handleClick = (index: number) => setIndex(index);
  const [index, setIndex] = React.useState(-1);

  // Função para formatar a primeira letra de cada palavra em maiúsculo
  function capitalizeWords(str: string) {
    return str.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
  }

  return (
    <section className="w-full px-[15px] md:px-0 py-24">
      <div className="w-full">
        <Title subtitle="Veja mais" title="Plantas" />

        <div className="w-full max-w-[1216px] mx-auto">
          <div className="flex flex-wrap gap-4">
            {plantas.map((planta, i) => (
              <div key={planta.id} className="p-4 flex flex-col gap-4">
                <h3 className="text-2xl font-bold text-main-red">
                  {capitalizeWords(
                    planta.planta_title
                      .replaceAll('plus', '+')
                      .replace(/_/g, ' '),
                  )}
                </h3>

                {/* TODO: Remove this "/#" see a better way to do this */}
                <Image
                  src={`${planta.planta_image?.data.attributes.url || '/#'}`}
                  width={550}
                  height={550}
                  alt="Imagem da Planta"
                  className="border-2 border-slate-300 rounded-lg p-4 cursor-pointer"
                  onClick={() => handleClick(i)}
                />
              </div>
            ))}
          </div>

          <Lightbox
            plugins={[Slideshow, Thumbnails, Fullscreen, Zoom]}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            slides={slides}
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
      </div>
    </section>
  );
};

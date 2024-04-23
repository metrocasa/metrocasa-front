import { ReactElement } from 'react';
import { SlotContent } from '@croct/plug-react';
import { fetchContent } from '@/lib/utils/fetchContent';

const SLOT_ID = 'banner-p@1';

function loadHomeBanner(): Promise<SlotContent<typeof SLOT_ID>> {
  return fetchContent(SLOT_ID, {
    fallback: {
      title: 'Experience up to 20% more revenue faster',
      subtitle:
        'Deliver tailored experiences that drive satisfaction and growth.',
      cta: {
        label: 'Discover how',
        link: 'https://croct.link/demo',
      },
    },
  });
}

export function preloadHomeBanner(): void {
  void loadHomeBanner();
}

export default async function HomeBanner(): Promise<ReactElement> {
  const { title, subtitle, cta } = await loadHomeBanner();

  return (
    <div className="text-3xl w-full max-w-[1216px] mx-auto bg-slate-600 text-white p-4 rounded-lg flex flex-col gap-4">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <a href={cta.link}>{cta.label}</a>
    </div>
  );
}

import { Title } from '@/components/title';
import { Imovel } from '@/types/global';

export const MapsSection = ({ imovel }: { imovel: Imovel }) => {
  const { address_json } = imovel.attributes;
  return (
    <section className="w-full pb-24 md:px-0">
      <iframe
        src={address_json?.src}
        width={address_json?.width}
        height={address_json?.height}
        className={address_json?.className}
        style={{ border: 0 }}
        loading={address_json?.loading}
      />
      <div className="w-full max-w-[1216px] mx-auto mb-20 px-[15px] md:px-0 pt-6">
        <Title subtitle="Lorem Ipsum" title="Conheça a região" />

        <div
          dangerouslySetInnerHTML={{
            __html: imovel.attributes.about_the_region,
          }}
        />
      </div>
    </section>
  );
};

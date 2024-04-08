import { Imovel } from '@/contexts/imoveis-context';

import { Title } from '@/components/title';

export const MapsSection = ({ imovel }: { imovel: Imovel }) => {
  console.log(imovel);
  return (
    <section className="w-full py-24">
      <div className="w-full max-w-[1216px] mx-auto mb-20">
        <Title subtitle="Lorem Ipsum" title="Conheça a região" />
        <div
          dangerouslySetInnerHTML={{
            __html: imovel.attributes.about_the_region,
          }}
        />
      </div>
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.852220364203!2d-46.64145672381204!3d-23.53781702881607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce585a56c9c369%3A0x400178f0fa497a6e!2sSanta%20Ifig%C3%AAnia%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1712611516622!5m2!1spt-BR!2sbr`}
        width="600"
        height="450"
        className="w-full h-[600px]"
        style={{ border: 0 }}
        loading="lazy"
      />
    </section>
  );
};

import { MainForm } from '@/components/forms/main-form';
import { Footer } from '@/components/globals/Footer';
import { Header } from '@/components/globals/Header';
import { HeroSection } from '@/components/page-components/hero-section';
import { contatoInfo } from '@/constants';

export default function ContatoPage() {
  return (
    <>
      <Header />
      <HeroSection title={'Entre Contato'} />
      <div className="w-full max-w-[1216px] px-[15px] md:mx-auto py-24 flex flex-col md:flex-row justify-between md:items-center gap-14">
        {/* LEFT */}
        <div className="flex flex-col gap-6 md:max-w-[50%]">
          <h2 className="text-3xl text-main-red font-bold mb-8">
            Entre em contato
          </h2>
          {contatoInfo.map((info, i) => (
            <div key={i}>
              <h4 className="font-medium text-lg text-gray-500">
                {info.title}
              </h4>
              <h3 className="font-bold text-2xl text-main-red">{info.value}</h3>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <MainForm className="flex-col md:w-[500px]" variant={'primary'} />
      </div>

      {/* MAPS */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.6410273963734!2d-46.648265312944154!3d-23.545410224175995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5924c025dd7d%3A0x60437dc5d94b4f98!2sConstrutora%20Metrocasa!5e0!3m2!1spt-BR!2sbr!4v1713188040889!5m2!1spt-BR!2sbr"
        width="100%"
        height="750"
        style={{ border: 0 }}
        loading={'lazy'}
      />
      <Footer />
    </>
  );
}

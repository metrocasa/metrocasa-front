import { menusFooter } from '@/constants';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// TODO: Change Icons
const socials = [
  {
    social: 'Facebook',
    link: 'https://www.facebook.com/construtorametrocasa',
    icon: <FacebookIcon />,
  },
  {
    social: 'Instagram',
    link: 'https://www.instagram.com/construtorametrocasa/',
    icon: <InstagramIcon />,
  },
  {
    social: 'LinkedIn',
    link: 'https://www.linkedin.com/company/metrocasa/',
    icon: <LinkedinIcon />,
  },
  {
    social: 'Youtube',
    link: 'https://www.youtube.com/@ConstrutoraMetrocasa',
    icon: <YoutubeIcon />,
  },
  // {
  //   social: 'Pinterest',
  //   link: 'https://br.pinterest.com/construtorametrocasa/',
  //   icon: <FacebookIcon />,
  // },
];

export const Footer = () => {
  return (
    <>
      <div className="w-full py-24 px-[15px]">
        <div className="w-full max-w-[1216px] mx-auto flex flex-col md:flex-row gap-24 justify-between">
          {/* IMAGES */}
          <div className="flex flex-col gap-5 items-center">
            <Image
              src="/logo-voce-perto.webp"
              alt="Construtora Metrocasa"
              width={320}
              height={320}
              className="w-[240px] md:w-auto"
            />
            <Image
              src="/selo-indicada.webp"
              alt="Construtora Metrocasa"
              width={200}
              height={200}
              className="h-auto w-auto"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-14 w-full">
            {/* MENU: EMPRESA */}
            <div className="flex items-center md:items-start flex-col gap-2 w-full">
              <h2 className="text-2xl font-bold text-main-red mb-4">Suporte</h2>

              {menusFooter.empresa.map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  className="hover:text-main-red transition py-2 font-medium"
                >
                  {item.menu}
                </Link>
              ))}
            </div>

            {/* MENU: SUPORTE */}
            <div className="flex items-center md:items-start flex-col gap-2 w-full">
              <h2 className="text-2xl font-bold text-main-red mb-4">Suporte</h2>
              {menusFooter.suporte.map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  className="hover:text-main-red transition py-2 font-medium"
                >
                  {item.menu}
                </Link>
              ))}
            </div>

            {/* SIGA-NOS */}
            <div className="flex items-center md:items-start flex-col gap-4 w-full  md:min-w-[400px]">
              <h2 className="text-2xl font-bold text-main-red mb-4">
                Siga-nos
              </h2>
              <div className="flex gap-5">
                {socials.map((rede) => (
                  <Link
                    key={rede.social}
                    href={rede.link}
                    className="hover:text-main-red transition p-2"
                  >
                    {rede.icon}
                  </Link>
                ))}
              </div>

              {/* CAC */}
              <div className="flex flex-col md:flex-row items-center gap-4 w-full rounded-md text-white bg-main-red p-5">
                <Image
                  src={'/icons/whatsapp-i.svg'}
                  alt="WhatsApp Icone"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col md:flex-col items-center md:items-start">
                  <h3 className="text-2xl font-bold">CAC</h3>
                  <p>Central de Atendimento ao Cliente</p>
                  <h3 className="text-2xl font-bold">(11) 5061-0022</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* COPYRIGHT */}
      <footer className="w-full bg-secondary-red px-[15px]">
        <div className="flex flex-col-reverse md:flex-row text-center md:text-start gap-8 justify-between items-center max-w-[1216px] mx-auto py-14">
          <p className="text-white">
            Copyright © 2023 Construtora Metrocasa | Todos os Direitos
            Reservados
          </p>
          <div className="flex gap-5">
            {socials.map((rede) => (
              <Link
                key={rede.social}
                href={rede.link}
                className="text-white hover:text-slate-400 transition p-2"
              >
                {rede.icon}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export const WhatsAppIcon = () => {
  const path = usePathname();

  return (
    <>
      {!path.startsWith('/dashboard') && (
        <Link
          href="https://api.whatsapp.com/send?phone=551132142300&text=Ol%C3%A1%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20empreendimentos!"
          className="fixed right-7 bottom-7 z-40 animate-in"
        >
          <Image
            src={'/icons/whatsapp-color.svg'}
            alt="WhatsApp Metrocasa"
            width={60}
            height={60}
            className="drop-shadow-2xl drop-shadow-main-red"
          />
        </Link>
      )}
    </>
  );
};

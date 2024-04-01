import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { MenuIcon } from 'lucide-react';
import { links } from '@/constants';

export const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent className="p-0">
        <nav className="flex flex-col justify-between w-full p-14">
          <Link href={'/'}>
            <Image
              src={'logo-red.svg'}
              alt="Logo metrocasa"
              width={220}
              height={100}
              priority
            />
          </Link>
          <ul className="flex flex-col gap-8 py-7">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="text-primary-dark hover:text-main-red transition py-7 font-bold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

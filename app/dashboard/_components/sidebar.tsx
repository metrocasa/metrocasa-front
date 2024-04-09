'use client';

import { UserButton } from '@clerk/nextjs';
import { BoxIcon, Building2Icon, StarIcon, Users2Icon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const linksSidebar = [
  {
    label: 'Materiais',
    href: '/dashboard/materiais',
    icon: <BoxIcon className="w-5 h-5 text-white" />,
  },
  {
    label: 'Evolução de Obras',
    href: '/dashboard/evolucao-de-obras',
    icon: <Building2Icon />,
  },
  { label: 'Link 3', href: '/dashboard/', icon: <StarIcon /> },
  { label: 'Link 4', href: '/dashboard/', icon: <Users2Icon /> },
  { label: 'Link 5', href: '/dashboard/', icon: <StarIcon /> },
];

export const Sidebar = () => {
  const path = usePathname();
  return (
    <div className="hidden lg:block h-screen w-full max-w-[350px] fixed left-0 border-r-2 border-main-red/20 bg-[#210B0C]">
      <div className="h-full flex flex-col justify-between p-14">
        {/* TOPO */}
        <div className="flex flex-col gap-4">
          <Link href={'/dashboard'}>
            <Image
              src={'/logo-red-white.svg'}
              alt="Logo metrocasa"
              width={215}
              height={100}
              priority
              className="w-[200px] md:w-[220px] mb-14"
            />
          </Link>

          <ul className="flex flex-col text-white font-bold gap-4">
            {linksSidebar.map((link) => (
              <Link
                href={link.href}
                className={`w-full flex gap-5 items-center cursor-pointer p-4 rounded-lg hover:bg-black/40 transition ${
                  path === link.href ? 'bg-black/40' : ''
                }`}
              >
                {link.icon}
                <li className="">{link.label}</li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="self-start">
          <UserButton />
        </div>
      </div>
    </div>
  );
};

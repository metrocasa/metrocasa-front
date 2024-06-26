'use client';

import { Button } from '@/components/ui/button';
import {
  BoxIcon,
  Building2Icon,
  ListStartIcon,
  LogOutIcon,
  Paperclip,
  StarIcon,
  User2Icon,
  Users2Icon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect, usePathname, useRouter } from 'next/navigation';
import Cookie from 'js-cookie';
import { useUser } from '@/contexts/user-context';

export const linksSidebar = [
  {
    label: 'Inicio',
    href: '/dashboard',
    icon: <ListStartIcon className="w-5 h-5 text-white" />,
    role: ['Super', 'Marketing', 'Corretor', 'RH', 'CAC', 'Superintendente'],
  },
  {
    label: 'Materiais',
    href: '/dashboard/materiais',
    icon: <BoxIcon className="w-5 h-5 text-white" />,
    role: ['Super', 'Marketing', 'Corretor', 'Superintendente'],
  },
  {
    label: 'Evolução de Obras',
    href: '/dashboard/evolucao-de-obras',
    icon: <Building2Icon />,
    role: ['Super', 'Marketing', 'Corretor', 'Superintendente'],
  },
];

export const Sidebar = () => {
  const path = usePathname();
  const { user } = useUser();
  const router = useRouter();

  const handleLogout = () => {
    Cookie.remove('session');

    router.push('/sign-in');
  };

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
            {linksSidebar.map((link, i) => {
              const cargoIndex = link.role.findIndex((role) =>
                user?.cargos.includes(role),
              );
              if (cargoIndex !== -1) {
                return (
                  <Link
                    key={i}
                    href={link.href}
                    className={`w-full flex gap-5 items-center cursor-pointer p-4 rounded-lg hover:bg-black/40 transition ${
                      path === link.href ? 'bg-black/40' : ''
                    }`}
                  >
                    {link.icon}
                    <li className="">{link.label}</li>
                  </Link>
                );
              } else {
                return null; // Não corresponde a nenhum cargo do usuário
              }
            })}
          </ul>
        </div>

        <div className="self-start flex gap-4">
          <Button
            className="flex gap-4"
            variant={'primary'}
            size={'lg'}
            onClick={handleLogout}
          >
            LOGOUT
            <LogOutIcon />
          </Button>

          <Link href={'/dashboard/profile'}>
            <Button className="flex gap-4" variant={'primary'} size={'lg'}>
              <User2Icon />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

import { UserButton, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import { Sidebar, linksSidebar } from './sidebar';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const path = usePathname();
  const user = useUser();

  return (
    <header className="lg:hidden flex w-full  h-[85px] lg:px-24 px-10 border-b-2 border-main-red/20 bg-main-red/10">
      <div className="flex justify-between items-center h-full text-white w-full">
        <Link href={'/dashboard'}>
          <Image
            src={'/logo-red-white.svg'}
            alt="Logo metrocasa"
            width={215}
            height={100}
            priority
            className="w-[150px] md:w-[220px]"
          />
        </Link>

        {/* MENU MOBILE */}
        <Sheet>
          <SheetTrigger>
            <MenuIcon className="w-7 h-7" />
          </SheetTrigger>
          <SheetContent className="bg-[#210B0C] border-main-red/20 text-white pt-14">
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
              {linksSidebar.map(
                (link, i) =>
                  link.role.includes(
                    user.user?.publicMetadata.role as string,
                  ) && (
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
                  ),
              )}
              <li className="p-4">
                <UserButton />
              </li>
            </ul>

            <div className="w-full flex items-center justify-center py-14"></div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

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
import { LogOutIcon, MenuIcon, User2Icon } from 'lucide-react';
import { Sidebar, linksSidebar } from './sidebar';
import { usePathname, useRouter } from 'next/navigation';
import { useUser } from '@/contexts/user-context';

import Cookie from 'js-cookie';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const path = usePathname();
  const router = useRouter();

  const session = Cookie.get('session');

  const handleLogout = () => {
    Cookie.remove('session');

    router.push('/sign-in');
  };

  return (
    <>
      {session && (
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
                  {linksSidebar.map((link, i) => (
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
                  ))}
                </ul>

                <div className="self-start flex gap-4 mt-24">
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
                    <Button
                      className="flex gap-4"
                      variant={'primary'}
                      size={'lg'}
                    >
                      <User2Icon />
                    </Button>
                  </Link>
                </div>

                <div className="w-full flex items-center justify-center py-14"></div>
              </SheetContent>
            </Sheet>
          </div>
        </header>
      )}
    </>
  );
};

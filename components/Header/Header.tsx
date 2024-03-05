import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Header = () => {
  const router = useRouter;
  console.log(router);
  return (
    <div className="bg-slate-50 py-5">
      <nav className="flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-16">
        <Link href={'/'}>
          <Image
            src={'logo-red.svg'}
            alt="Logo metrocasa"
            width={215}
            height={100}
            priority
          />
        </Link>
        <ul className="p-5 flex gap-7 font-bold">
          <li>
            <Link
              href={'/'}
              className="text-primary-dark hover:text-red-400 p-5 py-7 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={'/empreendimentos'}
              className="text-primary-dark hover:text-red-400 py-7 transition"
            >
              Empreendimentos
            </Link>
          </li>
          <li>
            <Link
              href={'/blog'}
              className="text-primary-dark hover:text-red-400 py-7 transition"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href={'/contato'}
              className="text-primary-dark hover:text-red-400 py-7 transition"
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

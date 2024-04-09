import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
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
            className="w-[200px] md:w-[220px]"
          />
        </Link>
        <UserButton afterSignOutUrl="/dashboard" />
      </div>
    </header>
  );
};

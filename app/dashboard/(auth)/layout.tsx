import Image from "next/image";
import Link from "next/link";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black bg-red-bg bg-no-repeat bg-cover">
      <div className="flex flex-col items-center gap-5 mb-14">
        <Link href={"/dashboard"}>
          <Image
            src={"/logo-red-white.svg"}
            alt="Logo metrocasa"
            width={215}
            height={100}
            priority
            className="w-[200px] md:w-[220px]"
          />
        </Link>
        <h1 className="text-2xl text-white">Acesse</h1>
      </div>
      {children}
    </main>
  );
};

export default DashboardLayout;

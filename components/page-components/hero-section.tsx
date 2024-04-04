'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { usePathname } from 'next/navigation';

export const HeroSection = ({ title }: { title: string }) => {
  const path = usePathname();

  return (
    <div className="bg-main-red h-[350px] mt-[100px] flex flex-col gap-8 justify-center items-center bg-red-hero-bg bg-cover bg-no-repeat">
      <h1 className="text-slate-50 font-bold text-3xl">{title}</h1>
    </div>
  );
};

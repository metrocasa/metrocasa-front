'use client';

import React, { Suspense } from 'react';
import { Sidebar } from './_components/sidebar';

import { usePathname } from 'next/navigation';
import Materiais from './materiais/page';
import EvolucaoDeObras from './evolucao-de-obras/page';
import MainContent from './main-content/page';
import Blog from './blog/page';

const DashboardPage = () => {
  const path = usePathname();
  console.log(path);

  return (
    <main className="flex w-full ">
      {path === '/dashboard' && <MainContent />}
      {path === '/dashboard/materiais' && <Materiais />}
      {path === '/dashboard/evolucao-de-obras' && <EvolucaoDeObras />}
      {path === '/dashboard/blog' && <Blog />}
    </main>
  );
};

export default DashboardPage;

'use client';

import React from 'react';
import { Sidebar } from './_components/sidebar';

import { MainContent } from './_components/main-content';

import { usePathname } from 'next/navigation';
import Materiais from './materiais/page';
import EvolucaoDeObras from './evolucao-de-obras/page';

const DashboardPage = () => {
  const path = usePathname();
  return (
    <main className="flex w-full ">
      {path === '/dashboard' && <MainContent />}
      {path === '/dashboard/materiais' && <Materiais />}
      {path === '/evolucao-de-obras' && <EvolucaoDeObras />}
    </main>
  );
};

export default DashboardPage;

'use client';

import { ptBR } from '@clerk/localizations';

import { Header } from './_components/header';
import { Sidebar } from './_components/sidebar';

import { usePathname } from 'next/navigation';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  return (
    <main className="bg-tertiary-black">
      {path === '/dashboard' ||
      path === '/dashboard/materiais' ||
      path === '/dashboard/evolucao-de-obras' ||
      path === '/dashboard/linkX' ? (
        <Sidebar />
      ) : null}

      <Header />
      {children}
    </main>
  );
};

export default DashboardLayout;

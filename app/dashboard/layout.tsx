'use client';

import { ClerkProvider } from '@clerk/nextjs';

import { ptBR } from '@clerk/localizations';

import { Header } from './_components/header';
import { Sidebar } from './_components/sidebar';

import { usePathname } from 'next/navigation';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  return (
    <ClerkProvider
      localization={ptBR}
      appearance={{
        elements: {
          footer: 'hidden',
        },
      }}
    >
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
    </ClerkProvider>
  );
};

export default DashboardLayout;

'use client';

import { ptBR } from '@clerk/localizations';

import { Header } from './_components/header';
import { Sidebar } from './_components/sidebar';

import { usePathname } from 'next/navigation';
import { UserProvider } from '@/contexts/user-context';
import { BlogProvider } from '@/contexts/blog-context';
import { MateriaisProvider } from '@/contexts/materiais-context';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();

  return (
    <UserProvider>
      <BlogProvider>
        <MateriaisProvider>
          <Header />
          <div className="bg-tertiary-black">
            {path === '/dashboard' ||
            path === '/dashboard/materiais' ||
            path === '/dashboard/evolucao-de-obras' ||
            path === '/dashboard/blog' ||
            path === '/dashboard/profile' ||
            path === '/dashboard/linkX' ? (
              <Sidebar />
            ) : null}
            {children}
          </div>
        </MateriaisProvider>
      </BlogProvider>
    </UserProvider>
  );
};

export default DashboardLayout;

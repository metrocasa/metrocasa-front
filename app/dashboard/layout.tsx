import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Header } from './_components/header';
import { Sidebar } from './_components/sidebar';
import { MainContent } from './_components/main-content';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-tertiary-black">
      <Sidebar />
      <Header />
      {children}
    </main>
  );
};

export default DashboardLayout;

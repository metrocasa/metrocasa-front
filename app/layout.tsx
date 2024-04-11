import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { ImoveisProvider } from '@/contexts/imoveis-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Construtora Metrocasa',
  description: 'Apartamentos em todas as regiões de São Paulo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className + 'px-[15px]'}>
        <ImoveisProvider>
          <div>{children}</div>
        </ImoveisProvider>
      </body>
    </html>
  );
}

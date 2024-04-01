import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { ImoveisProvider } from '@/contexts/imoveis-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Metrocasa',
  description: 'Apartamentos em todas as regiões de São Paulo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ImoveisProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <div>{children}</div>
        </body>
      </html>
    </ImoveisProvider>
  );
}

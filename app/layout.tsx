import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import { MetaProvider } from "@/contexts/meta-context";
import Image from "next/image";
import Link from "next/link";

import { CSPostHogProvider } from "./PosthogProvider";
import PostHogPageView from "./PostHogPageView";
import { Suspense } from "react";

// React Query
import Providers from "@/utils/Providers";
import BackToTopButton from "@/components/to-top";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Construtora Metrocasa",
  description: "Apartamentos em todas as regiões de São Paulo",
  icons: {
    icon: "/metrocasa-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <CSPostHogProvider>
        <body className={inter.className + "px-[15px]"}>
          <MetaProvider>
            <Suspense>
              <div>
                <Providers>{children}</Providers>
              </div>

              {/* Back to top button*/}
              <BackToTopButton />

              {/* Whatsapp Icon */}
              <WhatsAppIcon />
            </Suspense>
          </MetaProvider>
        </body>
      </CSPostHogProvider>
    </html>
  );
}

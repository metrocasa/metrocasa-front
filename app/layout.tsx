import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import { GoogleTagManager } from "@next/third-parties/google";

import { MetaProvider } from "@/contexts/meta-context";
import { CSPostHogProvider } from "./PosthogProvider";
import { Suspense } from "react";
import Script from "next/script";

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

const GTM_ID = "GTM-NV8SM9Z";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <GoogleTagManager gtmId={GTM_ID} />

      <CSPostHogProvider>
        <body className={`${inter.className}`}>
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

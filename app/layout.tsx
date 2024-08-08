import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

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
      <CSPostHogProvider>
        <body className={`${inter.className} px-[15px]`}>
          {/* Google Tag Manager Script */}
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];
                  w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
          />

          {/* Google Tag Manager (noscript) */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
                <iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>
              `,
            }}
          />

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

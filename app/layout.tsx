import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./mobile-overrides.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metaPixelScript = `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '364252861208280');
fbq('track', 'PageView');
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://digital-beauty-dsn.brunopollnow.chatgpt.site"),
  title: "Digital Beauty",
  description: "Gestão de anúncios e mentoria para clínicas de saúde e estética.",
  openGraph: {
    title: "Digital Beauty",
    description: "Estrutura e previsibilidade para clínicas de saúde e estética.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Digital Beauty" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Beauty",
    description: "Estrutura e previsibilidade para clínicas de saúde e estética.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script dangerouslySetInnerHTML={{ __html: metaPixelScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <img
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=364252861208280&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}

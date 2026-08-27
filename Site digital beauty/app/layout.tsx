import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

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
  title: "IPAM",
  description: "IPAM - Instituto de Previdência Municipal de São Luis",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "IPAM",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  authors: [
    {
      name: "Daniel Santos",
      url: "https://portifolio-daniel-three.vercel.app/",
    },
  ],
  category: "Government",
  keywords: ["IPAM", "Instituto de Previdência Municipal de São Luis", "Previdência", "São Luis"],

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

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Logo from "../app/assets/logo.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Otaku AI",
  description: "Otaku AI is a platform for Anime Communities",
  icons: {
    icon: Logo,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import "@/app/locales/i18n"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/shared/Footer";
import Menu from "./components/shared/menu/Menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pricing - Property Care App",
  description: "Property Care App",
  icons: {
    icon: "favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}

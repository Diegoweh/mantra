import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LiquidEther from "@/components/LiquidEther";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mantra - Modern Web Experience",
  description: "A beautiful Next.js application with stunning animations",
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}
      >
        {/* Background global animado */}
        <div className="fixed inset-0 z-0">
          <LiquidEther
            colors={['#ceaa96', '#b7866f', '#8b5641']}
            mouseForce={20}
            cursorSize={100}
            autoDemo={true}
          />
        </div>

        {/* Navbar moderno */}
        <Navbar items={navItems} />

        {/* Contenido principal */}
        <main className="relative z-10 pt-24 min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

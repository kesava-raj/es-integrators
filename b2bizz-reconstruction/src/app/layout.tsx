import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { PageTransition } from "@/components/layout/PageTransition";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emerald System Integrators (ESI) | Engineering Digital Transformation",
  description:
    "Emerald System Integrators partners with businesses to simplify technological complexity, strengthen operations, and engineer digital transformation through technology, specialist resourcing, and consulting.",
  icons: {
    icon: "/icons/logo-b2bizz.png",
    apple: "/icons/logo-b2bizz.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${inter.variable} dark`}>
      <body className="bg-canvas text-text-secondary font-body antialiased selection:bg-brand-volt selection:text-canvas min-h-screen flex flex-col">
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

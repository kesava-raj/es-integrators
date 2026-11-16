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
  title: "B2bizz - B2B Consulting Agency for Digital Growth",
  description:
    "Empower your B2B business with result-driven consulting. From strategy to execution, we deliver measurable growth through expert digital and operational solutions.",
  icons: {
    icon: "/icons/favicon.png",
    apple: "/icons/apple-touch-icon.png",
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

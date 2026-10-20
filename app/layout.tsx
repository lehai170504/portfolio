import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const displayFont = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const sansFont = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lê Hoàng Hải | Full-Stack & Java Backend Engineer",
  description: "Portfolio of Lê Hoàng Hải - Full-Stack / Java Backend Engineer specializing in Java Spring Boot, Next.js, PostgreSQL, Redis, and high-performance web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`dark ${displayFont.variable} ${sansFont.variable} ${monoFont.variable}`}>
      <body className="bg-[#07080c] font-sans text-neutral-100 antialiased selection:bg-blue-600 selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}

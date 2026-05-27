import type { Metadata } from "next";
import { Abril_Fatface, Shippori_Mincho_B1, Space_Mono } from "next/font/google";
import { LanguageProvider } from "@/i18n/LanguageContext";
import "./globals.css";

const abrilFatface = Abril_Fatface({
  variable: "--font-abril",
  subsets: ["latin"],
  weight: ["400"],
});

const shippori = Shippori_Mincho_B1({
  variable: "--font-shippori",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Samantha Toccalino — Frontend Developer",
  description:
    "Frontend Developer specialized in React, TypeScript, and Next.js. Based in Buenos Aires.",
  openGraph: {
    title: "Samantha Toccalino — Frontend Developer",
    description:
      "Frontend Developer specialized in React, TypeScript, and Next.js. Based in Buenos Aires.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${abrilFatface.variable} ${shippori.variable} ${spaceMono.variable}`}
    >
      <body><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  );
}

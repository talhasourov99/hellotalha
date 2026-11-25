import type { Metadata } from "next";
import { Manrope, DM_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohammad Abu Talha — Curiosity into capability",
  description:
    "Portfolio of Mohammad Abu Talha: computer science, AI research, software projects, innovation and leadership experiences.",
  openGraph: {
    title: "Mohammad Abu Talha — Curiosity into capability",
    description: "Computer science, AI research, software projects and innovation.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${dmMono.variable}`}>
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}

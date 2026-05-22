import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: "Eric Garcia — Resume",
  description: "Staff ML Engineer, PhD",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerifDisplay.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

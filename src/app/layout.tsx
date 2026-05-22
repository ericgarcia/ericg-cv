import type { Metadata } from "next";
import { Inter, DM_Serif_Display, Raleway } from "next/font/google";
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

const raleway = Raleway({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-raleway",
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
    <html lang="en" className={`${inter.variable} ${dmSerifDisplay.variable} ${raleway.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

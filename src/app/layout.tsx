import type { Metadata } from "next";
import { Birthstone, Open_Sans, Lora } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

// Birthstone
const birthStone = Birthstone({
  variable: "--font-birthstone",
  subsets: ["latin"],
  weight: "400",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "May Blossom Spa",
  description: "may blossom spa, massage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${birthStone.variable} ${lora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Advent_Pro } from "next/font/google";
import "./globals.css";

const advnt = Advent_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "gurjit dhaliwal",
  description: "an ai adaptive portfolio powered by gemini",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={advnt.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { fjalla } from "./fonts";
import { Navbar } from "./nav";
import Footer from "./footer";

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
      <Navbar />
      <body className={fjalla.className}>{children}</body>
      <Footer />
    </html>
  );
}

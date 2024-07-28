import type { Metadata } from "next";
import "./globals.css";
import { fjalla } from "./utilities/fonts";
import { Navbar } from "./components/nav";
import Footer from "./components/footer";
import AmongUsParticles from "@/public/Particles";

export const metadata: Metadata = {
  title: "Gurjit Dhaliwal",
  description: "an ai adaptive portfolio powered by gemini",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="w-full h-full m-0 p-0 overflow-x-hidden md:mb-20"
    >
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <AmongUsParticles />
      <body className={fjalla.className}>
        <div className="flex min-h-screen items-center justify-center text-wrap">
          <div className="fixed inset-0 z-0"></div>
          <header className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
            <Navbar />
          </header>
          <div className="z-10 flex-grow flex flex-col justify-center items-center">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

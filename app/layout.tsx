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
      <html lang="en">
        <body className={fjalla.className}>
          <div className="flex min-h-screen items-center justify-center text-wrap">
            <div className="fixed inset-0 z-0">
              <AmongUsParticles />
            </div>
            <div className="z-10 flex flex-col justify-center items-center mt-8">
              <Navbar />
              {children}
              <Footer/>
            </div>
          </div>
        </body>
      </html>
  );
}

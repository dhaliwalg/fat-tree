"use client";
import Image from "next/image";
import { mont } from "./fonts";
import AmongUsParticles from "@/public/Particles";

export default function Home() {
  return (
    <main>
      <AmongUsParticles />
      <div className="z-1 flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between lg:flex">
          <p className="text-3xl">gurjit singh dhaliwal</p>
        </div>
      </div>
    </main>
  );
}

import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Hero } from "@/components/svg/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col gap-[100px]">
      <Header />
      <Hero />
    </div>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FiChevronDown } from "react-icons/fi";
import Header from "./Header";

function Hero() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `hover:text-[#4a4a43] pb-1 ${
      pathname === path ? "border-b-2 border-[#4a4a43] font-semibold text-[#4a4a43]" : ""
    }`;

  return (
    <div className='w-full bg-gradient-to-tl from-[#f3f3f2] via-[#ffffff] to-[#f3f3f2] min-h-screen'>
      <Header/>
      <section className="pt-40 pb-20 px-6 md:px-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <p className="uppercase tracking-widest text-sm text-gray-500 mb-4">
            Psychotherapist
          </p>

          <h1 className="text-5xl md:text-6xl font-serif text-[#4a4a43]">
            Ester S.<br />Dossenbach
          </h1>

          <p className="text-gray-500 mt-6 max-w-md">
            I'm a board-certified psychotherapist specializing in individual
            and relationship therapy. My mission is to help people live happier,
            more fulfilling lives.
          </p>
          
          <Link href="/about">
            <button className="mt-8 border cursor-pointer border-[#4a4a43] px-6 py-2 text-[#4a4a43] text-sm tracking-wide hover:bg-[#4a4a43] hover:text-white transition rounded-xl">
              ABOUT ME
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/HeroImage.png"
            alt="therapist"
            className="w-[300px] md:w-[450px] object-cover rounded"
          />
        </div>

      </section>
    </div>
  )
}

export default Hero
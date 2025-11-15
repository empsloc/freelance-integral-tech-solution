"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active link styling
  const linkClass = (path: string) =>
    `hover:text-black pb-1 ${
      pathname === path ? "border-b-2 border-black font-semibold text-black" : ""
    }`;

  return (
    <header
      className={`fixed top-0 left-0 py-3 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className=" px-6 md:px-20 max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center">

        <Image
          height={100}
          alt="logo"
          width={100}
          src={"/logo.png"}
          className="text-xl font-serif tracking-wide text-black"
        />

        <nav className="hidden md:flex gap-10 text-gray-700">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/about" className={linkClass("/about")}>About</Link>
          <Link href="/services" className={linkClass("/services")}>Services</Link>
          <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
        </nav>

        {/* Mobile */}
        <div className="md:hidden text-gray-700">
          ☰
        </div>
      </div>
    </header>
  );
}

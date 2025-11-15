"use client";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full py-6 px-6 md:px-20 max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center top-0 left-0 z-50">
      <h1 className="text-xl font-serif tracking-wide text-black">PsychHelp</h1>

      <nav className="hidden md:flex gap-10 text-gray-700">
        <a href="#" className="hover:text-black">Home</a>
        <a href="#" className="hover:text-black">About</a>

        <div className="relative">
          <button
            className="flex items-center gap-1 hover:text-black"
            onClick={() => setOpen(!open)}
          >
            Services <FiChevronDown size={16} />
          </button>
          {open && (
            <div className="absolute mt-2 bg-white shadow-md rounded p-3 w-40">
              <a className="block py-1 hover:text-black cursor-pointer">Individual Therapy</a>
              <a className="block py-1 hover:text-black cursor-pointer">Relationship Therapy</a>
            </div>
          )}
        </div>

        <a href="#" className="hover:text-black">Contact</a>
      </nav>

      {/* Mobile */}
      <div className="md:hidden text-gray-700">
        ☰
      </div>
    </header>
  );
}

// components/Navbar.jsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#08CF75] bg-opacity-80 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a href="/" className="flex items-center space-x-2">
          <Image 
            src="/logo.png" 
            alt="DigiRex Logo" 
            height={60} 
            width={80}
          />
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-[#090055] font-semibold">
          <Link href="/" className="hover:text-white transition hover:underline">Home</Link>
          <Link href="/about" className="hover:text-white transition hover:underline">About</Link>
          <Link href="/services" className="hover:text-white transition hover:underline">Services</Link>
          <Link href="/contact" className="hover:text-white transition hover:underline">Contact</Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#090055] focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#090055] text-[#FFFFFF] px-6 py-4 space-y-4 relative"
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-4 text-2xl font-bold text-[#09F289] hover:text-white"
            aria-label="Close menu"
          >
            ✕
          </button>

          <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-[#09F289]">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block hover:text-[#09F289]">About</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="block hover:text-[#09F289]">Services</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block hover:text-[#09F289]">Contact</Link>
        </motion.div>
      )}
    </nav>
  );
}
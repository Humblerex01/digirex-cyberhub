// components/Navbar.jsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#08CF75] bg-opacity-80 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="/"
          className="flex items-center space-x-2">
          <img 
            src="/logo.png" 
            alt="DigiRex Logo" 
            className="h-18 w-auto"
          />
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-[#090055] font-semibold">
          <a href="/" className="hover:text-white transition hover:underline">Home</a>
          <a href="/about" className="hover:text-white transition hover:underline">About</a>
          <a href="/services" className="hover:text-white transition hover:underline">Services</a>
          <a href="/contact" className="hover:text-white transition hover:underline">Contact</a>
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
          className="md:hidden bg-[#090055] text-[#FFFFFF] px-6 py-4 space-y-4"
        >
          <a href="/" className="block hover:text-[#09F289]">Home</a>
          <a href="/about" className="block hover:text-[#09F289]">About</a>
          <a href="/services" className="block hover:text-[#09F289]">Services</a>
          <a href="/contact" className="block hover:text-[#09F289]">Contact</a>
        </motion.div>
      )}
    </nav>
  );
}

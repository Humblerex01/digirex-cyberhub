"use client";
import { motion } from "framer-motion";
import AnimatedBackground from "../../components/AnimatedBackground"; // adjust if your path differs
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // ⬅️ Put this at the top of your file


export default function Home() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      {/* Animated tech background */}
      <AnimatedBackground />

    {/* Hero Section */}
    <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold mb-4"
      >
        Welcome to DigiRex Cyber Hub
      </motion.h1>

      <br></br>

      <p className="text-base sm:text-lg md:text-xl max-w-2xl mb-6">
        Driving innovation across Web Development, Cybersecurity, Graphics,
        Content Creation, Blockchain Technology, and more all under one hub.
      </p>

        <motion.button
          whileHover={{ scale: 1.06 }}
          className="bg-[#09F289] text-[#090055] font-semibold px-6 py-3 rounded-xl shadow-lg"
        >
          <a href="/contact">Get Started</a>
        </motion.button>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-20 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-[#09F289]">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 relative z-10 bg-[#090055]/40 backdrop-blur-md rounded-2xl shadow-lg border border-[#08CF75]">
            <h3 className="text-2xl font-semibold mb-3 text-[#09F289]">Web Development</h3>
            <p>Modern, responsive websites tailored for your business success.</p>
          </div>
          <div className="p-6 relative z-10 bg-[#090055]/40 backdrop-blur-md rounded-2xl shadow-lg border border-[#08CF75]">
            <h3 className="text-2xl font-semibold mb-3 text-[#09F289]">Cyber Security</h3>
            <p>Protect your digital space with expert security solutions.</p>
          </div>
          <div className="p-6 relative z-10 bg-[#090055]/40 backdrop-blur-md rounded-2xl shadow-lg border border-[#08CF75]">
            <h3 className="text-2xl font-semibold mb-3 text-[#09F289]">Content Creation</h3>
            <p>Engaging graphics, videos, and digital content to grow your brand.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#09F289]">Ready to Go Digital?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Join DigiRex today and take your digital journey to the next level.
        </p>
        <motion.button
          whileHover={{ scale: 1.06 }}
          className="bg-[#09F289] text-[#090055] font-semibold px-8 py-3 rounded-xl shadow-lg border-t border-[090055]"
        >
          <a href="/contact">Contact Us</a>
        </motion.button>
      </section>

{/* Footer */}
<footer className="relative z-10 backdrop-blur-md text-white py-10 border-t border-white/10">
  <div className="max-w-6xl mx-auto px-6 space-y-10 md:space-y-0">
    
    {/* About / Brand */}
    <div className="text-left mb-8 md:mb-0">
      <h3 className="text-2xl font-bold" style={{ color: "#09F289" }}>
        DigiRex Cyber Hub
      </h3>
      <p className="mt-3 text-sm justify opacity-80">
        Empowering individuals and businesses with cutting-edge technology solutions, robust cybersecurity strategies, innovative web development, creative digital content, and forward-looking crypto innovations that drive growth, security, and digital transformation.
      </p>
    </div>
    <br></br>

    {/* Row for Quick Links + Follow Us on mobile */}
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-8">
      
      {/* Quick Links */}
      <div className="text-left">
        <h4 className="text-lg font-semibold mb-3" style={{ color: "#09F289" }}>
          Quick Links
        </h4>
        <ul className="space-y-2 text-sm opacity-90">
          <li><a href="/" className="hover:text-[#09F289] hover:underline">Home</a></li>
          <li><a href="/services" className="hover:text-[#09F289] hover:underline">Services</a></li>
          <li><a href="/about" className="hover:text-[#09F289] hover:underline">About</a></li>
          <li><a href="/contact" className="hover:text-[#09F289] hover:underline">Contact</a></li>
        </ul>
      </div>

      {/* Follow Us */}
      <div className="text-left">
        <h4 className="text-lg font-semibold mb-3" style={{ color: "#09F289" }}>
          Follow Us
        </h4>
        <div className="flex items-center gap-2 text-sm opacity-90 mb-2">
          <FaFacebook className="text-[#09F289]" />
          <a href="#" className="text-white hover:underline hover:text-[#09F289]">@Facebook</a>
        </div>
        <div className="flex items-center gap-2 text-sm opacity-90 mb-2">
          <FaTwitter className="text-[#09F289]" />
          <a href="#" className="text-white hover:underline hover:text-[#09F289]">@Twitter</a>
        </div>
        <div className="flex items-center gap-2 text-sm opacity-90 mb-2">
          <FaInstagram className="text-[#09F289]" />
          <a href="#" className="text-white hover:underline hover:text-[#09F289]">@Instagram</a>
        </div>
        <div className="flex items-center gap-2 text-sm opacity-90">
          <FaLinkedin className="text-[#09F289]" />
          <a href="#" className="text-white hover:underline hover:text-[#09F289]">@LinkedIn</a>
        </div>
      </div>

      {/* Get in Touch */}
      <div className="col-span-2 md:col-span-1 text-left mt-8 md:mt-0">
        <h4 className="text-lg font-semibold mb-3" style={{ color: "#09F289" }}>
          Get in Touch
        </h4>
        <div className="flex items-center gap-2 text-sm opacity-90 mb-2">
          <FaMapMarkerAlt className="text-[#09F289]" />
          <span>Owerri, Imo State, Nigeria</span>
        </div>
        <div className="flex items-center gap-2 text-sm opacity-90 mb-2">
          <FaEnvelope className="text-[#09F289]" />
          <a href="mailto:digirexcyberhub@gmail.com" className="text-white hover:underline hover:text-[#09F289]">
            digirexcyberhub@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2 text-sm opacity-90">
          <FaPhoneAlt className="text-[#09F289]" />
          <a href="tel:08143691920" className="text-white hover:underline hover:text-[#09F289]">
            +234 814 369 1920
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Copyright */}
  <div className="mt-8 border-t border-white/10 pt-4 text-center text-[#09F289] text-sm opacity-70">
    © {new Date().getFullYear()} DigiRex Cyber Hub. All Rights Reserved.
  </div>
</footer>

    </main>
  );
}

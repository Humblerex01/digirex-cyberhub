"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import AnimatedBackground from "../../../components/AnimatedBackground"; // <-- adjust if your components folder is elsewhere
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // ⬅️ Put this at the top of your file

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Send email to Admin
    emailjs
      .send(
        "service_27p49qv",        // Your EmailJS service ID
        "template_vbw375v",  // Template ID for receiving user's message
        form,
        "Fd6JphzXO5hm9Lplb"         // Your EmailJS public key
      )
      .then(() => {
        // Send auto-reply to user
        emailjs.send(
          "service_27p49qv",
          "template_y343u7m",   // Template ID for auto reply
          {
            to_name: form.name,
            to_email: form.email,
            subject: form.subject,
          },
          "Fd6JphzXO5hm9Lplb"
        );

        alert("✅ Message sent successfully! Check your inbox for confirmation.");
        setForm({ name: "", email: "", subject: "", message: "" });
        setLoading(false);
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("❌ Failed to send message. Try again later.");
        setLoading(false);
      });
  };

  return (
    <main className="relative text-white">
      {/* Reuse the same animated tech background */}
      <AnimatedBackground />

      {/* Contact Section */}
      <section className="relative flex flex-col items-center justify-center pt-36 pb-16 px-6">
        <div className="max-w-3xl w-full bg-[#0A0A2F] p-8 rounded-2xl shadow-lg">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#09F289] text-3xl sm:text-4xl md:text-5xl text-center font-extrabold mb-4"
        >
          Contact Us 
        </motion.h1>
        <br></br>

        <p className="text-base justify-center sm:text-lg md:text-xl max-w-2xl mb-10 opacity-90">
          Have a project, idea, or question? Fill out the form and we’ll respond shortly.
        </p>

        {/* Glass card form */}
        <div className="w-full max-w-3xl bg-[#090055]/40 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-[#08CF75] text-left">
          <form onSubmit={handleSubmit} className="grid gap-6">
            {/* Anti-spam honeypot (hidden) */}
            <input
              type="text"
              name="company"
              className="hidden"
              tabIndex="-1"
              autoComplete="off"
              onChange={() => {}}
            />

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              aria-label="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-[#08CF75] focus:outline-none focus:ring-2 focus:ring-[#09F289]"
              required
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              aria-label="Your Email"
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-[#08CF75] focus:outline-none focus:ring-2 focus:ring-[#09F289]"
              required
            />

            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              aria-label="Subject"
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-[#08CF75] focus:outline-none focus:ring-2 focus:ring-[#09F289]"
              required
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              aria-label="Your Message"
              rows="5"
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-[#08CF75] focus:outline-none focus:ring-2 focus:ring-[#09F289]"
              required
            />

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#09F289] text-[#090055] font-semibold px-8 py-3 rounded-xl shadow-lg disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
          </div>
        </div>
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

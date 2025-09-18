"use client";
import { motion } from "framer-motion";
import AnimatedBackground from "../../../components/AnimatedBackground"; // adjust if your path differs
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // ⬅️ Put this at the top of your file
import Link from "next/link";
export default function ServicesPage() {
const services = [
  {
    title: "Web Development",
    desc: "We design and build responsive, modern, and secure websites tailored to your business or personal needs.",
  },
  {
    title: "Mobile App Development",
    desc: "Custom mobile applications for Android and iOS, built with performance and scalability in mind.",
  },
  {
    title: "Graphics & Branding",
    desc: "Creative designs that define your brand identity, from logos and flyers to complete brand kits.",
  },
  {
    title: "UI/UX Design",
    desc: "Designing user-friendly, attractive, and interactive interfaces to enhance customer experience on websites and apps.",
  },
  {
    title: "Video Editing & Content Creation",
    desc: "High-quality video editing and engaging digital content creation to help your brand stand out online.",
  },
  {
    title: "Digital Marketing",
    desc: "Boost your business visibility with SEO, social media marketing, and online advertising strategies.",
  },
  {
    title: "Cybersecurity Awareness & Training",
    desc: "Protect your digital assets with training, awareness programs, and security best practices for individuals and organizations.",
  },
  {
    title: "Database Management & Optimization",
    desc: "Design, manage, and optimize databases to ensure smooth performance, security, and scalability for businesses.",
  },
  {
    title: "ICT Consultancy",
    desc: "Professional guidance on technology adoption, system upgrades, digital transformation, and IT solutions.",
  },
  {
    title: "Networking & System Support",
    desc: "Reliable setup and maintenance of networks, systems, and IT infrastructure to keep your business running smoothly.",
  },
  {
    title: "Cloud Solutions",
    desc: "Helping businesses migrate to the cloud with scalable, secure, and cost-efficient cloud services.",
  },
  {
    title: "Data Recovery & Backup Solutions",
    desc: "Secure data recovery services and backup systems to ensure your critical information is never lost.",
  },
  {
    title: "E-Learning Solutions",
    desc: "Custom online learning platforms, training modules, and digital classrooms for schools and organizations.",
  },
  {
    title: "IT Support & Maintenance",
    desc: "Round-the-clock technical support, troubleshooting, and system maintenance for individuals and businesses.",
  },
  {
    title: "Artificial Intelligence & Automation",
    desc: "Leverage AI tools and automation systems to improve workflows, decision-making, and business efficiency.",
  },
];


  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 py-32 text-center">


      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-[#09F289]"
      >
        Our Services
      </motion.h1>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
          >
            <h2 className="text-2xl font-semibold mb-3 text-[#09F289]">
              {service.title}
            </h2>
            <p className="text-gray-200 text-sm leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
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
          <li><Link href="/" className="hover:text-[#09F289] hover:underline">Home</Link></li>
          <li><Link href="/services" className="hover:text-[#09F289] hover:underline">Services</Link></li>
          <li><Link href="/about" className="hover:text-[#09F289] hover:underline">About</Link></li>
          <li><Link href="/contact" className="hover:text-[#09F289] hover:underline">Contact</Link></li>
        </ul>
      </div>

      {/* Follow Us */}
      <div className="text-left">
        <h4 className="text-lg font-semibold mb-3" style={{ color: "#09F289" }}>
          Follow Us
        </h4>
        <div className="flex items-center gap-2 text-sm opacity-90 mb-2">
          <FaFacebook className="text-[#09F289]" />
          <Link href="https://www.facebook.com/share/1A2R711QaX/?mibextid=wwXIfr" className="text-white hover:underline hover:text-[#09F289]">@Facebook</Link>
        </div>
        <div className="flex items-center gap-2 text-sm opacity-90 mb-2">
          <FaTwitter className="text-[#09F289]" />
          <Link href="https://x.com/DigirexCyberHub?t=zefeBSASRZVjggAqj8_6-w&s=09" className="text-white hover:underline hover:text-[#09F289]">@Twitter</Link>
        </div>
        <div className="flex items-center gap-2 text-sm opacity-90 mb-2">
          <FaInstagram className="text-[#09F289]" />
          <Link href="https://www.instagram.com/digirex_cyber_hub?igsh=MXJ0M3UxYnJqOTQyYw%3D%3D&utm_source=qr" className="text-white hover:underline hover:text-[#09F289]">@Instagram</Link>
        </div>
        <div className="flex items-center gap-2 text-sm opacity-90">
          <FaLinkedin className="text-[#09F289]" />
          <Link href="www.linkedin.com/in/digirex-cyber-hub-532171385" className="text-white hover:underline hover:text-[#09F289]">@LinkedIn</Link>
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
          <Link href="mailto:digirexcyberhub@gmail.com" className="text-white hover:underline hover:text-[#09F289]">
            digirexcyberhub@gmail.com
          </Link>
        </div>
        <div className="flex items-center gap-2 text-sm opacity-90">
          <FaPhoneAlt className="text-[#09F289]" />
          <Link href="tel:08143691920" className="text-white hover:underline hover:text-[#09F289]">
            +234 814 369 1920
          </Link>
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

"use client";
import { motion } from "framer-motion";
import AnimatedBackground from "../../../components/AnimatedBackground";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // ⬅️ Put this at the top of your file
import Link from "next/link";

export default function AboutPage() {
const team = [
  {
    name: "Maduakor Chinedu Emmanuel (Humble Rex)",
    role: "Founder & CEO",
    img: "/Humble.jpg",
    specialty: "Web Development, Software Engineering, Digital Writing & Publishing, Video Editing",
  },
  {
    name: "Nwandu Chinedu Somtochukwu",
    role: "Creative Director",
    img: "/Somto 2.jpg",
    specialty: "Graphics Design, Video Editing, Photo Retouching & Manipulation, Logo & Brand Designing",
  },
  {
    name: "Ikechukwu Godswill",
    role: "Lead Brand & Product Designer",
    img: "/Godswill.png",
    specialty: "Graphics Designing, Brand Designing, Product Designing, Marketing/Advertising Designing, UI/UX Designing, Photo/Videography",
  },
  {
    name: "Onyebuchi Favour (Dbest)",
    role: "Content & Social Media Manager",
    img: "/Favour.jpg",
    specialty: "Graphics Designing, Digital Writing & Publishing, Social Media Management",
  },
  {
    name: "Anochili Godswill",
    role: "Visual Content Designer",
    img: "/Godswill Anochili.jpg",
    specialty: "Visual Designing, Content Creation, Photography",
  },
  {
    name: "Okeke Donald (Chydon)",
    role: "Data & Blockchain Analyst",
    img: "/chydon.jpg",
    specialty: "Blockchain Technology Fundamentals, Data Analytics, Database Management",
  },
];

const projects = [
  {
    title: "GlowSkin E-commerce (In Progress)",
    description: "A modern skincare e-commerce platform with Paystack integration, Pay on Delivery, and dynamic order tracking.",
    desktopImg: "/images/projects/glowskin-desktop.png",
    mobileImg: "/images/projects/glowskin-mobile.png",
    Link: "#",
  },
  {
    title: "DigiRex Cyber Hub",
    description: "A Tech Hub delivering innovative digital solutions in web development, branding, IT consultancy, and cybersecurity awareness, helping businesses thrive in the modern tech space.",
    desktopImg: "/digirexdesktopview.png",
    mobileImg: "/digirexmobileview.png",
    Link: "https://digirexcyberhub.netlify.app",
  },
    {
    title: "ASF FUTO Fellowship Website",
    description: "A dynamic and interactive website built for ASF FUTO Fellowship to manage events, announcements, and resources for students.",
    desktopImg: "/ASFdesktopviev.png",
    mobileImg: "/ASFmobileview.jpg",
    Link: "https://asffuto.netlify.app", // replace with the actual link
  },
    {
    title: "Student Departmental Info Board",
    description: "A fullstack interactive website built for Cyber Security Department to manage events, announcements, and timetables for students with an Admin dashboard.",
    desktopImg: "/StudentDesktop.png",
    mobileImg: "/StudentMobile.jpg",
    Link: "https://studentinfoboard.netlify.app", // replace with the actual link
  },
  // add more projects here...
];


  return (
    <main className="relative text-white">
      {/* Reuse the same animated tech background */}
      <AnimatedBackground />


    <div className="relative min-h-screen flex flex-col justify-center items-center px-6 py-32">

      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-[#09F289] text-center"
      >
        About DigiRex Cyber Hub
      </motion.h1>

      {/* History */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl text-center mb-16"
      >
        <p className="text-gray-200 text-justify leading-relaxed text-lg">
          DigiRex Cyber Hub was officially founded in <b>July 2025</b> by <b>Maduakor Chinedu Emmanuel</b>, widely recognized by his nickname <b>Humble Rex</b>. The hub was established to provide a central platform where businesses, professionals, and individuals could access a wide range of digital solutions under one roof. From inception, the founder’s vision was to create a brand that combined creativity, security, and innovation to meet the growing demands of the digital era.
        <br></br>
        <br></br>
The journey to establishing DigiRex Cyber Hub began years earlier, when Maduakor Chinedu Emmanuel engaged in freelance projects across <b>web development</b>, <b>cybersecurity</b>, and <b>graphics design</b>. Through these early experiences, he identified a consistent challenge: many businesses struggled to find a single trusted provider who could handle multiple aspects of their digital presence. This gap in the market provided the foundation for DigiRex, which was designed to deliver integrated solutions that are efficient, reliable, and secure.
<br></br>
<br></br>
The brand identity of DigiRex Cyber Hub is defined by three core colors: <b>deep blue (#090055)</b>, symbolizing trust and professionalism; <b>neon green (#09F289)</b>, representing innovation and growth; and <b>white (#FFFFFF)</b>, standing for simplicity and transparency. These colors are central to the hub’s logo, website, and overall presentation, reflecting its modern and tech-oriented image.
<br></br>
<br></br>
Based in <b>Owerri, Imo State, Nigeria</b>, DigiRex Cyber Hub began its operations by offering four primary services: <b>web development, cybersecurity solutions, graphics and content creation, and cryptocurrency and tech education</b>. This combination allowed the hub to cater to both individuals and businesses seeking not only creative designs and functional websites but also the assurance of digital safety and future-focused education.
<br></br>
<br></br>
From its first months of operation, DigiRex Cyber Hub gained recognition for its unique positioning. Unlike traditional service providers, the hub emphasized a balance between <b>aesthetic design and digital security</b>, ensuring that clients received both visually appealing and secure solutions. This approach helped establish DigiRex as a trusted name within its local community and gradually attracted attention beyond its immediate environment.
<br></br>
<br></br>
The founder, Humble Rex, continues to guide the growth of the hub with a commitment to innovation, excellence, and impact. His vision extends beyond service delivery to include the creation of opportunities for digital learning, training, and empowerment. DigiRex Cyber Hub is therefore not only a service provider but also a platform dedicated to shaping the future of technology adoption in Nigeria and beyond.

        </p>
      </motion.div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4 text-[#09F289]">Our Mission</h2>
          <p className="text-gray-200">
            To empower individuals, businesses, and communities with
            technology-driven solutions, enhancing productivity, security, and
            growth through innovation and excellence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4 text-[#09F289]">Our Vision</h2>
          <p className="text-gray-200">
            To be a global leader in digital empowerment, bridging the gap
            between technology and humanity while building a secure, innovative,
            and informed society.
          </p>
        </motion.div>
      </div>

{/* Projects */}
<div className="max-w-6xl mb-20">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-3xl font-bold text-[#09F289] text-center mb-8"
  >
    Our Projects & Impact
  </motion.h2>
  <p className="text-gray-200 text-justify leading-relaxed mb-12">
    We have successfully executed projects in web development, digital
    literacy training, cybersecurity awareness campaigns, ICT consultancy,
    and smart internet services. Our workshops and training sessions have
    empowered hundreds of students and entrepreneurs to thrive in the
    digital space.
  </p>

  {/* Projects Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    {projects.map((project, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
        className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg flex flex-col"
      >
        {/* Images: Mobile + Desktop preview */}
        <div className="grid grid-cols-2 gap-2 p-4">
          <img
            src={project.desktopImg}
            alt={`${project.title} desktop preview`}
            className="rounded-lg object-cover w-full h-40 position-mid"
          />
          <img
            src={project.mobileImg}
            alt={`${project.title} mobile preview`}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        {/* Project Info */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 text-sm mb-4 flex-grow">{project.description}</p>
          <Link
            href={project.Link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#09F289] font-medium hover:underline"
          >
            View Project →
          </Link>
        </div>
      </motion.div>
    ))}
  </div>
</div>


    {/* Team Section */}
    <div className="max-w-6xl mb-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-[#09F289] text-center mb-12"
      >
        Meet Our Team
      </motion.h2>

      {/* Grid with equal height cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 auto-rows-fr">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-center h-full flex flex-col"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-40 h-40 rounded-full mx-auto mb-4 border-2 border-[#09F289] object-cover"
            />
            <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
            <p className="text-[#09F289] font-medium">{member.role}</p>
            <p className="text-gray-300 text-sm mt-2 flex-grow">{member.specialty}</p>
          </motion.div>
        ))}
      </div>
    </div>


      {/* Why Choose Us */}
      <div className="max-w-6xl mb-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#09F289] mb-8"
        >
          Why Choose Us
        </motion.h2>
        <p className="text-gray-200 text-justify leading-relaxed">
          At <b>DigiRex Cyber Hub</b>, we know that technology drives success in today’s world, and choosing the right partner makes all the difference. Our strength lies in combining expertise across multiple fields such as web development, cybersecurity, graphics design, content creation, and cryptocurrency. With everything under one hub, we make it easy for businesses and individuals to access complete digital solutions without stress.
We focus on delivering <b>innovative and future-ready services</b> that adapt to changing trends, ensuring that what we build today continues to serve you tomorrow. Every project begins with understanding your unique goals, so our solutions are tailored to fit your vision while remaining practical and impactful.
Security and reliability are at the heart of our operations. From protecting your business data to ensuring safe use of cryptocurrency, we take proactive steps to safeguard your digital presence. At the same time, our services are affordable and designed to grow with you, whether you’re a startup, small business, or expanding enterprise.
Above all, DigiRex Cyber Hub was founded on integrity, expertise, and innovation by <b>Maduakor Chinedu Emmanuel (Humble Rex)</b>. We don’t just deliver projects, build relationships and measure our success by the growth and satisfaction of those we serve.

        </p>
      </div>
    </div>
    
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

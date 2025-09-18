"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedBackground() {
  const particles = [
    { top: "12%", left: "10%", d: 6 },
    { top: "22%", left: "70%", d: 7.5 },
    { top: "35%", left: "30%", d: 8.5 },
    { top: "48%", left: "82%", d: 6.5 },
    { top: "60%", left: "18%", d: 7.8 },
    { top: "72%", left: "55%", d: 6.2 },
    { top: "80%", left: "40%", d: 9 },
    { top: "88%", left: "75%", d: 7 },
  ];

    const techGraphics = [
    { src: "/laptop.png",       top: "10%", left: "10%", d: 18, w: 100, h: 100 },
    { src: "/globe.png",        top: "28%", left: "75%", d: 22, w: 100, h: 100 },
    { src: "/shield.png",       top: "40%", left: "12%", d: 26, w: 100, h: 100 },
    { src: "/bitcoin.png",      top: "65%", left: "75%", d: 24, w: 100, h: 100 },
    { src: "/braincircuit.png", top: "75%", left: "25%", d: 20, w: 100, h: 100 },
    ];


  return (
    <div className="absolute inset-0 -z-0 overflow-hidden">
      {/* Tech Background Image Alive */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('/techbackground2.jpg')" }}
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 15, -15, 0],
          y: [0, -10, 10, 0],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 opacity-60"
        animate={{
          backgroundImage: [
            "linear-gradient(135deg, #090055, #09F289)",
            "linear-gradient(135deg, #09F289, #FFFFFF)",
            "linear-gradient(135deg, #FFFFFF, #090055)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-[#090055] opacity-50 mix-blend-multiply" />

      {/* Neon Green Blob */}
      <motion.div
        className="absolute -top-32 -left-20 w-[38rem] h-[38rem] rounded-full blur-3xl opacity-25"
        style={{ backgroundColor: "#09F289" }}
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{
          duration: 16,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Soft White Glow */}
      <motion.div
        className="absolute -bottom-40 -right-32 w-[34rem] h-[34rem] rounded-full blur-3xl opacity-15"
        style={{ backgroundColor: "#FFFFFF" }}
        animate={{ x: [0, -30, 20, 0], y: [0, 25, -25, 0] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Rotating Tech Ring */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: "36rem",
          height: "36rem",
          border: "2px solid rgba(9, 242, 137, 0.28)",
          boxShadow:
            "0 0 40px rgba(9, 242, 137, 0.18), inset 0 0 20px rgba(9, 242, 137, 0.12)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* Inner rotating square */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl"
        style={{ width: "18rem", height: "18rem", border: "1px solid rgba(255,255,255,0.08)" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Particles */}
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{ top: p.top, left: p.left, backgroundColor: "#FFFFFF", opacity: 0.7 }}
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: p.d,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}

        {/* Floating Tech Graphics */}
        {techGraphics.map(({ src, top, left, d, w, h }, i) => (
        <motion.div
            key={i}
            className="absolute"
            style={{ top, left, width: `${w}px`, height: `${h}px` }}
            animate={{
            y: [0, -20, 20, 0],
            rotate: [0, 10, -10, 0],
            }}
            transition={{
            duration: d,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            }}
        >
            <Image src={src} alt="tech" width={w} height={h} />
        </motion.div>
        ))}

    </div>
  );
}

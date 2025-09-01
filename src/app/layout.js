"use client";
import "./globals.css";
import Navbar from "../../components/Navbar.jsx";
import BackToTop from "../../components/BackToTop";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-purple-600 via-pink-500 to-red-400 text-white min-h-screen">
        <Navbar />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}

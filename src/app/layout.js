"use client";
import "./globals.css";
import Navbar from "../../components/Navbar.jsx";
import BackToTop from "../../components/BackToTop";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-white min-h-screen bg-transparent">
        <Navbar />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}

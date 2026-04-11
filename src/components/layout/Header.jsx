"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // বর্তমান রাউট ট্র্যাক করার জন্য

  // স্ক্রল হ্যান্ডলিং
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // রাউট পরিবর্তন হলে মোবাইল মেনু অটোমেটিক বন্ধ করার জন্য
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Resume", href: "/resume" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50  transition-all duration-300 bg-[#0f172a]/90 backdrop-blur-md ${
        scrolled
          ? "?  bg-[#0f172a]/90 backdrop-blur-md shadow-lg" // বর্ডার সরিয়ে ডার্ক শ্যাডো দেওয়া হয়েছে
          : " bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.svg"
            alt="Forhad Logo"
            width={240}
            height={90}
            priority
            className="w-40 md:w-48 lg:w-56 h-auto object-contain transition-all duration-300"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={`transition-colors duration-300 ${
                    isActive ? "text-red-500" : "hover:text-red-500"
                  }`}
                >
                  {link.name}
                </Link>
                {/* Active & Hover Underline Animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-red-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown with Smooth Transition */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="px-6 space-y-4 flex flex-col">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`block text-lg font-medium transition-colors ${
                  isActive ? "text-red-500" : "text-white hover:text-red-500"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}

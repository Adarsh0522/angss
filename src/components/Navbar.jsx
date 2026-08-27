import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "आमच्याबद्दल", href: "#about" },
  { name: "कार्य क्षेत्रे", href: "#objectives" },
  { name: "आमचे उपक्रम", href: "#initiatives" },
  { name: "गॅलरी", href: "#gallery" },
  { name: "ध्येय", href: "#vision" },
  // { name: 'सहभागी व्हा', href: '#get-involved' },
  { name: "संपर्क", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center pt-6 px-4 pointer-events-none",
          scrolled ? "pt-4" : "pt-8",
        )}
      >
        <nav
          className={cn(
            "pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)]",
            scrolled
              ? "bg-white/70 backdrop-blur-xl border border-white/40 w-full max-w-5xl"
              : "bg-white/10 backdrop-blur-md border border-white/20 w-full max-w-7xl",
          )}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 overflow-hidden rounded-full border border-stone-200 group-hover:border-gold transition-colors bg-white flex-shrink-0">
              <img
                src={logo}
                alt="ANGSS Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span
              className={cn(
                "font-bold text-lg tracking-tight transition-colors flex items-center",
                scrolled
                  ? "text-[#d97706]"
                  : "text-white group-hover:text-[#d97706]",
              )}
            >
              अमरज्योत नवतरुण ग्रामविकास सेवा संस्था
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors uppercase tracking-wide relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
                      scrolled
                        ? "text-stone-700 hover:text-gold"
                        : "text-stone-200 hover:text-white",
                    )}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#get-involved"
              className="px-6 py-2.5 bg-gradient-to-r from-[#d97706] to-[#f59e0b] text-white text-sm font-bold rounded-full hover:shadow-[0_0_20px_rgba(217,119,6,0.5)] transition-all transform hover:-translate-y-0.5"
            >
              सहभागी व्हा
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden p-2 rounded-full transition-colors",
              scrolled
                ? "text-forest hover:bg-stone-100"
                : "text-white hover:bg-white/20",
            )}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[60] bg-cream/95 backdrop-blur-2xl flex flex-col p-6"
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-forest to-forest-light text-white flex items-center justify-center font-bold shadow-lg">
                  अ
                </div>
                <span className="font-bold text-xl text-forest">
                  अमरज्योत नवतरुण ग्रामविकास सेवा संस्था
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 bg-white rounded-full border border-stone-200 shadow-sm"
              >
                <X size={24} className="text-forest" />
              </button>
            </div>

            <ul className="flex flex-col gap-6 items-center flex-1 justify-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-3xl font-bold text-forest hover:text-gold transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="mt-8">
                <a
                  href="#donate"
                  className="px-8 py-4 bg-gradient-to-r from-forest to-forest-light text-white text-lg rounded-full font-bold shadow-[0_10px_20px_rgba(2,44,34,0.2)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  सहभागी व्हा
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

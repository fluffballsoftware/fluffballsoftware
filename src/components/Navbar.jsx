import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleMobileNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    // Wait for the menu close animation to finish before scrolling
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }, 350);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-card border-b border-fluff-sky/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" id="nav-logo" className="flex items-center gap-3 group">
          <motion.img
            src="/logo.jpeg"
            alt="Fluff Ball Software Logo"
            className="h-12 w-auto rounded-2xl shadow-fluff group-hover:shadow-fluff-lg transition-shadow duration-300"
            whileHover={{ rotate: [0, -5, 5, -3, 0], transition: { duration: 0.5 } }}
          />
          <div className="hidden sm:block">
            <p className="font-display text-fluff-navy text-lg leading-tight">Fluff Ball</p>
            <p className="text-xs font-semibold text-fluff-sky tracking-widest uppercase">Software Ltd.</p>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              id={`nav-${link.label.toLowerCase()}`}
              className="font-semibold text-fluff-navy/80 hover:text-fluff-sky transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fluff-sky rounded-full group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#contact"
            id="nav-cta"
            className="btn-shine px-6 py-2.5 bg-fluff-navy text-white font-bold rounded-full shadow-navy hover:bg-fluff-sky transition-colors duration-300 text-sm"
          >
            Let's Chat! ✨
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-btn"
          className="md:hidden p-2 rounded-xl text-fluff-navy"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-fluff-sky/20 px-6 pb-6 overflow-hidden"
          >
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleMobileNavClick(e, link.href)}
                  className="font-bold text-fluff-navy hover:text-fluff-sky transition-colors py-2 text-lg block"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleMobileNavClick(e, '#contact')}
                className="btn-shine block text-center px-6 py-3 bg-fluff-navy text-white font-bold rounded-full shadow-navy mt-2"
              >
                Let's Chat! ✨
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';


const footerLinks = {
  Services: [
    { label: 'Website Design', href: '#services' },
    { label: 'App Development', href: '#services' },
    { label: 'AI Consultancy', href: '#services' },
    { label: 'Software Consultancy', href: '#services' },
    { label: 'Launch Packages', href: '#services' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
  ],
};


const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-fluff-dark relative overflow-hidden">
      <div className="absolute inset-0 dots-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fluff-sky/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="https://www.fluffballsoftware.co.uk" className="flex items-center gap-3 mb-5 group">
              <img
                loading="lazy"
                src={`${import.meta.env.BASE_URL}logo.webp`}
                alt="Fluff Ball Software Logo"
                className="h-14 w-auto rounded-2xl shadow-fluff group-hover:shadow-fluff-lg transition-shadow duration-300"
              />
              <div>
                <p className="font-display text-white text-xl leading-tight">Fluff Ball</p>
                <p className="text-xs font-semibold text-fluff-sky tracking-widest uppercase">Software Ltd.</p>
              </div>
            </a>
            <p className="text-white/50 font-semibold text-sm leading-relaxed max-w-xs mb-6">
              Friendly Solutions, Powerful Code. We build websites, apps, and software with personality — plus a healthy dose of AI.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-bold text-white/80 mb-4 text-sm uppercase tracking-widest">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/45 font-semibold text-sm hover:text-fluff-sky transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Company Legal Info */}
        <div className="border-t border-white/8 pt-6 pb-2 text-white/40 text-xs text-center md:text-left space-y-1">
          <p>FLUFF BALL SOFTWARE LTD is registered in England and Wales. Company number: 17229696.</p>
          <p>Registered office: 71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ.</p>
          <p>ICO Registration Reference: ZC165699.</p>
        </div>

        {/* Bottom bar */}
        <div className="pb-6 pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/35 text-xs font-semibold">
          <p>© {year} <a href="https://www.fluffballsoftware.co.uk" className="hover:text-fluff-sky transition-colors duration-200">Fluff Ball Software Ltd.</a> All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart className="w-3 h-3 text-fluff-accent fill-fluff-accent" /> and yes, we named the company after the cat 🐱
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

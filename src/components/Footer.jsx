import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Twitter } from 'lucide-react';

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
};

const socials = [
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
];

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
            <a href="#hero" className="flex items-center gap-3 mb-5 group">
              <img
                src="/logo.jpeg"
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
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-fluff-sky hover:border-fluff-sky/40 hover:bg-fluff-sky/10 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
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

        {/* Bottom bar */}
        <div className="border-t border-white/8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/35 text-xs font-semibold">
          <p>© {year} Fluff Ball Software Ltd. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart className="w-3 h-3 text-fluff-accent fill-fluff-accent" /> and far too much tea ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

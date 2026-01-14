import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img src={logo} alt="Vyla Logo" className="h-10 w-10 object-contain drop-shadow-[0_0_10px_rgba(255,100,50,0.5)]" />
                    <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">VYLA</span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-white/80 hover:text-vyla-primary transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-sm transition-all text-sm font-medium">
                        Get Started
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-white/90 hover:text-vyla-primary"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a href="#contact" onClick={() => setIsOpen(false)} className="w-full text-center py-3 bg-vyla-primary hover:bg-red-600 rounded-lg font-bold transition-all">
                                Get Started
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

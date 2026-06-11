import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Heart } from 'lucide-react';


const floatingItems = [
  { emoji: '🐱', delay: 0, x: '5%', y: '20%', size: 'text-4xl' },
  { emoji: '✨', delay: 0.5, x: '88%', y: '15%', size: 'text-3xl' },
  { emoji: '🚀', delay: 1, x: '10%', y: '70%', size: 'text-3xl' },
  { emoji: '💻', delay: 1.5, x: '85%', y: '65%', size: 'text-2xl' },
  { emoji: '🌟', delay: 0.8, x: '50%', y: '8%', size: 'text-2xl' },
  { emoji: '☁️', delay: 1.2, x: '25%', y: '82%', size: 'text-3xl' },
  { emoji: '🎯', delay: 0.3, x: '72%', y: '85%', size: 'text-2xl' },
];

const stats = [
  { value: '100%', label: 'Fluffy Vibes', icon: '🐾' },
  { value: '∞', label: 'Ideas Generated', icon: '💡' },
  { value: '24/7', label: 'Committed', icon: '⚡' },
];

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden dots-pattern">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-fluff-sky/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-fluff-navy/8 rounded-full blur-3xl animate-blob" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-fluff-accent/8 rounded-full blur-3xl animate-blob" style={{ animationDelay: '5s' }} />
      </div>

      {/* Floating emojis */}
      {floatingItems.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute ${item.size} select-none pointer-events-none`}
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 4 + i * 0.5,
            delay: item.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {item.emoji}
        </motion.div>
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-16">

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card shadow-fluff mb-8 border border-fluff-sky/30"
          >
            <Sparkles className="w-4 h-4 text-fluff-sky" />
            <span className="text-sm font-bold text-fluff-navy">Friendly Solutions, Powerful Code</span>
            <Heart className="w-3 h-3 text-fluff-accent fill-fluff-accent" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-6xl md:text-7xl xl:text-8xl leading-tight mb-6"
          >
            <span className="text-fluff-navy">Big Ideas,</span>
            <br />
            <span className="gradient-text-brand">Soft Landing.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-fluff-navy/70 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-semibold"
          >
            We build websites, apps, and software that actually feel good to use.
            Plus a healthy sprinkle of{' '}
            <span className="gradient-text-accent font-bold">AI magic</span> 🪄
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="#contact"
              id="hero-cta-primary"
              className="btn-shine group inline-flex items-center justify-center gap-2 px-8 py-4 bg-fluff-navy text-white font-bold rounded-full shadow-navy hover:bg-fluff-sky transition-all duration-300 text-lg"
            >
              Let's Build Something
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              id="hero-cta-secondary"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 glass-card border-2 border-fluff-sky/40 text-fluff-navy font-bold rounded-full hover:border-fluff-sky hover:shadow-fluff transition-all duration-300 text-lg"
            >
              <Zap className="w-4 h-4 text-fluff-sky" />
              See Our Services
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 mt-14 justify-center lg:justify-start"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-3 glass-card px-5 py-3 rounded-2xl shadow-card border border-fluff-sky/20">
                <span className="text-2xl">{stat.icon}</span>
                <div>
                  <p className="font-display text-2xl text-fluff-navy leading-none">{stat.value}</p>
                  <p className="text-xs font-semibold text-fluff-navy/60 mt-0.5">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero Visual — Logo */}
        <motion.div
          className="flex-shrink-0 relative"
          initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100 }}
        >
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-full bg-fluff-sky/20 blur-3xl scale-125 animate-pulse-slow" />
          {/* Outer ring decoration */}
          <div className="absolute -inset-6 rounded-full border-2 border-dashed border-fluff-sky/30 animate-spin-slow" />
          <div className="absolute -inset-12 rounded-full border border-fluff-navy/10 animate-spin-slow" style={{ animationDirection: 'reverse' }} />

          {/* Logo image */}
          <motion.img
            src={`${import.meta.env.BASE_URL}logo.webp`}
            fetchPriority="high"
            alt="Fluff Ball Software — a fluffy blue cat curled in a ball with binary code"
            className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-fluff-lg border-4 border-white"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Floating badges on logo */}
          <motion.div
            className="absolute -bottom-4 -left-4 glass-card px-3 py-2 rounded-2xl shadow-fluff border border-fluff-accent/30 text-sm font-bold text-fluff-navy flex items-center gap-1.5"
            animate={{ rotate: [0, -5, 5, 0], y: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          >
            ✨ AI-Powered
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-fluff-navy/50 text-xs font-semibold"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>scroll down</span>
        <div className="w-5 h-8 border-2 border-fluff-navy/30 rounded-full flex justify-center pt-1.5">
          <motion.div
            className="w-1 h-2 bg-fluff-sky rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

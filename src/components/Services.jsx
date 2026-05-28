import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Brain, Code2, Rocket } from 'lucide-react';

const services = [
  {
    id: 'web-design',
    icon: Globe,
    emoji: '🌐',
    title: 'Website Design & Build',
    description: 'Stunning, fast websites that look gorgeous and convert visitors into customers. We obsess over every pixel.',
    features: ['Responsive & Mobile-First', 'SEO Optimised', 'Blazing Fast', 'Accessibility Built-in'],
    color: 'from-fluff-sky/20 to-fluff-navy/10',
    accent: 'text-fluff-sky',
  },
  {
    id: 'app-development',
    icon: Smartphone,
    emoji: '📱',
    title: 'App Development',
    description: 'Web apps and mobile-ready experiences built with modern frameworks. Fast, fun, and full of features.',
    features: ['React / Next.js', 'PWA Capable', 'API Integration', 'Real-time Features'],
    color: 'from-fluff-accent/20 to-fluff-purple/10',
    accent: 'text-fluff-accent',
  },
  {
    id: 'ai-consultancy',
    icon: Brain,
    emoji: '🤖',
    title: 'AI Consultancy',
    description: 'From chatbots to intelligent workflows, we help you harness the power of AI without the jargon.',
    features: ['AI Strategy & Roadmapping', 'LLM Integration', 'Automation Workflows', 'Custom AI Tools', 'Agentic Development'],
    color: 'from-fluff-mint/20 to-fluff-sky/10',
    accent: 'text-fluff-mint',
  },
  {
    id: 'software-consultancy',
    icon: Code2,
    emoji: '⚙️',
    title: 'Software Consultancy',
    description: 'Technical audits, architecture advice, and expert guidance on software decisions. Clear, honest, no fluff (well, maybe a little).',
    features: ['Tech Stack Reviews', 'Architecture Design', 'Code Audits', 'Team Mentoring'],
    color: 'from-fluff-gold/20 to-fluff-accent/10',
    accent: 'text-yellow-500',
  },
  {
    id: 'launch-packages',
    icon: Rocket,
    emoji: '🚀',
    title: 'Launch Packages',
    description: 'Start-up ready bundles — everything from domain to deployment. Ship your idea fast, look great from day one.',
    features: ['MVP in Weeks', 'Domain & Hosting', 'Cloud Setup', 'Analytics Included'],
    color: 'from-fluff-navy/15 to-fluff-sky/10',
    accent: 'text-fluff-navy',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Services = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fluff-sky/30 to-transparent" />
      <div className="absolute inset-0 dots-pattern opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card shadow-fluff border border-fluff-sky/30 mb-6">
            <span>⚡</span>
            <span className="text-sm font-bold text-fluff-navy">What We Do Best</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-fluff-navy mb-4">
            Our <span className="gradient-text-brand">Services</span>
          </h2>
          <p className="text-lg text-fluff-navy/60 max-w-2xl mx-auto font-semibold">
            Whether you need a tiny landing page or a full-blown AI platform,
            we bring the skills, the vibes, and the coffee ☕
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                id={`service-${service.id}`}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`group relative glass-card rounded-3xl p-7 shadow-card hover:shadow-fluff-lg transition-shadow duration-300 overflow-hidden cursor-default`}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />

                <div className="relative z-10">

                  {/* Icon */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} border border-white/60 flex items-center justify-center text-2xl shadow-card`}>
                      {service.emoji}
                    </div>
                    <Icon className={`w-6 h-6 ${service.accent} opacity-60`} />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-2xl text-fluff-navy mb-3">{service.title}</h3>
                  <p className="text-fluff-navy/65 font-semibold text-sm leading-relaxed mb-5">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-1.5">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm font-semibold text-fluff-navy/75">
                        <span className="w-1.5 h-1.5 rounded-full bg-fluff-sky flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Hover CTA */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#contact" className={`text-sm font-bold ${service.accent} flex items-center gap-1 hover:gap-2 transition-all`}>
                      Get in touch →
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

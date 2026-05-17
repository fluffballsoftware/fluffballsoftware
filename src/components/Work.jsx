import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 'project-zebudy',
    emoji: '🏅',
    title: 'Zebudy',
    category: 'Web App',
    description: 'A sports social platform connecting athletes and sports enthusiasts. Real-time messaging, profile matching, and event discovery.',
    tags: ['React', 'AWS', 'WebSocket', 'DynamoDB'],
    color: 'from-fluff-sky/30 to-fluff-navy/20',
    accent: 'bg-fluff-sky/20 text-fluff-sky',
  },
  {
    id: 'project-ai-platform',
    emoji: '🤖',
    title: 'AI Workflow Engine',
    category: 'AI Consultancy',
    description: 'Custom LLM-powered automation platform that reduced manual processing time by 80% for a regional logistics company.',
    tags: ['Python', 'OpenAI', 'Automation', 'AWS Lambda'],
    color: 'from-fluff-mint/30 to-fluff-sky/20',
    accent: 'bg-fluff-mint/20 text-fluff-mint',
  },
  {
    id: 'project-startup',
    emoji: '🚀',
    title: 'Start-Up Launch Pack',
    category: 'Full Stack',
    description: 'From idea to live product in 6 weeks. Brand identity, landing page, app MVP, and cloud infrastructure — all sorted.',
    tags: ['Branding', 'Next.js', 'Terraform', 'Stripe'],
    color: 'from-fluff-accent/20 to-fluff-purple/15',
    accent: 'bg-fluff-accent/20 text-fluff-accent',
  },
];

const Work = () => {
  return (
    <section id="work" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fluff-navy/20 to-transparent" />
      <div className="absolute inset-0 dots-pattern opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card shadow-fluff border border-fluff-sky/30 mb-6">
            <span>🎪</span>
            <span className="text-sm font-bold text-fluff-navy">Stuff We've Built</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-fluff-navy mb-4">
            Our <span className="gradient-text-brand">Work</span>
          </h2>
          <p className="text-lg text-fluff-navy/60 max-w-xl mx-auto font-semibold">
            A few things we're proud of. Every project is different — that's what makes it fun.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              id={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="glass-card rounded-3xl overflow-hidden shadow-card hover:shadow-fluff-lg transition-shadow duration-300 group cursor-default"
            >
              {/* Top colour band */}
              <div className={`bg-gradient-to-br ${project.color} p-8 flex items-center justify-between`}>
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{project.emoji}</span>
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${project.accent} border-current/30`}>
                  {project.category}
                </span>
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl text-fluff-navy mb-2">{project.title}</h3>
                <p className="text-fluff-navy/65 text-sm font-semibold leading-relaxed mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-bold px-3 py-1 rounded-full bg-fluff-navy/8 text-fluff-navy/70 border border-fluff-navy/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-4xl overflow-hidden bg-gradient-to-r from-fluff-navy via-fluff-navy to-fluff-sky/80 p-10 md:p-14 text-center shadow-navy"
        >
          <div className="absolute inset-0 opacity-10 dots-pattern" />
          <div className="relative z-10">
            <p className="text-4xl mb-4">🌈</p>
            <h3 className="font-display text-4xl md:text-5xl text-white mb-4">Your project could be next!</h3>
            <p className="text-white/70 font-semibold mb-8 max-w-lg mx-auto text-lg">
              We love tackling new challenges. Tell us about what you're building — we'd love to be part of it.
            </p>
            <a
              href="#contact"
              id="work-cta"
              className="btn-shine inline-flex items-center gap-2 px-10 py-4 bg-white text-fluff-navy font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
            >
              Start a Project 🚀
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;

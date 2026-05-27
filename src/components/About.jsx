import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Coffee, Users, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: '🐾',
    title: 'Approachable',
    desc: 'No jargon. No gatekeeping. Just friendly, clear conversations about what your project needs.',
  },
  {
    icon: '⚡',
    title: 'Capable',
    desc: 'Underneath the fluffy exterior is serious engineering talent. We ship things that work, and work well.',
  },
  {
    icon: '🎯',
    title: 'Focused',
    desc: 'We keep things simple and purposeful. Your goals drive every decision we make.',
  },
  {
    icon: '🤝',
    title: 'Collaborative',
    desc: "You're not a ticket in a queue. You're a partner. We work together, transparently, every step of the way.",
  },
];

const perks = [
  'Small studio feel, big-agency skills',
  'Plain-English communication always',
  'Transparent pricing, no nasty surprises',
  'Fast turnaround without cutting corners',
  'AI-native from the ground up',
  'We actually like what we build',
];

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-fluff-navy">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-fluff-sky/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-fluff-accent/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-dark shadow-navy border border-fluff-sky/30 mb-6">
            <span>🐱</span>
            <span className="text-sm font-bold text-fluff-skyLight">Who We Are</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-white mb-4">
            Meet the <span className="text-fluff-sky">Fluff Ball</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-semibold">
            We're a small-but-mighty software studio with a big personality and even bigger ambitions.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card-dark rounded-3xl p-8 border border-fluff-sky/20">
              <div className="text-4xl mb-4">🐱‍💻</div>
              <h3 className="font-display text-3xl text-white mb-4">Our Story</h3>
              <p className="text-white/70 leading-relaxed font-semibold text-base mb-4">
                Fluff Ball Software was born from a simple idea: technology doesn't have to be cold and intimidating.
                It can be warm, approachable, and even a little bit fluffy.
              </p>
              <p className="text-white/70 leading-relaxed font-semibold text-base mb-4">
                We combine serious software engineering with a genuine love for great design and clear communication.
                Whether you're a start-up with a wild idea or an established business ready to modernise,
                we're here for it.
              </p>
              <p className="text-white/70 leading-relaxed font-semibold text-base">
                From websites to AI-powered platforms — we build with care, curiosity, and just the right amount of fun. 🎉
              </p>
            </div>

            {/* Perks list */}
            <div className="glass-card-dark rounded-3xl p-8 border border-fluff-sky/20">
              <h4 className="font-display text-xl text-fluff-sky mb-5 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" /> Why Work With Us
              </h4>
              <ul className="space-y-3">
                {perks.map((perk, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3 text-white/80 font-semibold"
                  >
                    <span className="w-2 h-2 rounded-full bg-fluff-sky flex-shrink-0" />
                    {perk}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right — Values */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="font-display text-3xl text-white mb-6 text-center lg:text-left">Our Values</h3>
            {values.map((val, i) => (
              <motion.div
                key={i}
                id={`about-value-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                className="glass-card-dark rounded-2xl p-6 border border-fluff-sky/20 flex items-start gap-4 cursor-default group"
              >
                <span className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200">{val.icon}</span>
                <div>
                  <h4 className="font-display text-xl text-fluff-sky mb-1">{val.title}</h4>
                  <p className="text-white/65 text-sm font-semibold leading-relaxed">{val.desc}</p>
                </div>
              </motion.div>
            ))}


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

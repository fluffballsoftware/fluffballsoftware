import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageSquare, MapPin, Loader2, CheckCircle2 } from 'lucide-react';

const serviceOptions = [
  'Website Design & Build',
  'App Development',
  'AI Consultancy',
  'Software Consultancy',
  'Launch Package',
  'Something Else Entirely',
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formEl = e.target; // capture before any async
    setStatus('loading');
    
    try {
      const object = {
        access_key: "82239b52-9a21-459a-b3f2-634f05204001",
        subject: `New Inquiry from ${form.name}`,
        name: form.name,
        email: form.email,
        service: form.service,
        message: form.message,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(object),
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        formEl.reset();
      } else {
        console.error("Form error:", data);
        setStatus('error');
      }
    } catch (error) {
      console.error("Form error:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fluff-sky/30 to-transparent" />
      <div className="absolute inset-0 dots-pattern opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-fluff-sky/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 left-0 w-64 h-64 bg-fluff-accent/8 rounded-full blur-3xl pointer-events-none" />

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
            <span>👋</span>
            <span className="text-sm font-bold text-fluff-navy">Don't Be Shy!</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-fluff-navy mb-4">
            Say <span className="gradient-text-brand">Hello</span> 👋
          </h2>
          <p className="text-lg text-fluff-navy/60 max-w-xl mx-auto font-semibold">
            Got an idea? A problem to solve? Just want to chat about cats and code?
            We're always happy to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Info Cards */}
            {[
              {
                icon: Mail,
                emoji: '📬',
                label: 'Email Us',
                value: 'hello@fluffballsoftware.com',
                sub: 'We reply as soon as possible',
                color: 'border-fluff-sky/30',
              },
              {
                icon: MessageSquare,
                emoji: '💬',
                label: 'Let\'s Chat',
                value: 'Book a free discovery call',
                sub: '30 mins, no obligation',
                color: 'border-fluff-mint/30',
              },
              {
                icon: MapPin,
                emoji: '📍',
                label: 'Based In',
                value: 'South Coast & London',
                sub: 'From Bournemouth to the Big Smoke',
                color: 'border-fluff-accent/30',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`glass-card rounded-2xl p-5 border ${item.color} shadow-card flex items-start gap-4`}
                >
                  <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                  <div>
                    <p className="text-xs font-bold text-fluff-navy/50 uppercase tracking-wide mb-1">{item.label}</p>
                    <p className="font-bold text-fluff-navy text-sm">{item.value}</p>
                    <p className="text-xs text-fluff-navy/50 font-semibold mt-0.5">{item.sub}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Fun message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="glass-card rounded-2xl p-5 border border-fluff-gold/30 bg-fluff-gold/5"
            >
              <p className="text-2xl mb-2">🐱</p>
              <p className="text-sm font-bold text-fluff-navy leading-relaxed">
                "Every great project starts with a single conversation. Or sometimes just 'hi'. Either works."
              </p>
              <p className="text-xs text-fluff-navy/50 font-semibold mt-2">— The Fluff Ball Team</p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-3xl p-8 md:p-10 shadow-fluff-lg border border-fluff-sky/20">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle2 className="w-16 h-16 text-fluff-mint mx-auto mb-4" />
                  <h3 className="font-display text-3xl text-fluff-navy mb-3">Message Sent! 🎉</h3>
                  <p className="text-fluff-navy/60 font-semibold">
                    Thanks for reaching out! We'll be in touch soon. In the meantime, go pet a cat. 🐱
                  </p>
                </motion.div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-semibold">
                      Something went wrong. Please try again or email us directly at hello@fluffballsoftware.com.
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-bold text-fluff-navy mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        placeholder="Your name here 👋"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-fluff-sky/20 bg-white/60 text-fluff-navy font-semibold placeholder:text-fluff-navy/30 focus:border-fluff-sky focus:outline-none focus:bg-white transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-bold text-fluff-navy mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-fluff-sky/20 bg-white/60 text-fluff-navy font-semibold placeholder:text-fluff-navy/30 focus:border-fluff-sky focus:outline-none focus:bg-white transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="block text-sm font-bold text-fluff-navy mb-1.5">
                      What Are You After?
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-fluff-sky/20 bg-white/60 text-fluff-navy font-semibold focus:border-fluff-sky focus:outline-none focus:bg-white transition-all duration-200 cursor-pointer"
                    >
                      <option value="">Pick a service (or don't, that's fine) 🤷</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-bold text-fluff-navy mb-1.5">
                      Tell Us More *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="What are you building? What problems are you trying to solve? The weirder the better 🎨"
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-fluff-sky/20 bg-white/60 text-fluff-navy font-semibold placeholder:text-fluff-navy/30 focus:border-fluff-sky focus:outline-none focus:bg-white transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    id="contact-submit"
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-shine w-full flex items-center justify-center gap-3 px-8 py-4 bg-fluff-navy text-white font-bold rounded-xl shadow-navy hover:bg-fluff-sky transition-all duration-300 text-lg disabled:opacity-60"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending your message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-fluff-navy/40 font-semibold">
                    No spam. No newsletters. Just genuine replies from real humans. 🐾
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

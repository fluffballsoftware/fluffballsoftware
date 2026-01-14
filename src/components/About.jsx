import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 relative z-10 bg-black/20">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex-1"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Innovating from <br />
                        <span className="text-vyla-secondary">Bournemouth</span>
                    </h2>
                    <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                        <p>
                            Vyla was founded with a singular mission: to demystify Artificial Intelligence for businesses and unlock its true potential.
                        </p>
                        <p>
                            Based in the coastal tech hub of Bournemouth, UK, we combine the tranquility of our surroundings with the fast-paced evolution of AI. We believe that great technology should be intuitive, powerful, and accessible.
                        </p>
                        <div className="flex items-center gap-2 text-vyla-primary font-medium">
                            <MapPin className="w-5 h-5" />
                            <span>Dorset, United Kingdom</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex-1 w-full"
                >
                    {/* Decorative Image/Pattern Area */}
                    <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden bg-gradient-to-tr from-vyla-dark to-vyla-card border border-white/10 p-1">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548695602-53ecb1e2a6d8?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay hover:scale-110 transition-transform duration-1000 grayscale hover:grayscale-0"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                        <div className="absolute bottom-6 left-6 text-white text-sm font-mono tracking-widest uppercase">
                            Est. {new Date().getFullYear()}
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;

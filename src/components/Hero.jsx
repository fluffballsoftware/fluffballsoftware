import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
            <div className="container mx-auto max-w-6xl relative z-10 flex flex-col md:flex-row items-center gap-12">

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
                    >
                        <Sparkles className="w-4 h-4 text-vyla-secondary" />
                        <span className="text-sm font-medium text-white/80">Next-Gen AI Consultancy</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold leading-tight mb-6"
                    >
                        Igniting Your <br />
                        <span className="bg-gradient-to-r from-vyla-primary via-vyla-flame to-vyla-secondary bg-clip-text text-transparent transform">
                            Digital Future
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-white/60 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed"
                    >
                        Vyla transforms businesses through intelligent automation and cutting-edge AI solutions.
                        Based in Bournemouth, innovating globally.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
                    >
                        <a
                            href="#contact"
                            className="group px-8 py-4 rounded-full bg-gradient-to-r from-vyla-primary to-vyla-flame font-bold text-white shadow-lg shadow-vyla-primary/25 hover:shadow-vyla-primary/40 hover:scale-105 transition-all flex items-center gap-2"
                        >
                            Start Transformation
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#services"
                            className="px-8 py-4 rounded-full bg-white/5 border border-white/10 font-bold text-white hover:bg-white/10 transition-all backdrop-blur-sm"
                        >
                            Explore Services
                        </a>
                    </motion.div>
                </div>

                {/* Visual Content (Abstract Interactive) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 w-full max-w-[500px] h-[500px] relative"
                >
                    {/* Glass Card Container */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl border border-white/10 backdrop-blur-2xl shadow-2xl p-8 flex items-center justify-center overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-b from-vyla-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                        {/* Inner Content - representing 'AI' */}
                        <div className="relative z-10 grid grid-cols-2 gap-4 w-full h-full">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="bg-black/40 rounded-2xl border border-white/5 p-4 flex flex-col justify-end group/card hover:bg-white/5 transition-colors">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-vyla-primary to-vyla-secondary mb-3 opacity-80" />
                                    <div className="h-2 w-20 bg-white/20 rounded-full mb-2" />
                                    <div className="h-2 w-12 bg-white/10 rounded-full" />
                                </div>
                            ))}

                            {/* Center pulsing core */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-vyla-primary/20 rounded-full blur-xl animate-pulse" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Rocket, BarChart, Code, Shield } from 'lucide-react';

const services = [
    {
        icon: <Brain className="w-8 h-8 text-vyla-primary" />,
        title: "AI Strategy & Consulting",
        description: "Navigate the AI landscape with a tailored roadmap designed for your business goals."
    },
    {
        icon: <Code className="w-8 h-8 text-vyla-flame" />,
        title: "Custom LLM Development",
        description: "Fine-tuned models trained on your data to solve specific enterprise challenges."
    },
    {
        icon: <Cpu className="w-8 h-8 text-vyla-secondary" />,
        title: "Process Automation",
        description: "End-to-end automation workflows that reduce manual effort and error rates."
    },
    {
        icon: <BarChart className="w-8 h-8 text-purple-400" />,
        title: "Data Analytics",
        description: "Turn raw data into actionable insights with predictive modeling and visualization."
    },
    {
        icon: <Rocket className="w-8 h-8 text-pink-500" />,
        title: "Product Integration",
        description: "Seamlessly embed AI capabilities into your existing software ecosystem."
    },
    {
        icon: <Shield className="w-8 h-8 text-cyan-400" />,
        title: "Ethical AI & Compliance",
        description: "Ensure your AI solutions are safe, unbiased, and compliant with regulations."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 relative z-10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Our Expertise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-white/60 max-w-2xl mx-auto"
                    >
                        Comprehensive AI solutions tailored to modern enterprise needs.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-sm transition-all hover:translate-y-[-5px]"
                        >
                            <div className="mb-6 bg-white/5 p-4 rounded-xl inline-block group-hover:bg-white/10 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-vyla-primary transition-colors">{service.title}</h3>
                            <p className="text-white/60 leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

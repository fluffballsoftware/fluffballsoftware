import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative z-10 pb-40">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 md:p-12 backdrop-blur-md">

                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Start Your Journey</h2>
                        <p className="text-white/60">Ready to ignite your business? Get in touch with us.</p>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/70 ml-1">Name</label>
                                <div className="relative">
                                    <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-vyla-primary/50 transition-colors text-white" placeholder="John Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/70 ml-1">Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-3.5 w-5 h-5 text-white/30" />
                                    <input type="email" className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-vyla-primary/50 transition-colors text-white" placeholder="john@example.com" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/70 ml-1">Message</label>
                            <div className="relative">
                                <MessageSquare className="absolute left-4 top-3.5 w-5 h-5 text-white/30" />
                                <textarea className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-3 min-h-[150px] focus:outline-none focus:border-vyla-primary/50 transition-colors text-white resize-none" placeholder="Tell us about your project..."></textarea>
                            </div>
                        </div>

                        <div className="flex justify-center pt-4">
                            <button className="px-8 py-4 w-full md:w-auto rounded-full bg-gradient-to-r from-vyla-primary to-vyla-flame font-bold text-white shadow-lg shadow-vyla-primary/25 hover:shadow-vyla-primary/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                                <Send className="w-5 h-5" />
                                <span>Send Message</span>
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Contact;

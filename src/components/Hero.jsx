import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import heroImage from '../assets/hero.jpg';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#011812] pt-24 md:pt-32">
            {/* Background Overlay Image */}
            <div className="absolute inset-0 z-0">
                <img src={heroImage} alt="Background" className="w-full h-full object-cover opacity-15 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#011812] via-transparent to-[#011812]/80" />
            </div>

            {/* Decorative Dynamic Glows */}
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#d97706]/15 rounded-full blur-[120px] -z-0 animate-blob" />
            <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-emerald-900/20 rounded-full blur-[100px] -z-0 animate-blob" style={{ animationDelay: '2s' }} />

            <div className="container-wide mx-auto relative z-10 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center"
                >
                    {/* Main Heading */}
                    <motion.h1
                        className="font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-0 leading-tight tracking-wide drop-shadow-2xl"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        अमरज्योत नवतरुण <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#d97706]">ग्रामविकास सेवा संस्था</span>
                    </motion.h1>

                    {/* Subtitle Line */}
                    <motion.div
                        className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-[#d97706]/70 to-transparent mt-2 mb-3"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />

                    <motion.p
                        className="text-xl md:text-3xl text-stone-200 tracking-wider mb-4 font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        ग्रामीण विकास • शिक्षण • आरोग्य • रोजगार • संस्कृती
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                    >
                        <a
                            href="#initiatives"
                            className="px-8 py-4 bg-gradient-to-r from-[#d97706] to-[#f59e0b] text-white rounded-full font-bold text-xl transition-all hover:scale-105 flex items-center justify-center gap-3 animate-glow"
                        >
                            उपक्रम पहा
                            <ArrowRight size={24} />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-xl hover:bg-white hover:text-[#011812] transition-all hover:scale-105 flex items-center justify-center"
                        >
                            संपर्क करा
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

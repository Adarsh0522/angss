import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, MapPin } from 'lucide-react';
import aboutImage from '../assets/about.jpg';

const About = () => {
    return (
        <section id="about" className="py-24 bg-cream relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-white to-transparent opacity-60 z-0 pointer-events-none" />
            
            <div className="container-wide mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative rounded-[2rem] overflow-hidden h-[500px] shadow-[0_20px_50px_rgba(2,44,34,0.1)] group"
                    >
                        <img src={aboutImage} alt="Community" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#022c22]/40 to-transparent mix-blend-multiply" />

                        {/* Registration Badge Floating */}
                        <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl max-w-xs border border-white/50 animate-float">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                                <p className="text-xs uppercase tracking-widest text-stone-500 font-bold">नोंदणी क्रमांक</p>
                            </div>
                            <p className="font-bold text-2xl text-forest tracking-wide">F-5898 / 2025</p>
                        </div>
                    </motion.div>

                    {/* Right: Trust Info */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block">आमच्याबद्दल</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-forest mb-6 leading-tight">
                                ग्रामीण समुदायांमध्ये <br className="hidden md:block"/> आशेची नवी किरणे
                            </h2>
                            <p className="text-lg text-stone-600 mb-4 leading-relaxed">
                                अमरज्योत ग्रामविकास ट्रस्ट शिक्षण, आरोग्यसेवा, रोजगार व उपजीविका, पर्यावरण संवर्धन, क्रीडा आणि ग्रामविकासाच्या माध्यमातून आर्थिकदृष्ट्या दुर्बल ग्रामीण समुदायांच्या उन्नतीसाठी कार्यरत आहे.
                            </p>
                            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                                प्रत्येक गरजू व्यक्तीला शिकण्याची, प्रगती करण्याची आणि सन्मानाने चांगले भविष्य घडवण्याची समान संधी मिळावी, हे आमचे ध्येय आहे.
                            </p>
                        </div>

                        {/* Address Block */}
                        <div className="bg-forest p-8 rounded-3xl text-white relative overflow-hidden shadow-2xl shadow-forest/20 group hover:shadow-forest/30 transition-shadow">
                            <div className="absolute top-0 right-0 p-32 bg-gradient-to-bl from-gold/30 to-transparent rounded-full blur-[60px] -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-110" />

                            <div className="relative z-10 flex items-start gap-5">
                                <div className="p-4 bg-white/10 backdrop-blur rounded-2xl shrink-0">
                                    <MapPin className="text-gold" size={28} />
                                </div>
                                <div className="tracking-wide space-y-1">
                                    <p className="text-xs uppercase text-gold/80 tracking-widest mb-2 font-bold">नोंदणीकृत कार्यालय</p>
                                    <p className="text-xl font-bold mb-1">श्री विष्णु कृष्णा आग्रे.</p>
                                    <p className="text-lg text-white/80">20/अ, नारसिंगे, पोस्ट- राई,</p>
                                    <p className="text-lg text-white/80">ता. जि. रत्नागिरी,</p>
                                    <p className="text-lg font-bold text-gold">महाराष्ट्र – 415620</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-forest bg-white/50 backdrop-blur rounded-full px-6 py-4 w-fit border border-stone-200/50">
                            <div className="flex items-center gap-2">
                                <CheckCircle size={18} className="text-gold" />
                                <span>नोंदणीकृत सार्वजनिक धर्मादाय ट्रस्ट</span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-stone-300 hidden sm:block" />
                            <div className="flex items-center gap-2">
                                <CheckCircle size={18} className="text-gold" />
                                <span>80G प्रमाणित (प्रस्तावित)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

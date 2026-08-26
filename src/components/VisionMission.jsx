import React from 'react';
import { motion } from 'framer-motion';
import { Flame, BookOpen, Leaf, Droplet, Handshake } from 'lucide-react';
import { cn } from '../lib/utils';

const MissionCard = ({ title, icon: Icon, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 group cursor-default hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 shadow-xl"
    >
        <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-500 group-hover:shadow-[0_0_20px_rgba(217,119,6,0.5)]">
            <Icon className="text-gold group-hover:text-white transition-colors duration-500" size={32} />
        </div>
        <h3 className="font-bold text-2xl text-white mb-4 group-hover:text-gold transition-colors">{title}</h3>
        <p className="text-sm text-stone-300 leading-relaxed group-hover:text-white transition-colors">{desc}</p>
    </motion.div>
);

const VisionMission = () => {
    return (
        <section className="py-32 relative overflow-hidden bg-[#011812]">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-900/30 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none animate-blob" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px] translate-y-1/2 pointer-events-none animate-blob" style={{ animationDelay: '3s' }} />

            <div className="container-wide mx-auto space-y-24 relative z-10">

                {/* Vision Section */}
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 text-center lg:text-left">
                        <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block animate-pulse">व्हिजन २०३०</span>
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-md">सशक्त गावांची उभारणी, <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-amber-300">एकत्रितपणे</span></h2>
                        <div className="h-1.5 w-24 bg-gradient-to-r from-gold to-transparent rounded-full mb-8 mx-auto lg:mx-0" />
                    </div>

                    <motion.div
                        className="lg:col-span-7"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="p-10 md:p-12 bg-white/5 backdrop-blur-2xl rounded-[3rem] border border-white/10 relative overflow-hidden group shadow-2xl">
                            {/* Background Pattern */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/20 rounded-full blur-3xl group-hover:bg-gold/30 transition-all duration-700" />

                            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                                <div className="p-5 bg-gold/20 backdrop-blur-md rounded-2xl border border-gold/30 shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(217,119,6,0.2)]">
                                    <Flame className="text-gold" size={48} />
                                </div>
                                <div>
                                    <p className="text-xl md:text-2xl text-stone-200 leading-relaxed font-medium">
                                        आम्ही अशा कोकणाची कल्पना करतो जिथे प्रत्येक मुलाला शिक्षणाची संधी मिळेल, प्रत्येक शेतकऱ्याला शाश्वत संधी मिळतील, प्रत्येक कुटुंबाला आरोग्यसेवा उपलब्ध होईल आणि प्रत्येक गाव सन्मान, स्वावलंबन आणि आशेने विकसित होईल.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Mission Section */}
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <MissionCard title="शिक्षण" desc="शिष्यवृत्ती, मार्गदर्शन आणि शिक्षणाच्या संधींच्या माध्यमातून गरजू ग्रामीण विद्यार्थ्यांना सहकार्य करणे." icon={BookOpen} delay={0.1} />
                        <MissionCard title="शेती" desc="शाश्वत शेतीला प्रोत्साहन देणे आणि नाविन्यपूर्ण ग्रामीण उद्योजकतेला चालना देणे." icon={Leaf} delay={0.2} />
                        <MissionCard title="जलसंधारण" desc="गावाच्या दीर्घकालीन शाश्वततेसाठी समुदायाच्या सहभागातून जलसंधारण प्रकल्प विकसित करणे." icon={Droplet} delay={0.3} />
                        <MissionCard title="ग्रामविकास" desc="आरोग्य, जनजागृती, रोजगार आणि सामाजिक उपक्रमांच्या माध्यमातून गावांना अधिक सक्षम बनवणे." icon={Handshake} delay={0.4} />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default VisionMission;

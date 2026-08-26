import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, HeartPulse, Briefcase, Trophy, Leaf, Home } from 'lucide-react';
import { cn } from '../lib/utils';

const objectives = [
    {
        title: "शिक्षण",
        icon: BookOpen,
        desc: "ग्रामीण विद्यार्थ्यांसाठी शिष्यवृत्ती, शैक्षणिक साहित्य, मार्गदर्शन आणि शिकण्याच्या संधी उपलब्ध करून देणे.",
        gradient: "from-amber-500/20 to-amber-500/5",
        iconColor: "text-amber-400",
        bg: "bg-white/5 border-white/10"
    },
    {
        title: "आरोग्यसेवा",
        icon: HeartPulse,
        desc: "आर्थिकदृष्ट्या दुर्बल कुटुंबांसाठी वैद्यकीय मदत, आरोग्य शिबिरे आणि आवश्यक सहकार्य.",
        gradient: "from-emerald-500/20 to-emerald-500/5",
        iconColor: "text-emerald-400",
        bg: "bg-white/5 border-white/10"
    },
    {
        title: "रोजगार",
        icon: Briefcase,
        desc: "ग्रामीण युवकांसाठी कौशल्य विकास, उद्योजकता आणि उपजीविकेच्या संधी निर्माण करणे.",
        gradient: "from-amber-500/20 to-amber-500/5",
        iconColor: "text-amber-400",
        bg: "bg-white/5 border-white/10"
    },
    {
        title: "क्रीडा आणि संस्कृती",
        icon: Trophy,
        desc: "क्रीडा व सांस्कृतिक उपक्रमांना प्रोत्साहन देणे आणि ग्रामीण भागातील गुणवत्तेला वाव देणे.",
        gradient: "from-emerald-500/20 to-emerald-500/5",
        iconColor: "text-emerald-400",
        bg: "bg-white/5 border-white/10"
    },
    {
        title: "पर्यावरण",
        icon: Leaf,
        desc: "वृक्षारोपण, जलसंधारण आणि पर्यावरण विषयक जनजागृतीचे उपक्रम राबवणे.",
        gradient: "from-amber-500/20 to-amber-500/5",
        iconColor: "text-amber-400",
        bg: "bg-white/5 border-white/10"
    },
    {
        title: "ग्रामविकास",
        icon: Home,
        desc: "शाश्वत विकासाला पाठबळ देणे आणि ग्रामीण समुदायांच्या जीवनमानात सुधारणा घडवणे.",
        gradient: "from-emerald-500/20 to-emerald-500/5",
        iconColor: "text-emerald-400",
        bg: "bg-white/5 border-white/10"
    }
];

const Objectives = () => {
    return (
        <section id="objectives" className="py-24 bg-[#011812] relative overflow-hidden">
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-900/20 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="container-wide mx-auto relative z-10">
                <div className="max-w-2xl mb-16">
                    <span className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block">आमची कार्यक्षेत्रे</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                        आमची कार्यक्षेत्रे
                    </h2>
                    <p className="text-stone-300 text-lg">
                        अधिक सक्षम, निरोगी आणि स्वावलंबी ग्रामीण समुदाय घडवण्याच्या आमच्या बांधिलकीतून प्रत्येक उपक्रमाची प्रेरणा मिळते.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {objectives.map((obj, i) => (
                        <motion.div
                            key={obj.title}
                            className={cn(
                                "p-8 rounded-3xl transition-all duration-500 group relative overflow-hidden border backdrop-blur-md hover:-translate-y-2 shadow-lg",
                                obj.bg
                            )}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {/* Hover Gradient Background */}
                            <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500", obj.gradient)} />
                            
                            <div className="relative z-10">
                                <div className="mb-6">
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 bg-white/5 group-hover:bg-white/10">
                                        <obj.icon size={28} className={obj.iconColor} />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-3 text-white">{obj.title}</h3>
                                <p className="text-base leading-relaxed text-stone-400 group-hover:text-stone-200 transition-colors duration-300">
                                    {obj.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Objectives;

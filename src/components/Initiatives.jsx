import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Sprout, Heart, Briefcase } from 'lucide-react';
import { cn } from '../lib/utils';

const initiatives = [
    {
        status: "सुरू आहे",
        title: "शैक्षणिक सहाय्य",
        desc: "शिष्यवृत्ती, शैक्षणिक साहित्य आणि मार्गदर्शनाच्या माध्यमातून गरजू ग्रामीण विद्यार्थ्यांना सहकार्य करणे.",
        icon: BookOpen,
        color: "from-amber-400 to-amber-600",
        badgeColor: "text-amber-700 bg-white/60 border-amber-200",
        cardBg: "bg-amber-100 border-amber-200 hover:bg-amber-200/60"
    },
    {
        status: "सक्रिय",
        title: "शेतकरी मार्गदर्शन",
        desc: "नैसर्गिक शेती, गोआधारित उद्योजकता आणि शाश्वत शेतीविषयी जनजागृती कार्यक्रम आयोजित करणे.",
        icon: Sprout,
        color: "from-emerald-500 to-emerald-700",
        badgeColor: "text-emerald-700 bg-white/60 border-emerald-200",
        cardBg: "bg-emerald-100 border-emerald-200 hover:bg-emerald-200/60"
    },
    {
        status: "नियोजित",
        title: "महिला आरोग्य जनजागृती",
        desc: "किशोरवयीन मुली आणि महिलांसाठी आरोग्य, स्वच्छता आणि व्यक्तिमत्त्व विकासावर आधारित जनजागृती सत्रे आयोजित करणे.",
        icon: Heart,
        color: "from-rose-400 to-rose-600",
        badgeColor: "text-rose-700 bg-white/60 border-rose-200",
        cardBg: "bg-rose-100 border-rose-200 hover:bg-rose-200/60"
    },
    {
        status: "नियोजन सुरू",
        title: "ग्रामीण उद्योजकता",
        desc: "कुक्कुटपालन आणि इतर घरगुती व्यवसायांसारखे छोटे उद्योग सुरू करण्यासाठी ग्रामस्थांना सहकार्य करणे.",
        icon: Briefcase,
        color: "from-indigo-500 to-indigo-700",
        badgeColor: "text-indigo-700 bg-white/60 border-indigo-200",
        cardBg: "bg-indigo-100 border-indigo-200 hover:bg-indigo-200/60"
    }
];

const Initiatives = () => {
    return (
        <section id="initiatives" className="py-24 bg-cream relative">
            <div className="container-wide mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block">आमचे उपक्रम</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-forest mb-6">
                        ध्येयातून कृतीकडे
                    </h2>
                    <p className="text-lg text-stone-600">
                        कोकणातील ग्रामीण समुदायांसाठी शाश्वत संधी निर्माण करण्याच्या आमच्या बांधिलकीचे प्रतिबिंब प्रत्येक उपक्रमातून दिसते.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {initiatives.map((init, i) => (
                        <motion.div
                            key={init.title}
                            className={cn(
                                "rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 group border hover:-translate-y-2 relative overflow-hidden",
                                init.cardBg
                            )}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-stone-100 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-150" />
                            
                            <div className="relative z-10">
                                <div className="mb-8 flex justify-between items-start">
                                    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white transition-all duration-500 group-hover:scale-110 shadow-lg bg-gradient-to-br", init.color)}>
                                        <init.icon size={28} />
                                    </div>
                                    <span className={cn("text-xs font-bold px-3 py-1.5 rounded-full border shadow-sm", init.badgeColor)}>
                                        {init.status}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-forest mb-4 group-hover:text-gold transition-colors">{init.title}</h3>
                                <p className="text-base text-stone-600 leading-relaxed">
                                    {init.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Initiatives;

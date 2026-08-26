import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Lightbulb } from 'lucide-react';
import { cn } from '../lib/utils';

const waysToInvolve = [
    {
        title: "व्हर्च्युअल पालक बना",
        desc: "गरजू ग्रामीण विद्यार्थ्याच्या पदवी शिक्षणाचा तीन वर्षांपर्यंतचा खर्च स्वीकारून त्याच्या शिक्षणप्रवासाला आधार द्या. तुमच्या मदतीतून शिक्षण शुल्क, पुस्तके, शैक्षणिक साहित्य आणि इतर शैक्षणिक गरजा पूर्ण करण्यास मदत होऊ शकते. यामुळे विद्यार्थ्याला सन्मानाने आणि आत्मविश्वासाने उच्च शिक्षण पूर्ण करण्याची संधी मिळेल.",
        icon: GraduationCap,
        btnText: "विद्यार्थ्याच्या शिक्षणाचा खर्च स्वीकारा",
        gradient: "from-amber-400 to-amber-600",
        shadow: "shadow-amber-900/20"
    },
    {
        title: "स्वयंसेवक बना",
        desc: "शैक्षणिक कार्यक्रम, जनजागृती मोहिमा, आरोग्य शिबिरे, पर्यावरणविषयक उपक्रम आणि ग्रामविकासाच्या विविध उपक्रमांमध्ये आपला वेळ आणि कौशल्य देऊन सहभागी व्हा.",
        icon: Users,
        btnText: "स्वयंसेवक म्हणून सहभागी व्हा",
        gradient: "from-emerald-500 to-emerald-700",
        shadow: "shadow-emerald-900/20"
    },
    {
        title: "आपले ज्ञान शेअर करा",
        desc: "शेती, शिक्षण, आरोग्य, उद्योजकता, वित्त, तंत्रज्ञान किंवा इतर कोणत्याही क्षेत्रातील आपले कौशल्य असल्यास, ग्रामीण समुदायांना सक्षम करण्यासाठी मार्गदर्शन, प्रशिक्षण किंवा बौद्धिक सत्र घेण्यासाठी आम्ही आपले स्वागत करतो.",
        icon: Lightbulb,
        btnText: "आपले कौशल्य शेअर करा",
        gradient: "from-amber-500 to-orange-600",
        shadow: "shadow-orange-900/20"
    }
];

const GetInvolved = () => {
    return (
        <section id="get-involved" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent pointer-events-none" />
            
            <div className="container-wide mx-auto relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <span className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block">आमच्या कार्यात सहभागी व्हा</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-forest mb-6">
                        तुमचे प्रत्येक योगदान उद्याचा दिवस अधिक चांगला घडवते
                    </h2>
                    <p className="text-lg text-stone-600 leading-relaxed">
                        समुदाय एकत्र येऊन कार्य करतो तेव्हा शाश्वत ग्रामीण विकास शक्य आहे, असा अमरज्योत ग्रामविकास ट्रस्टचा विश्वास आहे. तुम्ही आर्थिक योगदान द्या, स्वयंसेवक म्हणून वेळ द्या किंवा तुमचे ज्ञान व कौशल्य द्या, तुमचे सहकार्य भविष्यातील पिढ्यांसाठी शाश्वत संधी निर्माण करण्यास मदत करते.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {waysToInvolve.map((way, i) => (
                        <motion.div
                            key={way.title}
                            className={cn("rounded-[2.5rem] p-10 bg-white border border-stone-100 flex flex-col group relative overflow-hidden transition-all duration-500 hover:-translate-y-3", `hover:shadow-2xl hover:${way.shadow}`)}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {/* Card Top Accent */}
                            <div className={cn("absolute top-0 left-0 w-full h-2 bg-gradient-to-r", way.gradient)} />

                            <div className={cn("w-20 h-20 rounded-3xl flex items-center justify-center mb-8 bg-gradient-to-br text-white shadow-lg transition-transform duration-500 group-hover:scale-110", way.gradient)}>
                                <way.icon size={36} />
                            </div>
                            <h3 className="font-bold text-3xl text-forest mb-4">{way.title}</h3>
                            <p className="text-stone-600 leading-relaxed flex-1 mb-10">
                                {way.desc}
                            </p>
                            <a
                                href="#contact"
                                className={cn(
                                    "inline-flex justify-center items-center px-6 py-4 text-white font-bold rounded-full transition-all duration-300 w-full text-center hover:scale-105 shadow-md bg-gradient-to-r",
                                    way.gradient
                                )}
                            >
                                {way.btnText}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GetInvolved;

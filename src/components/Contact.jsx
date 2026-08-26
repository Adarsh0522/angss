import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, Phone, Instagram, Facebook, Twitter, Send } from 'lucide-react';
import { cn } from '../lib/utils';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => setFormState({ ...formState, [e.target.name]: e.target.value });

    return (
        <section id="contact" className="py-32 bg-[#011812] text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-forest-light/20 to-transparent rounded-full blur-[100px] opacity-50 pointer-events-none" />

            <div className="container-wide mx-auto grid lg:grid-cols-2 gap-24 relative z-10">

                {/* Left: Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">संपर्क साधा</span>
                    <h2 className="text-5xl md:text-6xl font-bold mb-10 leading-tight">
                        ग्रामीण विकासासाठी चला <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-amber-300">एकत्र काम करूया</span>
                    </h2>
                    <p className="text-lg text-stone-300 leading-relaxed mb-12 max-w-lg">
                        आपल्याला स्वयंसेवक म्हणून सहभागी व्हायचे असेल, योगदान द्यायचे असेल, सहकार्य करायचे असेल किंवा आमच्या उपक्रमांबद्दल अधिक जाणून घ्यायचे असेल, तर आम्हाला नक्की संपर्क करा.
                    </p>

                    <div className="space-y-10 mb-16">
                        <div className="flex items-start gap-6 group">
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-gold/20 group-hover:border-gold/30 transition-all duration-300">
                                <MapPin className="text-gold" size={28} />
                            </div>
                            <div>
                                <p className="font-bold text-xl mb-2 text-white group-hover:text-gold transition-colors">ठिकाण</p>
                                <p className="text-stone-400 leading-relaxed max-w-xs text-lg">
                                    रत्नागिरी, कोकण विभाग, महाराष्ट्र, भारत
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-gold/20 group-hover:border-gold/30 transition-all duration-300">
                                <Mail className="text-gold" size={28} />
                            </div>
                            <div>
                                <p className="font-bold text-xl mb-2 text-white group-hover:text-gold transition-colors">ई-मेल</p>
                                <a href="mailto:info@amarjyottrust.org" className="text-stone-400 hover:text-white transition-colors text-lg">
                                    info@amarjyottrust.org
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-gold/20 group-hover:border-gold/30 transition-all duration-300">
                                <Phone className="text-gold" size={28} />
                            </div>
                            <div>
                                <p className="font-bold text-xl mb-2 text-white group-hover:text-gold transition-colors">दूरध्वनी</p>
                                <div className="flex flex-col gap-1 text-lg">
                                    <a href="tel:+919819622370" className="text-stone-400 hover:text-white transition-colors">
                                        +91 9819622370
                                    </a>
                                    <a href="tel:+919011270088" className="text-stone-400 hover:text-white transition-colors">
                                        +91 9011270088
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-6 items-center">
                        {[Instagram, Twitter, Facebook].map((Icon, i) => (
                            <a key={i} href="#" className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:-translate-y-1 transition-all duration-300 shadow-lg">
                                <Icon size={24} />
                            </a>
                        ))}
                        <span className="font-bold text-stone-400 tracking-wider ml-4">@amarjyottrust</span>
                    </div>
                </motion.div>

                {/* Right: Map & Form */}
                <motion.div
                    className="space-y-10"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {/* Placeholder Map */}
                    <div className="w-full h-[250px] bg-forest rounded-3xl overflow-hidden border border-white/10 relative group shadow-2xl">
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                            <span className="px-6 py-3 bg-black/60 backdrop-blur-md rounded-xl text-sm font-bold tracking-widest text-stone-300 border border-white/10">Google Maps Integration</span>
                        </div>
                        <div className="w-full h-full bg-forest-light flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                            <MapPin size={64} className="text-gold animate-bounce" />
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-xl p-10 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl">
                        <h3 className="font-bold text-3xl mb-8 flex items-center gap-3">
                            संदेश पाठवा
                            <Send className="text-gold" size={24} />
                        </h3>
                        <form className="space-y-8 relative">
                            <div className="relative group">
                                <input
                                    type="text" placeholder="तुमचे नाव"
                                    className="w-full bg-transparent border-b-2 border-stone-600/50 py-4 text-lg focus:outline-none focus:border-gold transition-colors text-white placeholder-stone-500 peer"
                                />
                                <div className="absolute bottom-0 left-0 h-0.5 bg-gold w-0 peer-focus:w-full transition-all duration-500" />
                            </div>
                            <div className="relative group">
                                <input
                                    type="email" placeholder="ई-मेल पत्ता"
                                    className="w-full bg-transparent border-b-2 border-stone-600/50 py-4 text-lg focus:outline-none focus:border-gold transition-colors text-white placeholder-stone-500 peer"
                                />
                                <div className="absolute bottom-0 left-0 h-0.5 bg-gold w-0 peer-focus:w-full transition-all duration-500" />
                            </div>
                            <button className="w-full py-5 bg-gradient-to-r from-gold to-amber-500 rounded-2xl font-bold text-white text-xl mt-4 hover:shadow-[0_0_30px_rgba(217,119,6,0.5)] transition-all duration-300 transform hover:-translate-y-1">
                                पाठवा
                            </button>
                        </form>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;

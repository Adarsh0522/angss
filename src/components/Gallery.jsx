import React from 'react';
import { motion } from 'framer-motion';
import galleryImage from '../assets/hero.jpg';

const Gallery = () => {
    return (
        <section id="gallery" className="py-24 bg-stone-50 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-stone-100 to-transparent pointer-events-none" />
            <div className="container-wide mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block">कार्यक्रम आणि गॅलरी</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-forest mb-6">
                        बदलाची प्रेरणा देणारे क्षण
                    </h2>
                    <p className="text-lg text-stone-600">
                        अधिक सक्षम गाव आणि सशक्त ग्रामीण समुदाय घडवण्याच्या दिशेने प्रत्येक कार्यक्रम हे एक महत्त्वाचे पाऊल आहे.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Immersive Event Card */}
                    <motion.div
                        className="relative rounded-3xl overflow-hidden h-[450px] group shadow-lg cursor-pointer"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <img src={galleryImage} alt="Event" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#011812]/95 via-[#011812]/40 to-transparent transition-opacity duration-500 opacity-80 group-hover:opacity-100" />
                        
                        {/* Content Reveal */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500 translate-y-8 group-hover:translate-y-0">
                            <span className="text-xs font-bold px-3 py-1.5 bg-gold/90 text-white rounded-full w-fit mb-4 backdrop-blur-md">
                                २०२५ • कोकण विभाग
                            </span>
                            <h3 className="font-bold text-2xl text-white mb-3 leading-snug drop-shadow-md">
                                गोआधारित उद्योजकता आणि नैसर्गिक शेती मार्गदर्शन
                            </h3>
                            <p className="text-sm text-stone-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                गोआधारित व्यवसाय आणि रसायनमुक्त शेतीच्या माध्यमातून ग्रामीण उद्योजकतेला प्रोत्साहन देणारा जनजागृती कार्यक्रम.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;

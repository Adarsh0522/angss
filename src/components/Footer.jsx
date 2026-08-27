import React from "react";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import { cn } from "../lib/utils";

const Footer = () => {
  return (
    <footer className="bg-[#011812] pt-24 pb-6 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 w-[1000px] h-[500px] bg-gradient-to-t from-gold/5 to-transparent -translate-x-1/2 translate-y-1/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-wide mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-16">
          {/* Brand */}
          <div className="max-w-md">
            <a href="#" className="flex items-center gap-4 mb-10 group w-fit">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold to-amber-600 text-white flex items-center justify-center font-bold text-xl shadow-[0_0_20px_rgba(217,119,6,0.3)] group-hover:shadow-[0_0_30px_rgba(217,119,6,0.5)] transition-shadow duration-500">
                A
              </div>

              <span className="font-bold text-2xl text-white tracking-widest group-hover:text-gold transition-colors duration-300">
                ANGSS
              </span>
            </a>

            <h3 className="text-3xl font-bold text-white mb-8 leading-tight">
              चला, एकत्र येऊन सक्षम गावे आणि{" "}
              <span className="text-gold">उज्ज्वल भविष्य घडवूया.</span>
            </h3>

            {/* Social Media - Currently Hidden */}
            {/* <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:border-gold hover:-translate-y-1 transition-all duration-300 shadow-lg"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div> */}
          </div>

          {/* Links */}
          <div className="flex gap-16 md:gap-24 flex-wrap">
            <div>
              <h4 className="font-bold text-lg text-white mb-8 tracking-wider">
                एक्सप्लोर
              </h4>

              <ul className="space-y-5">
                {[
                  { label: "आमच्याबद्दल", href: "#about" },
                  { label: "ध्येय", href: "#vision" },
                  { label: "आमचे उपक्रम", href: "#initiatives" },
                  { label: "गॅलरी", href: "#gallery" },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-stone-400 hover:text-gold transition-colors block w-fit text-lg"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg text-white mb-8 tracking-wider">
                कायदेशीर
              </h4>

              <ul className="space-y-5">
                {["Privacy Policy", "Terms of Service"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-stone-400 hover:text-gold transition-colors block w-fit text-lg"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-stone-500">
          <p className="mb-4 md:mb-0">
            © 2026 अमरज्योत ग्रामविकास ट्रस्ट. सर्व हक्क राखीव.
          </p>

          <p className="flex items-center gap-2">
            Designed with <span className="text-gold">♥</span> for Rural India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import ContactForm3D from "./ContactForm3D";
import { getTranslation } from "../content";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaWhatsapp, 
  FaHeadset,
  FaShieldAlt,
  FaRocket,
  FaStar,
  FaCrown,
  FaGem
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="Contact visual" className="w-full h-full object-cover" />
  </div>
);

const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const contactRef = useRef(null);
  const cardsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the main container
      gsap.fromTo(contactRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate contact cards with stagger
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(cards,
          { opacity: 0, y: 50, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Animate CTA section
      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating animation for background elements
      gsap.to(".floating-bg", {
        y: -20,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });

    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={contactRef} id="contact" className="relative min-h-screen w-screen bg-gradient-to-br from-black via-black to-black py-20 overflow-hidden">
      {/* Elite Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,212,170,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
      
      {/* Advanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-bg absolute top-20 left-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
        <div className="floating-bg absolute bottom-20 right-10 h-40 w-40 rounded-full bg-green-500/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="floating-bg absolute top-1/2 left-1/2 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="floating-bg absolute top-1/3 right-1/3 h-16 w-16 rounded-full bg-yellow-500/10 blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Premium Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-black/80 via-black/80 to-black/80 backdrop-blur-xl py-24 text-blue-50 sm:overflow-hidden shadow-2xl shadow-blue-500/10">
          
          {/* Elite Background Images */}
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

          <div className="flex flex-col items-center text-center relative z-10">
            {/* Ultra Elite Badge */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-green-500/30 bg-gradient-to-r from-green-500/20 to-blue-500/20 px-6 py-3 text-sm text-green-400 backdrop-blur-sm shadow-lg shadow-green-500/20">
              <FaCrown className="h-4 w-4 text-yellow-400 animate-pulse" />
              <span className="font-semibold">Elite Support 24/7</span>
              <FaGem className="h-4 w-4 text-purple-400 animate-pulse" />
            </div>

            <p className="mb-10 text-sm uppercase text-green-400 font-bold tracking-widest" data-translate-key="contact_subtitle">
            {getTranslation("contact_subtitle")}
          </p>

          <AnimatedTitle
            title="Contact<b>e</b>z-nous"
            className="special-font !md:text-[6.2rem] w-full !text-5xl !font-black !leading-[.9] !text-white"
          />

            <p className="mt-8 mb-12 text-gray-300 max-w-3xl leading-relaxed text-lg" data-translate-key="contact_description">
            {getTranslation("contact_description")}
          </p>

            {/* Ultra Elite Contact Info Cards */}
            <div ref={cardsRef} className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-5xl mx-auto">
              <div className="group p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-sm transition-all duration-700 hover:bg-blue-500/20 hover:border-blue-500/30 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
                <div className="flex justify-center mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-600/20 backdrop-blur-sm transition-all duration-500 group-hover:bg-blue-500/40 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/30 group-hover:rotate-12">
                    <FaPhone className="h-6 w-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">Téléphone</h3>
                <p className="text-base text-gray-300 group-hover:text-gray-200 transition-colors duration-300">+213 06 56 86 58 08</p>
                <div className="mt-4 flex justify-center">
                  <FaStar className="h-4 w-4 text-yellow-400" />
                </div>
              </div>

              <div className="group p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-green-500/10 to-green-600/5 backdrop-blur-sm transition-all duration-700 hover:bg-green-500/20 hover:border-green-500/30 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-2">
                <div className="flex justify-center mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500/30 to-green-600/20 backdrop-blur-sm transition-all duration-500 group-hover:bg-green-500/40 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-green-500/30 group-hover:rotate-12">
                    <FaEnvelope className="h-6 w-6 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors duration-300">Email</h3>
                <p className="text-base text-gray-300 group-hover:text-gray-200 transition-colors duration-300">contact@future-network.dz</p>
                <div className="mt-4 flex justify-center">
                  <FaShieldAlt className="h-4 w-4 text-green-400" />
                </div>
              </div>

              <div className="group p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm transition-all duration-700 hover:bg-yellow-500/20 hover:border-yellow-500/30 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 hover:-translate-y-2">
                <div className="flex justify-center mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-500/30 to-yellow-600/20 backdrop-blur-sm transition-all duration-500 group-hover:bg-yellow-500/40 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-yellow-500/30 group-hover:rotate-12">
                    <FaMapMarkerAlt className="h-6 w-6 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">Adresse</h3>
                <p className="text-base text-gray-300 group-hover:text-gray-200 transition-colors duration-300">El Oued, Algérie</p>
                <div className="mt-4 flex justify-center">
                  <FaRocket className="h-4 w-4 text-orange-400" />
                </div>
              </div>
            </div>

            {/* Ultra Elite CTA Section */}
            <div ref={ctaRef} className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <Button 
            title={getTranslation("contact_cta")} 
            onClick={() => setIsFormOpen(true)}
                containerClass="cursor-pointer bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 hover:from-green-600 hover:via-blue-600 hover:to-purple-600 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 text-lg transform hover:-translate-y-1" 
              />
              
              <button className="group flex items-center gap-3 text-base text-gray-300 hover:text-white transition-all duration-500 px-6 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-green-500/30 bg-gradient-to-br from-green-500/20 to-green-600/10 backdrop-blur-sm transition-all duration-500 group-hover:bg-green-500/30 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-green-500/30 group-hover:rotate-12">
                  <FaWhatsapp className="h-5 w-5 text-green-400 group-hover:text-green-300" />
                </div>
                <span className="font-semibold">WhatsApp Elite</span>
                <FaHeadset className="h-4 w-4 text-blue-400 group-hover:text-blue-300" />
              </button>
            </div>

            {/* Elite Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-105">
                <FaShieldAlt className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">Sécurisé & Fiable</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-105">
                <FaRocket className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-300">Rapide & Efficace</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-105">
                <FaCrown className="h-4 w-4 text-yellow-400" />
                <span className="text-sm text-gray-300">Service Elite</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 3D Contact Form Modal */}
      <ContactForm3D isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};

export default Contact;

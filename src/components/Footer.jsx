import { FaInstagram, FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { getTranslation } from "../content";
import DeveloperSection from "./DeveloperSection";
import PremiumLogo from "./PremiumLogo";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const socialLinks = [
    { 
      href: "https://www.instagram.com/abderrahmane_mehallou_?utm_source=qr&igsh=MTRqZ2oxbzVxN2Q2dw==", 
      icon: <FaInstagram />,
      name: "Instagram"
    },
    { 
      href: "https://www.facebook.com/share/19M42tQxHG/", 
      icon: <FaFacebook />,
      name: "Facebook"
    },
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      text: "footer_address",
      href: "https://maps.google.com/?q=El+Oued+Algeria"
    },
    {
      icon: <FaPhone />,
      text: "footer_phone",
      href: "tel:+213065686580"
    },
    {
      icon: <FaEnvelope />,
      text: "footer_email",
      href: "mailto:contact@future-network.dz"
    }
  ];

  useGSAP(() => {
    gsap.fromTo(".footer-content", 
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".footer-content",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate social icons with premium effect
    gsap.fromTo(".social-icon", 
      {
        scale: 0,
        rotation: -180,
        opacity: 0,
        y: 30
      },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".social-icons",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  return (
    <footer className="bg-gradient-to-br from-black via-black to-black text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="footer-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <PremiumLogo className="w-14 h-14" showText={false} />
              <div>
                <h3 className="text-2xl font-bold text-white">Future Network</h3>
                <p className="text-green-400 text-sm font-medium">The Network of Tomorrow</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md mb-6">
              Spécialisés dans les technologies de pointe pour créer des environnements intelligents et sécurisés. 
              Notre expertise couvre l'électricité, la sécurité et les systèmes de maison intelligente.
            </p>
            
            {/* Social Links */}
            <div className="social-icons flex items-center gap-6">
              <span className="text-sm text-gray-400 font-medium" data-translate-key="footer_follow">
                {getTranslation("footer_follow")}:
              </span>
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon group relative w-12 h-12 bg-gradient-to-br from-blue-600/20 to-green-600/20 rounded-2xl flex items-center justify-center border border-white/10 backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:border-blue-500/30 hover:bg-gradient-to-br hover:from-blue-600/30 hover:to-green-600/30 hover:shadow-2xl hover:shadow-blue-500/20"
                  title={link.name}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/0 to-green-600/0 group-hover:from-blue-600/20 group-hover:to-green-600/20 transition-all duration-500" />
                  <div className="relative z-10 text-white group-hover:text-blue-300 transition-all duration-300 group-hover:scale-110">
                  {link.icon}
                  </div>
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-500/20 transition-all duration-500" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact</h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors duration-300 group"
                >
                  <span className="text-blue-400 group-hover:text-green-400 transition-colors duration-300">
                    {info.icon}
                  </span>
                  <span className="text-sm" data-translate-key={info.text}>
                    {getTranslation(info.text)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Services Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <div className="space-y-3">
              {["smart_home", "security", "electrical", "networks"].map((service, index) => (
                <a
                  key={index}
                  href={`#services`}
                  className="block text-sm text-gray-300 hover:text-green-400 transition-colors duration-300"
                  data-translate-key={`service_${service}_title`}
                >
                  {getTranslation(`service_${service}_title`)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400" data-translate-key="footer_rights">
            {getTranslation("footer_rights")}
          </p>
        </div>
      </div>
      
      {/* Developer Section */}
      <DeveloperSection />
    </footer>
  );
};

export default Footer;

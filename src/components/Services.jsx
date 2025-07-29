import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { 
  FaHome, 
  FaShieldAlt, 
  FaBolt, 
  FaNetworkWired,
  FaArrowRight,
  FaPlay
} from "react-icons/fa";
import { getTranslation } from "../content";

gsap.registerPlugin(ScrollTrigger);

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  gradient, 
  videoSrc,
  index 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const cardRef = useRef(null);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Handle video play error silently
      });
      setIsVideoPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  const handleVideoError = () => {
    // Hide video element if it fails to load
    if (videoRef.current) {
      videoRef.current.style.display = 'none';
    }
  };

  return (
    <div
      ref={cardRef}
      className={`group relative h-[400px] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-white/20 ${gradient}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Video */}
      {videoSrc && (
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-20">
          <video
            ref={videoRef}
            src={videoSrc}
            loop
            muted
            className="h-full w-full object-cover"
            onError={handleVideoError}
          />
        </div>
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-8">
        {/* Icon */}
        <div className="flex items-start justify-between">
          <div className={`flex h-16 w-16 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110`}>
            <Icon className="h-8 w-8 text-white" />
          </div>
          {videoSrc && (
            <div className={`flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 ${isVideoPlaying ? 'bg-green-500/80' : 'bg-white/20'}`}>
              <FaPlay className="h-3 w-3 text-white" />
            </div>
          )}
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-green-400 group-hover:bg-clip-text">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-gray-300 transition-all duration-300 group-hover:text-gray-200">
            {description}
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-2 text-sm font-medium text-blue-400 transition-all duration-300 hover:text-blue-300 hover:gap-3">
            En savoir plus
            <FaArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <div className="text-xs text-gray-400">
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-blue-500/20 via-green-500/20 to-blue-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  const services = [
    {
      icon: FaHome,
      title: getTranslation("service_smart_home_title"),
      description: getTranslation("service_smart_home_desc"),
      gradient: "hover:bg-gradient-to-br hover:from-blue-900/20 hover:to-blue-600/20",
      videoSrc: "/videos/feature-1.mp4"
    },
    {
      icon: FaShieldAlt,
      title: getTranslation("service_security_title"),
      description: getTranslation("service_security_desc"),
      gradient: "hover:bg-gradient-to-br hover:from-green-900/20 hover:to-green-600/20",
      videoSrc: "/videos/feature-2.mp4"
    },
    {
      icon: FaBolt,
      title: getTranslation("service_electrical_title"),
      description: getTranslation("service_electrical_desc"),
      gradient: "hover:bg-gradient-to-br hover:from-yellow-900/20 hover:to-yellow-600/20",
      videoSrc: "/videos/feature-3.mp4"
    },
    {
      icon: FaNetworkWired,
      title: getTranslation("service_networks_title"),
      description: getTranslation("service_networks_desc"),
      gradient: "hover:bg-gradient-to-br hover:from-purple-900/20 hover:to-purple-600/20",
      videoSrc: "/videos/feature-4.mp4"
    }
  ];

  useGSAP(() => {
    // Animate title
    gsap.fromTo(titleRef.current,
      { 
        y: 100, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate cards with stagger
    gsap.fromTo(cardsRef.current.children,
      { 
        y: 100, 
        opacity: 0,
        scale: 0.8
      },
      { 
        y: 0, 
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="relative min-h-screen bg-gradient-to-br from-black via-black to-black py-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-green-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400 backdrop-blur-sm">
            <FaNetworkWired className="h-4 w-4" />
            Services Elite
          </div>
          
          <h2 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl relative">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent font-display">
              {getTranslation("services_title")}
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-lg opacity-20 blur-lg"></div>
          </h2>
          
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            {getTranslation("services_subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div 
          ref={cardsRef}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-gray-300">
              Tous nos services incluent support 24/7 et garantie
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 
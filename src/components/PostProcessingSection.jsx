import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCog, FaLightbulb, FaShieldAlt, FaBolt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const PostProcessingSection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const particlesRef = useRef(null);
  const cardsRef = useRef([]);

  const features = [
    {
      icon: <FaBolt className="w-6 h-6" />,
      title: "Électricité Avancée",
      description: "Solutions électriques innovantes avec technologies smart",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Sécurité Intelligente",
      description: "Systèmes de sécurité connectés et surveillance 24/7",
      color: "from-green-500 to-emerald-400"
    },
    {
      icon: <FaCog className="w-6 h-6" />,
      title: "Domotique Premium",
      description: "Automatisation complète pour maisons intelligentes",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: <FaLightbulb className="w-6 h-6" />,
      title: "Innovation Continue",
      description: "Recherche et développement pour l'avenir connecté",
      color: "from-yellow-500 to-orange-400"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create floating particles animation
      const particles = particlesRef.current.children;
      for (let i = 0; i < particles.length; i++) {
        gsap.set(particles[i], {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          opacity: Math.random() * 0.5 + 0.1,
          scale: Math.random() * 0.5 + 0.5
        });

        gsap.to(particles[i], {
          x: `+=${Math.random() * 200 - 100}`,
          y: `+=${Math.random() * 200 - 100}`,
          rotation: 360,
          duration: Math.random() * 10 + 5,
          repeat: -1,
          yoyo: true,
          ease: "none"
        });
      }

      // Main container animation
      gsap.fromTo(containerRef.current, 
        {
          opacity: 0,
          y: 100,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Cards stagger animation
      gsap.fromTo(cardsRef.current,
        {
          opacity: 0,
          y: 60,
          rotationX: -45,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 40%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Continuous morphing background effect
      const morphTl = gsap.timeline({ repeat: -1, yoyo: true });
      morphTl.to('.morph-bg', {
        scale: 1.1,
        rotation: 5,
        duration: 4,
        ease: "sine.inOut"
      }).to('.morph-bg', {
        scale: 0.9,
        rotation: -5,
        duration: 4,
        ease: "sine.inOut"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden py-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="morph-bg absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 blur-3xl"></div>
        
        {/* Floating Particles */}
        <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-30"
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
      </div>

      <div ref={containerRef} className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-300 text-sm font-medium">Technologie Avancée</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              Post-Processing
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Intelligence
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                         Technologies de pointe pour l&apos;automatisation et l&apos;intelligence artificielle 
             dans vos installations électriques et systèmes de sécurité.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="group relative"
            >
              {/* Card Background with Gradient Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r opacity-75 blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:blur-none rounded-2xl"
                style={{background: `linear-gradient(135deg, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})`}}
              ></div>
              
              {/* Main Card */}
              <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-2xl p-6 h-full border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                {/* Icon Container */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} mb-4 text-white shadow-lg`}>
                  {feature.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                  style={{backgroundImage: `linear-gradient(135deg, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})`}}
                >
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl pointer-events-none"
                  style={{background: `linear-gradient(135deg, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})`}}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button 
          onClick={() => {
            const servicesSection = document.getElementById('services');
            if (servicesSection) {
              servicesSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 cursor-pointer"
        >
            <span>Explorer nos Solutions</span>
            <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <FaBolt className="w-3 h-3" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PostProcessingSection; 
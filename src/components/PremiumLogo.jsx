import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const PremiumLogo = ({ className = "w-10 h-10", showText = false }) => {
  const logoRef = useRef(null);
  const containerRef = useRef(null);
  const frameRef = useRef(null);
  const particlesRef = useRef(null);
  const lightningRef = useRef(null);
  const laserRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Master timeline for coordinated animations
      const masterTl = gsap.timeline({ repeat: -1 });

      // Electric frame pulse with enhanced effects
      masterTl.to(frameRef.current, {
        boxShadow: "0 0 40px rgba(0, 212, 255, 0.9), 0 0 80px rgba(0, 212, 255, 0.5), 0 0 120px rgba(0, 212, 255, 0.3), inset 0 0 30px rgba(0, 212, 255, 0.3)",
        duration: 2,
        ease: "power2.inOut"
      }, 0);

      // Enhanced logo glow effect
      masterTl.to(logoRef.current, {
        filter: "brightness(1.4) drop-shadow(0 0 20px #00d4ff) drop-shadow(0 0 40px #00d4ff) drop-shadow(0 0 60px #00d4ff)",
        duration: 2,
        ease: "power2.inOut"
      }, 0);

      // Container scale pulse
      masterTl.to(containerRef.current, {
        scale: 1.05,
        duration: 2,
        ease: "power2.inOut"
      }, 0);

      // Reset animations
      masterTl.to([frameRef.current, logoRef.current, containerRef.current], {
        boxShadow: "0 0 20px rgba(0, 212, 255, 0.6), 0 0 40px rgba(0, 212, 255, 0.3), inset 0 0 15px rgba(0, 212, 255, 0.2)",
        filter: "brightness(1.2) drop-shadow(0 0 15px #00d4ff)",
        scale: 1,
        duration: 2,
        ease: "power2.inOut"
      }, 2);

      // Enhanced particle system animation
      if (particlesRef.current) {
        const particles = particlesRef.current.children;
        gsap.set(particles, { opacity: 0, scale: 0 });
        
        gsap.to(particles, {
          opacity: [0, 1, 0],
          scale: [0, 1.5, 0],
          duration: 2.5,
          stagger: 0.15,
          ease: "power2.inOut",
          repeat: -1,
          repeatDelay: 0.5
        });
      }

      // Lightning bolt effects
      if (lightningRef.current) {
        const lightningBolts = lightningRef.current.children;
        gsap.set(lightningBolts, { opacity: 0, scaleY: 0 });
        
        gsap.to(lightningBolts, {
          opacity: [0, 1, 0],
          scaleY: [0, 1, 0],
          duration: 0.8,
          stagger: 0.3,
          ease: "power2.inOut",
          repeat: -1,
          repeatDelay: 2
        });
      }

      // Laser beam effects
      if (laserRef.current) {
        const laserBeams = laserRef.current.children;
        gsap.set(laserBeams, { opacity: 0, scaleX: 0 });
        
        gsap.to(laserBeams, {
          opacity: [0, 0.8, 0],
          scaleX: [0, 1, 0],
          duration: 1.2,
          stagger: 0.4,
          ease: "power2.inOut",
          repeat: -1,
          repeatDelay: 1.5
        });
      }

      // Electric discharge effect with multiple layers
      gsap.to(containerRef.current, {
        background: "radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, rgba(0, 150, 255, 0.1) 30%, transparent 70%)",
        duration: 1.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      });

      // Electric arc effect
      gsap.to(frameRef.current, {
        background: "linear-gradient(45deg, rgba(0, 212, 255, 0.8), rgba(0, 150, 255, 0.6), rgba(0, 212, 255, 0.8))",
        duration: 1,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        repeatDelay: 1
      });

      // Text animation (only if showText is true)
      if (showText && textRef.current) {
        gsap.to(textRef.current, {
          textShadow: "0 0 25px #00d4ff, 0 0 50px #00d4ff, 0 0 75px #00d4ff",
          duration: 2,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1
        });
      }

      // Hover effect setup with enhanced electric effects
      const container = containerRef.current;
      if (container) {
        container.addEventListener('mouseenter', () => {
          gsap.to(container, {
            scale: 1.15,
            duration: 0.3,
            ease: "power2.out"
          });
          gsap.to(frameRef.current, {
            boxShadow: "0 0 50px rgba(0, 212, 255, 1), 0 0 100px rgba(0, 212, 255, 0.7), 0 0 150px rgba(0, 212, 255, 0.4), inset 0 0 40px rgba(0, 212, 255, 0.4)",
            duration: 0.3,
            ease: "power2.out"
          });
          gsap.to(logoRef.current, {
            filter: "brightness(1.6) drop-shadow(0 0 30px #00d4ff) drop-shadow(0 0 60px #00d4ff) drop-shadow(0 0 90px #00d4ff)",
            duration: 0.3,
            ease: "power2.out"
          });
        });

        container.addEventListener('mouseleave', () => {
          gsap.to(container, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
          gsap.to(frameRef.current, {
            boxShadow: "0 0 20px rgba(0, 212, 255, 0.6), 0 0 40px rgba(0, 212, 255, 0.3), inset 0 0 15px rgba(0, 212, 255, 0.2)",
            duration: 0.3,
            ease: "power2.out"
          });
          gsap.to(logoRef.current, {
            filter: "brightness(1.2) drop-shadow(0 0 15px #00d4ff)",
            duration: 0.3,
            ease: "power2.out"
          });
        });
      }
    });

    return () => ctx.revert();
  }, [showText]);

  return (
    <div className={`relative ${className} cursor-pointer`} ref={containerRef}>
      {/* Premium Background with Advanced Gradient */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 rounded-lg opacity-30 blur-xs" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/25 via-cyan-400/20 to-blue-600/25 rounded-lg blur-xl" />
      
      {/* Premium Elite Frame */}
      <div 
        ref={frameRef}
        className="relative w-full h-full rounded-lg border-2 border-transparent bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-600 p-[2px] overflow-hidden"
        style={{
          boxShadow: "0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.4), inset 0 0 20px rgba(59, 130, 246, 0.3)"
        }}
      >
        {/* Inner Frame - Clean for Image */}
        <div className="w-full h-full rounded-lg bg-black relative overflow-hidden">
          {/* Logo Image - Perfectly Clean and Visible */}
          <img 
            ref={logoRef}
            src="/img/Future Network Official Logo (Blue minimalist Smart house wifi Network Energy  Security logo)..png" 
            alt="Future Network Logo" 
            className="w-full h-full object-cover relative z-50"
            style={{
              filter: "drop-shadow(0 0 10px rgba(0, 212, 255, 0.8)) brightness(1.1)"
            }}
          />
        </div>
      </div>

      {/* Lightning Bolt Effects - Outside Frame */}
      <div ref={lightningRef} className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 bg-gradient-to-b from-blue-400 via-cyan-300 to-blue-400"
            style={{
              left: `${20 + (i * 20)}%`,
              top: "-10%",
              height: "120%",
              transformOrigin: "top",
              boxShadow: "0 0 15px rgba(0, 212, 255, 0.9)"
            }}
          />
        ))}
      </div>

      {/* Laser Beam Effects - Outside Frame */}
      <div ref={laserRef} className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
            style={{
              top: `${15 + (i * 35)}%`,
              transformOrigin: "left",
              boxShadow: "0 0 20px rgba(0, 212, 255, 1), 0 0 40px rgba(0, 212, 255, 0.6)"
            }}
          />
        ))}
        {[...Array(3)].map((_, i) => (
          <div
            key={`vertical-${i}`}
            className="absolute w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent"
            style={{
              left: `${15 + (i * 35)}%`,
              transformOrigin: "top",
              boxShadow: "0 0 20px rgba(0, 212, 255, 1), 0 0 40px rgba(0, 212, 255, 0.6)"
            }}
          />
        ))}
      </div>

      {/* Enhanced Particle System - Outside Frame */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 rounded-full"
            style={{
              left: `${5 + (i * 4.5)}%`,
              top: `${8 + (i * 4)}%`,
              animationDelay: `${i * 0.15}s`,
              boxShadow: "0 0 10px rgba(0, 212, 255, 0.9)"
            }}
          />
        ))}
      </div>

      {/* Electric Corner Lasers */}
      <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
        {/* Top-left corner laser */}
        <div className="absolute top-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-transparent opacity-60" 
             style={{ boxShadow: "0 0 15px rgba(0, 212, 255, 0.8)" }} />
        <div className="absolute top-0 left-0 w-0.5 h-8 bg-gradient-to-b from-blue-400 to-transparent opacity-60" 
             style={{ boxShadow: "0 0 15px rgba(0, 212, 255, 0.8)" }} />
        
        {/* Top-right corner laser */}
        <div className="absolute top-0 right-0 w-8 h-0.5 bg-gradient-to-l from-blue-400 to-transparent opacity-60" 
             style={{ boxShadow: "0 0 15px rgba(0, 212, 255, 0.8)" }} />
        <div className="absolute top-0 right-0 w-0.5 h-8 bg-gradient-to-b from-blue-400 to-transparent opacity-60" 
             style={{ boxShadow: "0 0 15px rgba(0, 212, 255, 0.8)" }} />
        
        {/* Bottom-left corner laser */}
        <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-transparent opacity-60" 
             style={{ boxShadow: "0 0 15px rgba(0, 212, 255, 0.8)" }} />
        <div className="absolute bottom-0 left-0 w-0.5 h-8 bg-gradient-to-t from-blue-400 to-transparent opacity-60" 
             style={{ boxShadow: "0 0 15px rgba(0, 212, 255, 0.8)" }} />
        
        {/* Bottom-right corner laser */}
        <div className="absolute bottom-0 right-0 w-8 h-0.5 bg-gradient-to-l from-blue-400 to-transparent opacity-60" 
             style={{ boxShadow: "0 0 15px rgba(0, 212, 255, 0.8)" }} />
        <div className="absolute bottom-0 right-0 w-0.5 h-8 bg-gradient-to-t from-blue-400 to-transparent opacity-60" 
             style={{ boxShadow: "0 0 15px rgba(0, 212, 255, 0.8)" }} />
      </div>



      {/* Enhanced Electric Discharge Rings */}
      <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-lg opacity-15 blur-md" />
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-lg opacity-25 blur-sm" />
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 rounded-lg opacity-30 blur-xs" />

      {/* Company Text - Only shown when showText is true */}
      {showText && (
        <div className="ml-4 flex flex-col">
          <h3 
            ref={textRef}
            className="text-lg font-bold text-white"
            style={{
              textShadow: "0 0 15px rgba(0, 212, 255, 0.9)"
            }}
          >
            Future Network
          </h3>
          <p className="text-xs text-blue-300 font-medium">
            The Network of Tomorrow
          </p>
        </div>
      )}
    </div>
  );
};

export default PremiumLogo; 
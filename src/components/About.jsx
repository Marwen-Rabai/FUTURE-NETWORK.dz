import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { FaRocket, FaShieldAlt, FaLightbulb } from "react-icons/fa";

import AnimatedTitle from "./AnimatedTitle";
import { getTranslation } from "../content";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    // Set initial state for the image
    gsap.set(".mask-clip-path", {
      width: "24rem", // w-96
      height: "60vh",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "1.5rem", // rounded-3xl
      opacity: 0.2,
    });

    // Create a master timeline for proper sequencing
    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "bottom center",
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    // First: Animate the main content
    masterTimeline.fromTo(".about-content", 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      }
    );

    // Second: Animate values cards with stagger
    masterTimeline.fromTo(".value-card", 
      { opacity: 0, y: 30, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
      },
      "-=0.5" // Start slightly before the previous animation ends
    );

    // Third: Animate the clip path image (starts after content is fully visible)
    masterTimeline.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
      top: "0%",
      left: "0%",
      transform: "translate(0%, 0%)",
      opacity: 0.6,
      duration: 1.2,
      ease: "power2.inOut",
    }, "+=0.3"); // Start 0.3 seconds after the previous animation
  });

  return (
    <div id="about" className="relative min-h-screen w-screen bg-gradient-to-br from-black via-black to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 h-40 w-40 rounded-full bg-green-500/10 blur-3xl" />
      </div>

      {/* Main Content Container */}
      <div className="about-content relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        {/* Elite Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400 backdrop-blur-sm">
          <FaRocket className="h-3 w-3" />
          Innovation & Excellence
        </div>

        <p className="text-sm uppercase text-green-400 font-medium tracking-wider mb-4" data-translate-key="about_subtitle">
          {getTranslation("about_subtitle")}
        </p>

        <AnimatedTitle
          title="Future <b>N</b>etwork"
          containerClass="mb-8 !text-white text-center"
        />

        {/* About Description */}
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <p className="text-xl text-white font-medium mb-4" data-translate-key="about_title">
            {getTranslation("about_title")}
          </p>
          <p className="text-gray-300 leading-relaxed text-lg" data-translate-key="about_description">
            {getTranslation("about_description")}
          </p>
        </div>

        {/* Values Section */}
        <div className="values-section grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-5xl mx-auto w-full px-4">
          <div className="value-card group text-center p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105">
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-500/20 backdrop-blur-sm transition-all duration-300 group-hover:bg-blue-500/30 group-hover:scale-110">
                <FaRocket className="h-8 w-8 text-blue-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
            <p className="text-sm text-gray-400">Technologies de pointe pour un avenir connecté</p>
          </div>

          <div className="value-card group text-center p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105">
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-green-500/20 backdrop-blur-sm transition-all duration-300 group-hover:bg-green-500/30 group-hover:scale-110">
                <FaShieldAlt className="h-8 w-8 text-green-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Sécurité</h3>
            <p className="text-sm text-gray-400">Protection maximale pour vos biens et données</p>
          </div>

          <div className="value-card group text-center p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105">
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-yellow-500/20 backdrop-blur-sm transition-all duration-300 group-hover:bg-yellow-500/30 group-hover:scale-110">
                <FaLightbulb className="h-8 w-8 text-yellow-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Fiabilité</h3>
            <p className="text-sm text-gray-400">Solutions durables et maintenance continue</p>
          </div>
        </div>
      </div>

      {/* Background Image Container - Positioned behind content */}
      <div className="absolute inset-0 z-0 overflow-hidden" id="clip">
        <div className="mask-clip-path absolute left-1/2 top-1/2 h-[60vh] w-96 origin-center -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl md:w-[30vw] transform-gpu">
          <img
            src="img/about.webp"
            alt="Background"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

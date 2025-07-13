import React from "react";
import { FaRocket, FaStar, FaCrown, FaGem, FaShieldAlt, FaBolt } from "react-icons/fa";

const Marquee = () => {
  const marqueeItems = [
    { text: "SECURITE", icon: FaShieldAlt, color: "text-green-400" },
    { text: "INNOVATION", icon: FaRocket, color: "text-blue-400" },
    { text: "DOMOTIQUE", icon: FaBolt, color: "text-yellow-400" },
    { text: "FIABILITE", icon: FaStar, color: "text-purple-400" },
    { text: "FUTURE NETWORK", icon: FaCrown, color: "text-orange-400" },
    { text: "TECHNOLOGIE", icon: FaGem, color: "text-pink-400" },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-r from-black via-black to-black overflow-hidden">
      {/* Elite Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(0,212,170,0.05),transparent_50%)]" />
      
      {/* Advanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-40 w-40 rounded-full bg-green-500/10 blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl animate-pulse" />
        <div className="absolute top-1/3 right-1/3 h-16 w-16 rounded-full bg-yellow-500/10 blur-xl animate-pulse" />
      </div>

      {/* Elite Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative">
        {/* Elite Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-500/20 to-green-500/20 px-6 py-3 text-sm text-blue-400 backdrop-blur-sm shadow-lg shadow-blue-500/20 mb-6">
            <FaCrown className="h-4 w-4 text-yellow-400 animate-pulse" />
            <span className="font-semibold font-heading">Technologies de Pointe</span>
            <FaGem className="h-4 w-4 text-purple-400 animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
            Innovation & <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Excellence</span>
          </h2>
          <p className="text-lg text-gray-400 font-body max-w-2xl mx-auto">
            Decouvrez notre expertise dans les technologies les plus avancees
          </p>
        </div>

        {/* First Marquee Row - Forward */}
        <div className="marquee-container mb-8">
          <div className="marquee-content">
            {marqueeItems.map((item, index) => (
              <div key={index} className="marquee-item group">
                <div className="flex items-center gap-4 px-8 py-6 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/20 hover:border-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                  <item.icon className={`h-8 w-8 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-2xl font-heading font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-green-400 group-hover:bg-clip-text transition-all duration-300">
                    {item.text}
                  </span>
                  <FaStar className="h-4 w-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
            {marqueeItems.map((item, index) => (
              <div key={`duplicate-${index}`} className="marquee-item group">
                <div className="flex items-center gap-4 px-8 py-6 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/20 hover:border-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                  <item.icon className={`h-8 w-8 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-2xl font-heading font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-green-400 group-hover:bg-clip-text transition-all duration-300">
                    {item.text}
                  </span>
                  <FaStar className="h-4 w-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Marquee Row - Reverse */}
        <div className="marquee-container">
          <div className="marquee-content marquee-reverse">
            {marqueeItems.slice().reverse().map((item, index) => (
              <div key={index} className="marquee-item group">
                <div className="flex items-center gap-4 px-8 py-6 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/20 hover:border-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
                  <item.icon className={`h-8 w-8 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-2xl font-heading font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                    {item.text}
                  </span>
                  <FaCrown className="h-4 w-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
            {marqueeItems.slice().reverse().map((item, index) => (
              <div key={`duplicate-reverse-${index}`} className="marquee-item group">
                <div className="flex items-center gap-4 px-8 py-6 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/20 hover:border-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
                  <item.icon className={`h-8 w-8 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-2xl font-heading font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                    {item.text}
                  </span>
                  <FaCrown className="h-4 w-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Elite Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105">
            <FaShieldAlt className="h-5 w-5 text-green-400" />
            <span className="text-sm font-body font-semibold text-gray-300">Securite Maximale</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105">
            <FaRocket className="h-5 w-5 text-blue-400" />
            <span className="text-sm font-body font-semibold text-gray-300">Performance Elite</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105">
            <FaCrown className="h-5 w-5 text-yellow-400" />
            <span className="text-sm font-body font-semibold text-gray-300">Qualite Elite</span>
          </div>
        </div>
    </div>
    </section>
  );
};

export default Marquee;
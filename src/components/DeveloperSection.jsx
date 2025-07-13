import React from "react";
import { FaHeart, FaCode, FaRocket } from "react-icons/fa";

const DeveloperSection = () => {
  return (
    <div className="relative py-3 bg-gradient-to-r from-gray-900/50 via-black/50 to-gray-900/50 border-t border-white/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_50%)]" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 h-8 w-8 rounded-full bg-blue-500/5 blur-lg" />
        <div className="absolute top-1/2 right-1/4 h-10 w-10 rounded-full bg-green-500/5 blur-lg" />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="flex justify-center">
          {/* Developer Credit */}
          <div className="flex items-center gap-2 group">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105">
              <FaCode className="h-3 w-3 text-blue-400 group-hover:text-green-400 transition-colors duration-300" />
              <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                Engineered with
              </span>
              <FaHeart className="h-3 w-3 text-red-400 animate-pulse" />
              <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                by
              </span>
              <a
                href="https://marwenrabai.strikingly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-blue-400 hover:text-green-400 transition-colors duration-300 hover:scale-105"
              >
                Marwen Rabai
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperSection;
 
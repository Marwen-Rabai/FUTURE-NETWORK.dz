import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { FaBars, FaTimes, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

import Button from "./Button";
import LanguageSelector from "./LanguageSelector";
import PremiumLogo from "./PremiumLogo";
import { getTranslation } from "../content";

const navItems = [
  { key: "nav_home", href: "#home" },
  { key: "nav_services", href: "#services" },
  { key: "nav_about", href: "#about" },
  { key: "nav_contact", href: "#contact" }
];

const NavBar = () => {
  // State for toggling audio and visual indicator
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Refs for audio and navigation container
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  // Manage audio playback
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  // Mobile menu animation
  useEffect(() => {
    if (mobileMenuRef.current) {
      gsap.to(mobileMenuRef.current, {
        x: isMobileMenuOpen ? 0 : "100%",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [isMobileMenuOpen]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo and Product button */}
          <div className="flex items-center gap-7">
            <PremiumLogo className="w-12 h-12" showText={false} />

            <Button
              id="product-button"
              title={getTranslation("nav_products")}
              rightIcon={<TiLocationArrow />}
              containerClass="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 md:flex hidden items-center justify-center gap-1 text-white"
            />
          </div>

          {/* Navigation Links, Language Selector and Audio Button */}
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="nav-hover-btn"
                  data-translate-key={item.key}
                >
                  {getTranslation(item.key)}
                </a>
              ))}
            </div>

            <div className="ml-6">
              <LanguageSelector />
            </div>

            <button
              onClick={toggleAudioIndicator}
              className="ml-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-110"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {isAudioPlaying ? (
                <FaVolumeUp className="h-4 w-4 text-green-400" />
              ) : (
                <FaVolumeMute className="h-4 w-4 text-gray-400" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="ml-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-110 md:hidden"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-4 w-4 text-white" />
              ) : (
                <FaBars className="h-4 w-4 text-white" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-y-0 right-0 z-50 w-80 transform bg-black/95 backdrop-blur-md border-l border-white/10 md:hidden"
        style={{ transform: "translateX(100%)" }}
      >
        <div className="flex h-full flex-col p-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-white">Menu</h3>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5"
            >
              <FaTimes className="h-3 w-3 text-white" />
            </button>
          </div>

          <nav className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="group flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                data-translate-key={item.key}
              >
                <span>{getTranslation(item.key)}</span>
                <TiLocationArrow className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
              </a>
            ))}
          </nav>

          <div className="mt-auto">
            <div className="mb-4">
              <LanguageSelector />
            </div>
            <Button
              id="mobile-product-button"
              title={getTranslation("nav_products")}
              rightIcon={<TiLocationArrow />}
              containerClass="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 flex items-center justify-center gap-2 text-white py-3 rounded-lg transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { FaUser, FaEnvelope, FaPhone, FaMessage, FaPaperPlane } from 'react-icons/fa6';
import { FaBolt, FaCheckCircle } from 'react-icons/fa';

const ContactForm3D = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const formRef = useRef(null);
  const phoneRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Open animation
      gsap.set(overlayRef.current, { display: 'flex' });
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      });

      // 3D Phone animation
      gsap.fromTo(phoneRef.current, 
        {
          rotateY: -90,
          rotateX: 15,
          scale: 0.8,
          opacity: 0
        },
        {
          rotateY: 0,
          rotateX: 0,
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)"
        }
      );

      // Form elements stagger animation
      gsap.fromTo('.form-element', 
        {
          y: 30,
          opacity: 0,
          rotateX: -15
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.3
        }
      );
    }
  }, [isOpen]);

  const handleClose = () => {
    gsap.to(phoneRef.current, {
      rotateY: 90,
      scale: 0.8,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in"
    });
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        gsap.set(overlayRef.current, { display: 'none' });
        onClose();
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Animate submit button
    gsap.to('.submit-btn', {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1
    });

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Success animation
      gsap.fromTo('.success-message', 
        {
          scale: 0,
          opacity: 0,
          rotation: -180
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.6,
          ease: "back.out(1.7)"
        }
      );

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', message: '' });
        setIsSuccess(false);
        handleClose();
      }, 3000);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md opacity-0"
      style={{ display: 'none' }}
      onClick={(e) => e.target === overlayRef.current && handleClose()}
    >
      {/* 3D Phone Container */}
      <div 
        ref={phoneRef}
        className="relative w-full max-w-[400px] mx-4"
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Phone Frame */}
        <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl"
          style={{
            boxShadow: '0 50px 100px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(59, 130, 246, 0.3)'
          }}
        >
          {/* Screen */}
          <div className="relative bg-black rounded-[2.5rem] overflow-hidden">
            {/* Status Bar */}
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 h-8 flex items-center justify-between px-6 text-xs text-white/80">
              <span>9:41 AM</span>
              <span>Future Network</span>
              <div className="flex gap-1">
                <div className="w-4 h-3 bg-white/80 rounded-sm"></div>
                <div className="w-1 h-3 bg-white/80 rounded-sm"></div>
              </div>
            </div>

            {/* Form Content */}
            <div ref={formRef} className="p-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-[600px]">
              {!isSuccess ? (
                <form onSubmit={handleSubmit}>
                  <h2 className="form-element text-2xl font-bold text-white mb-2 text-center">
                    Contactez-Nous
                  </h2>
                  <p className="form-element text-sm text-gray-400 mb-6 text-center">
                    Remplissez le formulaire et nous vous répondrons rapidement
                  </p>

                  {/* Name Input */}
                  <div className="form-element mb-4">
                    <div className="relative">
                      <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400 z-10" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom complet"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-gray-800/70 transition-all duration-300"
                        style={{
                          boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)'
                        }}
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="form-element mb-4">
                    <div className="relative">
                      <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-green-400 z-10" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:bg-gray-800/70 transition-all duration-300"
                        style={{
                          boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)'
                        }}
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="form-element mb-4">
                    <div className="relative">
                      <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400 z-10" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Votre numéro de téléphone"
                        className="w-full pl-12 pr-4 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:bg-gray-800/70 transition-all duration-300"
                        style={{
                          boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)'
                        }}
                      />
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="form-element mb-6">
                    <div className="relative">
                      <FaMessage className="absolute left-4 top-4 text-purple-400 z-10" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Votre message..."
                        rows="4"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:bg-gray-800/70 transition-all duration-300 resize-none"
                        style={{
                          boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)'
                        }}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="submit-btn form-element w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-2xl flex items-center justify-center gap-3 hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-lg" />
                        <span>Envoyer le Message</span>
                      </>
                    )}
                  </button>

                  {/* Close Button */}
                  <button
                    type="button"
                    onClick={handleClose}
                    className="form-element w-full mt-3 py-3 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Annuler
                  </button>
                </form>
              ) : (
                <div className="success-message flex flex-col items-center justify-center min-h-[400px] text-center">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                    <FaCheckCircle className="text-6xl text-green-500 relative z-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Envoyé!</h3>
                  <p className="text-gray-400">Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              )}
            </div>

            {/* 3D Effects Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cyan-500/10 to-transparent"></div>
            </div>
          </div>

          {/* Phone Notch */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-40 h-6 bg-black rounded-full"></div>

          {/* Side Buttons */}
          <div className="absolute -right-1 top-24 w-1 h-12 bg-gray-700 rounded-r-lg"></div>
          <div className="absolute -right-1 top-40 w-1 h-20 bg-gray-700 rounded-r-lg"></div>
          <div className="absolute -left-1 top-32 w-1 h-16 bg-gray-700 rounded-l-lg"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-60"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactForm3D; 
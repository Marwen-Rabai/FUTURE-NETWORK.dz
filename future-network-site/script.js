// Global variables
var timeout;
let currentLang = 'fr';

// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    lerp: 0.05,
    multiplier: 0.8,
});

// Language management
function updateContent(lang) {
    currentLang = lang;
    
    // Update body class for RTL support
    document.body.className = '';
    if (lang === 'ar') {
        document.body.classList.add('lang-ar');
    }
    
    // Update all elements with data-translate-key
    const elements = document.querySelectorAll('[data-translate-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate-key');
        if (content[lang] && content[lang][key]) {
            element.innerHTML = content[lang][key];
        }
    });
    
    // Update language selector
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
}

// Initialize language functionality
function initLanguageSelector() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            updateContent(lang);
        });
    });
    
    // Set initial language
    updateContent('fr');
}

// Hero section animations
function firstPageAnim() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: "-20",
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
    })
    .to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: 0.2,
    })
    .from("#herofooter", {
        y: -20,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut,
    })
    .from("#hero::before", {
        opacity: 0,
        duration: 2,
        delay: -1.5,
        ease: Expo.easeInOut,
    }, "<");
}

// Custom cursor functionality
function circleChaptaKaro() {
    var xscale = 1;
    var yscale = 1;
    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout);

        xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale, yscale);

        timeout = setTimeout(function () {
            document.querySelector("#minicircle").style.transform = 
                `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
        }, 100);
    });
}

function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#minicircle").style.transform = 
            `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
}

// Service cards hover effects
function initServiceCards() {
    document.querySelectorAll(".service-card").forEach(function (card) {
        card.addEventListener("mouseenter", function() {
            gsap.to(this, {
                scale: 1.02,
                duration: 0.3,
                ease: Power2.easeOut
            });
        });
        
        card.addEventListener("mouseleave", function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: Power2.easeOut
            });
        });
    });
}

// Marquee animation
function initMarquee() {
    const marquee = document.querySelector('.marquee-content');
    if (marquee) {
        gsap.to(marquee, {
            x: "-50%",
            duration: 20,
            repeat: -1,
            ease: "none"
        });
    }
}

// Scroll animations
function initScrollAnimations() {
    // Services section animation
    gsap.from(".service-card", {
        scrollTrigger: {
            trigger: "#services",
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    });
    
    // About section animation
    gsap.from(".about-text", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1
        },
        x: -100,
        opacity: 0,
        duration: 1
    });
    
    gsap.from(".tech-item", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1
    });
    
    // Developer section animation
    gsap.from(".developer-text", {
        scrollTrigger: {
            trigger: "#developer",
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1
        },
        y: 30,
        opacity: 0,
        duration: 1
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                scroll.scrollTo(target, {
                    duration: 1.5,
                    easing: [0.25, 0.46, 0.45, 0.94]
                });
            }
        });
    });
}

// Parallax effect for hero background
function initParallax() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('#hero');
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Tech items floating animation
function initTechAnimations() {
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach((item, index) => {
        gsap.to(item, {
            y: -10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: index * 0.2
        });
    });
}

// Heart icon animation
function initHeartAnimation() {
    const heart = document.querySelector('.heart-icon');
    if (heart) {
        gsap.to(heart, {
            scale: 1.2,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    }
}

// Initialize everything
function init() {
    // Initialize language selector
    initLanguageSelector();
    
    // Initialize animations
    firstPageAnim();
    circleChaptaKaro();
    circleMouseFollower();
    
    // Initialize interactive elements
    initServiceCards();
    initMarquee();
    initScrollAnimations();
    initSmoothScrolling();
    initParallax();
    initTechAnimations();
    initHeartAnimation();
    
    // Update scroll after content changes
    setTimeout(() => {
        scroll.update();
    }, 1000);
}

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', init);

// Handle window resize
window.addEventListener('resize', function() {
    scroll.update();
});

// Handle language change for scroll update
function updateLanguage(lang) {
    updateContent(lang);
    setTimeout(() => {
        scroll.update();
    }, 100);
}

// Export functions for global access
window.updateLanguage = updateLanguage;

// Système de contenu multilingue
const content = {
    fr: {
        nav_logo: "Future Network",
        nav_home: "Accueil",
        nav_services: "Services",
        nav_about: "À Propos",
        nav_contact: "Contact",
        hero_title: "Bâtir le Réseau",
        hero_subtitle: "de Demain",
        hero_location: "El Oued, Algérie",
        hero_available: "Électricité • Sécurité",
        hero_specialty: "Maisons Intelligentes",
        hero_cta_services: "Nos Services",
        hero_cta_contact: "Contactez-nous",
        marquee_text: "SÉCURITÉ • INNOVATION • DOMOTIQUE • FIABILITÉ • FUTURE NETWORK •",
        service_smart_home: "Maison Intelligente",
        service_smart_home_desc: "Domotique & Automatisation",
        service_security: "Sécurité",
        service_security_desc: "Systèmes de Surveillance",
        service_electricity: "Électricité",
        service_electricity_desc: "Installations Économiques",
        about_title: "(À Propos de Nous)",
        about_description: "Future Network est votre partenaire de confiance pour toutes vos solutions en électricité, sécurité et domotique. Notre expertise en technologies de pointe nous permet de créer des installations intelligentes, économiques et sécurisées. Nous transformons vos espaces en environnements connectés du futur, où innovation rime avec fiabilité.",
        about_cta: "Parlons de votre projet",
        cta_title: "(Prêt pour le Futur ?)",
        cta_text: "Découvrez nos solutions intelligentes",
        developer_text: "Made with",
        developer_by: "by",
        footer_address: "El Oued, Algeria"
    },
    en: {
        nav_logo: "Future Network",
        nav_home: "Home",
        nav_services: "Services",
        nav_about: "About",
        nav_contact: "Contact",
        hero_title: "Building the Network",
        hero_subtitle: "of Tomorrow",
        hero_location: "El Oued, Algeria",
        hero_available: "Electricity • Security",
        hero_specialty: "Smart Homes",
        hero_cta_services: "Our Services",
        hero_cta_contact: "Contact Us",
        marquee_text: "SECURITY • INNOVATION • SMART HOME • RELIABILITY • FUTURE NETWORK •",
        service_smart_home: "Smart Home",
        service_smart_home_desc: "Home Automation",
        service_security: "Security",
        service_security_desc: "Surveillance Systems",
        service_electricity: "Electricity",
        service_electricity_desc: "Economic Installations",
        about_title: "(About Us)",
        about_description: "Future Network is your trusted partner for all your electricity, security, and smart home solutions. Our expertise in cutting-edge technologies allows us to create intelligent, economical, and secure installations. We transform your spaces into connected environments of the future, where innovation rhymes with reliability.",
        about_cta: "Let's talk about your project",
        cta_title: "(Ready for the Future?)",
        cta_text: "Discover our smart solutions",
        developer_text: "Made with",
        developer_by: "by",
        footer_address: "El Oued, Algeria"
    },
    ar: {
        nav_logo: "شبكة المستقبل",
        nav_home: "الرئيسية",
        nav_services: "الخدمات",
        nav_about: "من نحن",
        nav_contact: "اتصل بنا",
        hero_title: "بناء شبكة",
        hero_subtitle: "الغد",
        hero_location: "الوادي، الجزائر",
        hero_available: "كهرباء • أمان",
        hero_specialty: "منازل ذكية",
        hero_cta_services: "خدماتنا",
        hero_cta_contact: "اتصل بنا",
        marquee_text: "الأمان • الابتكار • المنزل الذكي • الموثوقية • شبكة المستقبل •",
        service_smart_home: "المنزل الذكي",
        service_smart_home_desc: "أتمتة المنزل",
        service_security: "الأمان",
        service_security_desc: "أنظمة المراقبة",
        service_electricity: "الكهرباء",
        service_electricity_desc: "تركيبات اقتصادية",
        about_title: "(من نحن)",
        about_description: "شبكة المستقبل هي شريكك الموثوق لجميع حلول الكهرباء والأمان والمنزل الذكي. تتيح لنا خبرتنا في التقنيات المتطورة إنشاء تركيبات ذكية واقتصادية وآمنة. نحول مساحاتك إلى بيئات متصلة من المستقبل، حيث يتوافق الابتكار مع الموثوقية.",
        about_cta: "دعنا نتحدث عن مشروعك",
        cta_title: "(مستعد للمستقبل؟)",
        cta_text: "اكتشف حلولنا الذكية",
        developer_text: "صنع بـ",
        developer_by: "بواسطة",
        footer_address: "الوادي، الجزائر"
    }
};

// Variables globales
var timeout;
let currentLang = 'fr';

// Initialisation du scroll locomotive
const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
});

// Fonction de mise à jour du contenu multilingue
function updateContent(lang) {
    currentLang = lang;
    const elements = document.querySelectorAll('[data-translate-key]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate-key');
        if (content[lang] && content[lang][key]) {
            element.innerHTML = content[lang][key];
        }
    });

    // Gestion de la direction du texte pour l'arabe
    document.body.className = '';
    if (lang === 'ar') {
        document.body.classList.add('lang-ar');
    }
}

// Gestionnaire du sélecteur de langue
document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            
            // Mise à jour des classes actives
            langButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Mise à jour du contenu
            updateContent(lang);
        });
    });
});

// Animation de la première page
function firstPageAnim() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: "-10",
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
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut,
    }); 
}

// Animation du curseur personnalisé
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

// Animation des éléments de service
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll(".elem").forEach(function (elem) {
        var rotate = 0;
        var diffrot = 0;

        elem.addEventListener("mouseleave", function (dets) {
            gsap.to(elem.querySelector("img"), {
                opacity: 0,
                ease: Power3,
                duration: 0.5,
            });
        });

        elem.addEventListener("mousemove", function (dets) {
            var diff = dets.clientY - elem.getBoundingClientRect().top;
            diffrot = dets.clientX - rotate;
            rotate = dets.clientX;
            gsap.to(elem.querySelector("img"), {
                opacity: 1,
                ease: Power3,
                top: diff,
                left: dets.clientX,
                rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
            });
        });
    });
});

// Animation du cœur du développeur
function animateHeart() {
    const heart = document.querySelector('.heart-icon');
    if (heart) {
        gsap.to(heart, {
            scale: 1.2,
            duration: 0.3,
            ease: "power2.out",
            yoyo: true,
            repeat: 1
        });
    }
}

// Animation du marquee
function animateMarquee() {
    const marquee = document.querySelector('.marquee-content');
    if (marquee) {
        gsap.to(marquee, {
            x: "-50%",
            duration: 20,
            ease: "none",
            repeat: -1
        });
    }
}

// Initialisation des animations
circleChaptaKaro();
circleMouseFollower();
firstPageAnim();

// Animation du marquee au chargement
document.addEventListener('DOMContentLoaded', function() {
    animateMarquee();
    
    // Animation du cœur au survol
    const developerSection = document.querySelector('#developer');
    if (developerSection) {
        developerSection.addEventListener('mouseenter', animateHeart);
    }
});

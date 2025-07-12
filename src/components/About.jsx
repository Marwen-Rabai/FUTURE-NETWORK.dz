import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";
import { getTranslation } from "../content";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="text-sm uppercase text-green-400 font-medium tracking-wider" data-translate-key="about_subtitle">
          {getTranslation("about_subtitle")}
        </p>

        <AnimatedTitle
          title="Future <b>N</b>etwork"
          containerClass="mt-5 !text-white text-center"
        />

        <div className="about-subtext">
          <p className="text-xl text-white font-medium mb-4" data-translate-key="about_title">
            {getTranslation("about_title")}
          </p>
          <p className="text-gray-300 leading-relaxed" data-translate-key="about_description">
            {getTranslation("about_description")}
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

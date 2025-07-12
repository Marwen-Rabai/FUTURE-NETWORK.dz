import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import { getTranslation } from "../content";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 text-sm uppercase text-green-400 font-medium tracking-wider" data-translate-key="contact_subtitle">
            {getTranslation("contact_subtitle")}
          </p>

          <AnimatedTitle
            title="Contact<b>e</b>z-nous"
            className="special-font !md:text-[6.2rem] w-full !text-5xl !font-black !leading-[.9] !text-white"
          />

          <p className="mt-6 mb-10 text-gray-300 max-w-2xl leading-relaxed" data-translate-key="contact_description">
            {getTranslation("contact_description")}
          </p>

          <Button 
            title={getTranslation("contact_cta")} 
            containerClass="mt-10 cursor-pointer bg-gradient-to-r from-blue-600 to-green-600 hover:from-green-600 hover:to-blue-600 text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25" 
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

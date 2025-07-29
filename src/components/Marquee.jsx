import { memo } from 'react';

const Marquee = () => {
  const marqueeItems = [
    "FUTURE NETWORK • ÉLECTRICITÉ • SÉCURITÉ • DOMOTIQUE",
    "INSTALLATION • MAINTENANCE • SMART HOME • INNOVATION", 
    "QUALITÉ • FIABILITÉ • EXCELLENCE • TECHNOLOGIE"
  ];

  return (
    <section className="marquee-container">
      {marqueeItems.map((item, index) => (
        <div key={index} className="marquee">
          <div>
            <span>{item}</span>
            <span>{item}</span>
            <span>{item}</span>
            <span>{item}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Marquee;
import { memo } from 'react';

const StatCard = ({ title, value, description }) => {
  return (
    <div className="outer">
      <div className="dot"></div>
      <div className="card">
        <div className="ray"></div>
        <div className="text">{value}</div>
        <div className="description">{description}</div>
        <div className="title">{title}</div>
        <div className="line topl"></div>
        <div className="line leftl"></div>
        <div className="line bottoml"></div>
        <div className="line rightl"></div>
      </div>
    </div>
  );
};

const Innovation = () => {
  const stats = [
    {
      title: "Projets",
      value: "500+",
      description: "Réalisés"
    },
    {
      title: "Clients",
      value: "250+", 
      description: "Satisfaits"
    },
    {
      title: "Expertise",
      value: "10+",
      description: "Années"
    }
  ];

  return (
    <section className="innovation-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="innovation-title">
            Excellence & Innovation
          </h2>
          <p className="innovation-subtitle">
            Notre expertise en chiffres
          </p>
        </div>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Innovation; 
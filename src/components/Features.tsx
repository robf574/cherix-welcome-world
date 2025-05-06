
import { Shield, Code, Search, Check } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) => (
  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
    <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
      <Icon className="text-accent-green" size={24} />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "RNG Certification",
      description: "Our advanced testing ensures your random number generators meet strict industry standards."
    },
    {
      icon: Code,
      title: "Source Code Review",
      description: "We thoroughly analyze your gambling platform's code to identify vulnerabilities and ensure fairness."
    },
    {
      icon: Search,
      title: "Market Research",
      description: "Access comprehensive insights on regulatory requirements and market entry strategies."
    },
    {
      icon: Check,
      title: "Compliance Solutions",
      description: "Stay ahead with our complete suite of certification services for global gambling regulations."
    }
  ];

  return (
    <section id="features" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certification <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            RiskCherry provides comprehensive certification solutions to ensure your gambling platform meets global standards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

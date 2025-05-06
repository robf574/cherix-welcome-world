
import { Check, Star, Users, Code } from "lucide-react";

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
      icon: Check,
      title: "Quality Assurance",
      description: "Our robust testing framework ensures your digital products meet the highest standards."
    },
    {
      icon: Star,
      title: "Premium Experience",
      description: "Create exceptional user experiences that keep your customers coming back."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Connect your teams with integrated tools that boost productivity."
    },
    {
      icon: Code,
      title: "Advanced Technology",
      description: "Built with cutting-edge technologies to future-proof your digital presence."
    }
  ];

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Features Designed for <span className="gradient-text">Success</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            CheriX provides the tools and features you need to excel in today's competitive digital landscape.
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

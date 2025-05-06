
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceProps {
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
  imageAlt: string;
}

const ServiceCard = ({ title, description, features, imageUrl, imageAlt }: ServiceProps) => (
  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 flex flex-col md:flex-row gap-8 mb-16">
    <div className="md:w-1/3">
      <div className="rounded-lg overflow-hidden">
        <img src={imageUrl} alt={imageAlt} className="w-full h-auto" />
      </div>
    </div>
    <div className="md:w-2/3">
      <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-white/90 mb-6">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-white/80">
            <span className="bg-accent-green text-white p-1 rounded-full mr-3 mt-1">
              <FileText size={14} />
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <Button className="bg-white hover:bg-white/90 text-core-red">
        Learn More
      </Button>
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Testing Services",
      description: "Comprehensive testing solutions to ensure your gambling platform meets all technical requirements and industry standards.",
      features: [
        "Game logic and mathematics verification",
        "Performance testing under various conditions",
        "Security vulnerability assessments",
        "Cross-platform compatibility testing"
      ],
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      imageAlt: "Testing Services"
    },
    {
      title: "Inspection & Auditing",
      description: "Thorough inspection and auditing processes that identify potential issues before they impact your business.",
      features: [
        "Code quality and architecture reviews",
        "Compliance with industry regulations",
        "Operational process evaluation",
        "Data handling and privacy assessments"
      ],
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      imageAlt: "Inspection Services"
    },
    {
      title: "RNG Certification",
      description: "Specialized certification for random number generators, ensuring fair play and regulatory compliance.",
      features: [
        "Statistical analysis of randomness",
        "Implementation verification",
        "Compliance with international standards",
        "Documentation and certification reports"
      ],
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      imageAlt: "RNG Certification"
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Detailed <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Explore our comprehensive range of gambling certification services designed to ensure compliance, fairness, and trust.
          </p>
        </div>
        
        <div className="space-y-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

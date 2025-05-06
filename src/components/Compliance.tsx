
import { Shield, Info, ShieldCheck } from "lucide-react";

interface CertificationProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const CertificationCard = ({ title, description, icon: Icon }: CertificationProps) => (
  <div className="bg-white p-6 rounded-xl shadow-md">
    <div className="flex items-center mb-4">
      <div className="bg-core-red p-3 rounded-full mr-3">
        <Icon className="text-white" size={24} />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Compliance = () => {
  const certifications = [
    {
      title: "ISO 27001 Certified",
      description: "Our information security management systems meet the highest international standards for security practices.",
      icon: ShieldCheck
    },
    {
      title: "GLI-19 Compliant",
      description: "We adhere to Gaming Laboratories International standards for interactive gaming systems.",
      icon: Shield
    },
    {
      title: "MGA Approved",
      description: "Recognized by the Malta Gaming Authority as an approved certification provider for online gambling platforms.",
      icon: Info
    },
    {
      title: "UKGC Accredited",
      description: "Accredited by the UK Gambling Commission to test and certify gambling products for the UK market.",
      icon: ShieldCheck
    },
    {
      title: "eCOGRA Partner",
      description: "Working in partnership with eCOGRA to promote fair gaming and player protection standards.",
      icon: Shield
    },
    {
      title: "NIST Framework",
      description: "Our testing methodologies incorporate National Institute of Standards and Technology cybersecurity frameworks.",
      icon: Info
    }
  ];

  return (
    <section id="compliance" className="section-padding bg-white/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            RiskCherry maintains the highest level of accreditation from leading regulatory bodies worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard 
              key={index}
              title={cert.title}
              description={cert.description}
              icon={cert.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Compliance;

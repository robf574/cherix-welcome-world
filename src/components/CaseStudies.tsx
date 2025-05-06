
import { FileSearch } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CaseStudyProps {
  title: string;
  client: string;
  challenge: string;
  solution: string;
  results: string;
  quote: string;
  author: string;
  position: string;
  company: string;
}

const CaseStudyCard = ({ 
  title, 
  client, 
  challenge, 
  solution, 
  results, 
  quote, 
  author, 
  position, 
  company 
}: CaseStudyProps) => (
  <div className="bg-white p-8 rounded-xl shadow-md">
    <div className="mb-6">
      <span className="bg-core-red text-white px-3 py-1 rounded-full text-sm font-medium">
        {client}
      </span>
    </div>
    <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
    
    <div className="space-y-4 mb-6">
      <div>
        <h4 className="font-semibold text-gray-900 mb-1">Challenge:</h4>
        <p className="text-gray-700">{challenge}</p>
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-1">Solution:</h4>
        <p className="text-gray-700">{solution}</p>
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-1">Results:</h4>
        <p className="text-gray-700">{results}</p>
      </div>
    </div>
    
    <blockquote className="border-l-4 border-accent-green pl-4 italic text-gray-600 mb-6">
      "{quote}"
      <footer className="mt-2 font-medium text-gray-900">
        {author}, {position} at {company}
      </footer>
    </blockquote>
    
    <Button className="bg-core-red hover:bg-secondary-red text-white">
      Read Full Case Study
    </Button>
  </div>
);

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Accelerating Market Entry for Global Casino Platform",
      client: "GlobeGames Ltd.",
      challenge: "Needed rapid certification for 200+ games to enter new regulated markets within 3 months.",
      solution: "Deployed CheriX AI to automate code reviews and RNG testing, with expert oversight.",
      results: "Achieved full certification in just 45 days, enabling timely market entry and $2.4M in additional Q1 revenue.",
      quote: "RiskCherry's innovative approach cut our certification timeline by 65%, directly contributing to our successful market expansion strategy.",
      author: "Michael Rodriguez",
      position: "CTO",
      company: "GlobeGames Ltd."
    },
    {
      title: "Streamlining Compliance for Multi-Jurisdiction Operator",
      client: "Horizon Gaming",
      challenge: "Managing complex regulatory requirements across 14 different jurisdictions with inconsistent standards.",
      solution: "Custom compliance matrix with automated verification processes tailored to each jurisdiction.",
      results: "95% reduction in compliance management overhead, zero regulatory issues in 18 months of operation.",
      quote: "The comprehensive regulatory intelligence that RiskCherry provided has been instrumental in our growth across multiple markets.",
      author: "Sarah Chang",
      position: "Compliance Director",
      company: "Horizon Gaming"
    },
    {
      title: "RNG Vulnerability Resolution for Established Platform",
      client: "LuckyPlay Technologies",
      challenge: "Identified statistical anomalies in RNG implementation affecting game fairness and creating legal exposure.",
      solution: "Deep analysis and reconstruction of RNG systems with enhanced security measures.",
      results: "Resolved vulnerabilities, passed all regulatory audits, and implemented improved monitoring system.",
      quote: "RiskCherry not only solved our immediate issue but improved our entire approach to random number generation and game fairness.",
      author: "Daniel Foster",
      position: "CEO",
      company: "LuckyPlay Technologies"
    }
  ];

  return (
    <section id="case-studies" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-white/20 p-3 rounded-full mb-4">
            <FileSearch className="text-white" size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            See how we've helped leading gambling operators overcome challenges and achieve their goals through our certification expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard key={index} {...caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

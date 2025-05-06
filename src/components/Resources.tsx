
import { Book, Calendar, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResourceProps {
  title: string;
  description: string;
  type: string;
  icon: React.ElementType;
  date?: string;
  downloadLink?: string;
  readMoreLink?: string;
}

const ResourceCard = ({ title, description, type, icon: Icon, date, downloadLink, readMoreLink }: ResourceProps) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <span className={`${type === 'Guide' ? 'bg-accent-green' : type === 'Whitepaper' ? 'bg-blue-500' : 'bg-amber-500'} text-white px-3 py-1 rounded-full text-sm font-medium`}>
        {type}
      </span>
      {date && <span className="text-gray-500 text-sm">{date}</span>}
    </div>
    <div className="flex items-start mb-4">
      <div className="bg-gray-100 p-3 rounded-lg mr-4">
        <Icon className="text-core-red" size={24} />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <p className="text-gray-600 mb-6">{description}</p>
    <div className="flex gap-3">
      {downloadLink && (
        <Button className="bg-core-red hover:bg-secondary-red text-white flex-1">
          Download
        </Button>
      )}
      {readMoreLink && (
        <Button variant="outline" className="border-core-red text-core-red hover:bg-core-red/10 flex-1">
          Read More
        </Button>
      )}
    </div>
  </div>
);

const Resources = () => {
  const resources = [
    {
      title: "Complete Guide to RNG Certification",
      description: "Everything operators need to know about random number generator testing, compliance requirements, and best practices.",
      type: "Guide",
      icon: Book,
      downloadLink: "#",
    },
    {
      title: "Regulatory Changes in iGaming: 2025 Outlook",
      description: "Analysis of upcoming regulatory shifts across major gambling markets and strategies for maintaining compliance.",
      type: "Whitepaper",
      icon: Folder,
      downloadLink: "#",
    },
    {
      title: "The Role of AI in Gambling Certification",
      description: "How artificial intelligence is transforming testing methodologies and improving efficiency in certification processes.",
      type: "Blog Post",
      icon: Calendar,
      date: "May 2, 2025",
      readMoreLink: "#",
    },
    {
      title: "Security Standards for Online Casinos",
      description: "Comprehensive overview of security requirements, vulnerabilities, and implementation strategies for online gambling platforms.",
      type: "Guide",
      icon: Book,
      downloadLink: "#",
    },
    {
      title: "Market Entry Strategy: Asia-Pacific Region",
      description: "Detailed analysis of regulatory landscapes, player preferences, and certification requirements across APAC gambling markets.",
      type: "Whitepaper",
      icon: Folder,
      downloadLink: "#",
    },
    {
      title: "Blockchain Technology in Fair Gaming",
      description: "Exploring how blockchain is being used to create verifiably fair gambling experiences and its regulatory implications.",
      type: "Blog Post",
      icon: Calendar,
      date: "April 18, 2025",
      readMoreLink: "#",
    },
  ];

  return (
    <section id="resources" className="section-padding bg-white/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Educational <span className="gradient-text">Resources</span>
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Access our library of resources designed to help you navigate the complex world of gambling regulations and certification.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-white hover:bg-white/90 text-core-red px-8 py-6 text-lg">
            View All Resources
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resources;

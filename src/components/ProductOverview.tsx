
import { Box, Check, MessageSquare, FileText, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductOverview = () => {
  return (
    <section id="product" className="section-padding bg-white/10 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Introducing <span className="gradient-text">RiskCherry Assistant</span>
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Our GPT-based assistant revolutionizing online gambling certification and compliance processes.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative fade-in">
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                alt="RiskCherry AI Assistant" 
                className="rounded-lg w-full"
              />
              <div className="absolute top-4 left-4 bg-accent-green text-white px-4 py-2 rounded-full font-medium">
                AI-Powered
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-start mb-8">
              <div className="bg-accent-green/10 p-4 rounded-full mr-4">
                <MessageSquare className="text-accent-green" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">Superhuman Assistant</h3>
                <p className="text-lg text-white/90">
                  Acts as your dedicated Tech Account Manager and Tech Compliance Manager, providing instant, tailored advice on certification and audits.
                </p>
              </div>
            </div>
            
            <div className="space-y-6 mb-8">
              <div className="bg-white/20 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-white">Key Capabilities</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-white/90">
                    <span className="bg-accent-green text-white p-1 rounded-full mr-3">
                      <Check size={16} />
                    </span>
                    Automated technical onboarding and document management
                  </li>
                  <li className="flex items-center text-white/90">
                    <span className="bg-accent-green text-white p-1 rounded-full mr-3">
                      <Check size={16} />
                    </span>
                    Real-time certification queries and market compliance guidance
                  </li>
                  <li className="flex items-center text-white/90">
                    <span className="bg-accent-green text-white p-1 rounded-full mr-3">
                      <Check size={16} />
                    </span>
                    Seamless integration with RiskCherry Portal and Slack
                  </li>
                  <li className="flex items-center text-white/90">
                    <span className="bg-accent-green text-white p-1 rounded-full mr-3">
                      <Check size={16} />
                    </span>
                    Proactive regulatory updates and personalized alerts
                  </li>
                </ul>
              </div>
            </div>
            
            <Button className="bg-accent-green hover:bg-accent-green/90 text-white px-6 py-4 text-lg">
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;

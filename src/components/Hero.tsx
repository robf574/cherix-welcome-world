
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Transform</span> Your Digital Experience
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              CheriX helps businesses create seamless digital experiences that engage customers and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-core-red hover:bg-secondary-red text-white px-8 py-6 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-core-red text-core-red hover:bg-core-red/5 px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10 fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-accent rounded-full opacity-50 blur-2xl"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-secondary/30 rounded-full opacity-50 blur-2xl"></div>
              <div className="relative bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                  alt="Digital Experience Platform" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

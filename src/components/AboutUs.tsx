
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative fade-in">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent rounded-full opacity-30 blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="About RiskCherry" 
              className="rounded-xl relative z-10 shadow-lg"
            />
          </div>
          <div className="md:w-1/2 fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="text-lg text-white/90 mb-6">
              At RiskCherry, we're redefining trust and efficiency in online gambling certification. Founded by industry veterans, we combine technical expertise with innovative AI solutions to provide faster, more reliable certification processes.
            </p>
            <p className="text-lg text-white/90 mb-8">
              Our mission is to elevate industry standards through rigorous testing methodologies and cutting-edge technology, ensuring fairness and compliance for players and operators worldwide.
            </p>
            <Button className="bg-accent-green hover:bg-accent-green/90 text-white px-6 py-4 text-lg">
              Meet Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

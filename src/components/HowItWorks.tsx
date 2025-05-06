
const Step = ({ number, title, description }: { 
  number: number, 
  title: string, 
  description: string 
}) => (
  <div className="flex flex-col items-center md:items-start text-center md:text-left">
    <div className="bg-white text-core-red w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
      {number}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-white/80">{description}</p>
  </div>
);

const HowItWorks = () => {
  const steps = [
    {
      title: "Sign Up",
      description: "Create your account and access the CheriX dashboard to get started."
    },
    {
      title: "Configure",
      description: "Set up your preferences and customize your digital experience platform."
    },
    {
      title: "Integrate",
      description: "Connect your existing tools and data sources to CheriX."
    },
    {
      title: "Launch",
      description: "Go live with your enhanced digital experience and start seeing results."
    }
  ];

  return (
    <section id="how-it-works" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How <span className="gradient-text">CheriX</span> Works
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Get up and running with our simple four-step process.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-white/30">
            <div className="absolute top-0 left-0 h-full bg-white" style={{ width: "30%" }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 relative z-10">
            {steps.map((step, index) => (
              <Step
                key={index}
                number={index + 1}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

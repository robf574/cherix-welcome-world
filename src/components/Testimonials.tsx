import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatarUrl: string;
  initials: string;
}

const TestimonialCard = ({ quote, name, title, company, avatarUrl, initials }: TestimonialProps) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
      <div className="mb-6">
        <svg width="45" height="36" viewBox="0 0 45 36" className="text-core-red">
          <path 
            fill="currentColor" 
            d="M13.415.43c-2.523-.21-4.694.62-6.513 2.492C4.606 5.198 4.1 6.78 4.205 8.78c1.16 0 5.82.113 6.727 6.544.102.727-1.02 5.32-7.472 8.085L0 19.285c3.419-6.05 5.13-12.52 5.13-19.414V.466c2.842-.623 5.347-.727 8.285-.036zM38.374.43c-2.523-.21-4.694.62-6.513 2.492-2.296 2.276-2.802 3.858-2.697 5.858 1.16 0 5.82.113 6.727 6.544.102.727-1.02 5.32-7.472 8.085l-3.46-4.124c3.419-6.05 5.13-12.52 5.13-19.414V.466c2.842-.623 5.347-.727 8.285-.036z" 
          />
        </svg>
      </div>
      <p className="text-gray-700 mb-6 italic">{quote}</p>
      <div className="flex items-center">
        <Avatar className="mr-3 h-10 w-10">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{title}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "CheriX revolutionized how we engage with our customers online. The platform is intuitive and the results have been outstanding.",
      name: "Sarah Johnson",
      title: "Marketing Director",
      company: "TechFlow Inc.",
      avatarUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=256&q=80",
      initials: "SJ"
    },
    {
      quote: "We've seen a 40% increase in customer satisfaction since implementing CheriX. The analytics and insights are game-changing.",
      name: "Michael Chen",
      title: "CEO",
      company: "Novus Dynamics",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=256&q=80",
      initials: "MC"
    },
    {
      quote: "The support team at CheriX is exceptional. They've been there every step of the way as we transformed our digital presence.",
      name: "Emily Torres",
      title: "Operations Manager",
      company: "Bright Solutions",
      avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&q=80",
      initials: "ET"
    }
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about CheriX.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

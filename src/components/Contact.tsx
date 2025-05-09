
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";

const ContactInfo = ({ icon: Icon, title, content }: {
  icon: React.ElementType,
  title: string,
  content: string | React.ReactNode
}) => (
  <div className="flex items-start">
    <div className="mr-4 p-2 bg-white/20 rounded-full">
      <Icon className="text-white h-5 w-5" />
    </div>
    <div>
      <h4 className="font-medium text-white">{title}</h4>
      <div className="text-white/80">{content}</div>
    </div>
  </div>
);

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Inquiry received!",
        description: "Our certification experts will contact you within 24 hours.",
        duration: 5000
      });
      
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-white/20 p-3 rounded-full mb-4">
            <MessageSquare className="text-white" size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Ready to ensure your gambling platform meets the highest standards? Reach out to our certification experts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-6 mb-8">
              <ContactInfo 
                icon={Mail}
                title="Email"
                content={<a href="mailto:certification@riskcherry.com" className="hover:text-white/70">certification@riskcherry.com</a>}
              />
              <ContactInfo 
                icon={Phone}
                title="Phone"
                content={<a href="tel:+12345678901" className="hover:text-white/70">+1 (234) 567-8901</a>}
              />
              <ContactInfo 
                icon={MapPin}
                title="Address"
                content={<>
                  123 Certification Avenue<br />
                  Gaming District, NV 89109
                </>}
              />
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <h4 className="font-bold text-white mb-2">Certification Hours</h4>
              <p className="text-white/80">
                Monday - Friday: 9AM - 6PM (GMT)<br />
                24/7 Emergency Support Available
              </p>
            </div>
          </div>
          
          <div className="bg-white/10 p-8 rounded-xl border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                  Full Name*
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full bg-white/20 border-white/30 placeholder:text-white/50 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                  Email Address*
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full bg-white/20 border-white/30 placeholder:text-white/50 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white mb-1">
                  Company Name*
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company"
                  required
                  className="w-full bg-white/20 border-white/30 placeholder:text-white/50 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-white mb-1">
                  Service Interested In*
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/20 border-white/30 text-white rounded-md h-10 px-3"
                >
                  <option value="" disabled className="bg-gray-900">Select a service</option>
                  <option value="RNG Testing" className="bg-gray-900">RNG Testing</option>
                  <option value="Source Code Review" className="bg-gray-900">Source Code Review</option>
                  <option value="Compliance Certification" className="bg-gray-900">Compliance Certification</option>
                  <option value="Market Entry Research" className="bg-gray-900">Market Entry Research</option>
                  <option value="Other" className="bg-gray-900">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                  Message*
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your certification needs"
                  required
                  className="min-h-[120px] w-full bg-white/20 border-white/30 placeholder:text-white/50 text-white"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-accent-green hover:bg-accent-green/90 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

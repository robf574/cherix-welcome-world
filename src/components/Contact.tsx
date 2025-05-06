
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";

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
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000
      });
      
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Have questions or ready to get started? Reach out to our team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-6 mb-8">
              <ContactInfo 
                icon={Mail}
                title="Email"
                content={<a href="mailto:info@cherix.com" className="hover:text-white/70">info@cherix.com</a>}
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
                  123 Innovation Way<br />
                  Tech District, CA 90210
                </>}
              />
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <h4 className="font-bold text-white mb-2">Business Hours</h4>
              <p className="text-white/80">
                Monday - Friday: 9AM - 6PM<br />
                Saturday: 10AM - 4PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
          
          <div className="bg-white/10 p-8 rounded-xl border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                  Full Name
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
                  Email Address
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
                <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  className="min-h-[120px] w-full bg-white/20 border-white/30 placeholder:text-white/50 text-white"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-white hover:bg-white/90 text-core-red"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img 
                src="/lovable-uploads/5d42f67f-a1c2-4e51-b2ea-15b37e6831e2.png" 
                alt="RiskCherry Logo" 
                className="h-12 mr-2" 
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-core-red transition-colors">About</a>
            <a href="#features" className="text-gray-600 hover:text-core-red transition-colors">Services</a>
            <a href="#product" className="text-gray-600 hover:text-core-red transition-colors">CheriX</a>
            <a href="#case-studies" className="text-gray-600 hover:text-core-red transition-colors">Case Studies</a>
            <a href="#resources" className="text-gray-600 hover:text-core-red transition-colors">Resources</a>
            <a href="#contact" className="text-gray-600 hover:text-core-red transition-colors">Contact</a>
            <Button className="bg-core-red hover:bg-secondary-red text-white">Get Certified</Button>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-6 space-y-4">
            <a 
              href="#about" 
              className="block py-2 text-gray-600 hover:text-core-red"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a 
              href="#features" 
              className="block py-2 text-gray-600 hover:text-core-red"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a 
              href="#product" 
              className="block py-2 text-gray-600 hover:text-core-red"
              onClick={() => setIsOpen(false)}
            >
              CheriX
            </a>
            <a 
              href="#case-studies" 
              className="block py-2 text-gray-600 hover:text-core-red" 
              onClick={() => setIsOpen(false)}
            >
              Case Studies
            </a>
            <a 
              href="#resources" 
              className="block py-2 text-gray-600 hover:text-core-red" 
              onClick={() => setIsOpen(false)}
            >
              Resources
            </a>
            <a 
              href="#contact" 
              className="block py-2 text-gray-600 hover:text-core-red"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <Button className="w-full bg-core-red hover:bg-secondary-red text-white">
              Get Certified
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

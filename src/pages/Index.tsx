
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Features from "@/components/Features";
import ProductOverview from "@/components/ProductOverview";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Resources from "@/components/Resources";
import Compliance from "@/components/Compliance";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <Features />
      <ProductOverview />
      <Services />
      <CaseStudies />
      <Resources />
      <Compliance />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

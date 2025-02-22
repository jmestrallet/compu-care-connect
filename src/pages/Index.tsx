
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProblemSolutions from "@/components/ProblemSolutions";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProblemSolutions />
      <Services />
      <Process />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

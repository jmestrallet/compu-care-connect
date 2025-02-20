
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#3973B9] pt-16"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight animate-fade-in">
            Todo es más fácil cuando sabés a quién llamar
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl sm:text-2xl text-white/90 mb-12 animate-fade-in">
            Soporte técnico confiable y amigable en Montevideo (y remoto en todo Uruguay)
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <a
              href="https://wa.me/59899123456"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel px-8 py-4 text-white hover:text-[#3973B9] hover:bg-white rounded-full font-semibold transition-all duration-300 flex items-center gap-2 group"
            >
              Contactanos ahora
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

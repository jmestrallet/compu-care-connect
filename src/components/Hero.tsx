
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center bg-[#3973B9] pt-16 overflow-hidden"
    >
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://i.imgur.com/WPeQlyD.jpeg" 
          alt="Señora hablando por teléfono"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#3973B9]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3973B9]/90 via-[#3973B9]/70 to-transparent" />
      </div>

      {/* Patrón decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}
        />
      </div>
      
      {/* Contenido */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-left max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Todo es más fácil cuando sabés 
            <br />
            <span className="text-yellow-300 drop-shadow-lg">a quién llamar</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-12 font-light">
            Soporte técnico confiable y amigable en Montevideo
            <br className="hidden sm:block" />
            <span className="opacity-75">(y remoto en todo Uruguay)</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="https://wa.me/59899123456"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel px-8 py-4 text-white hover:text-[#3973B9] hover:bg-white rounded-full font-semibold transition-all duration-300 flex items-center gap-2 group transform hover:scale-105"
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


import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const frases = [
      "No entiendo cómo usar WhatsApp o alguna app en el celu.",
      "Mi compu anda lentísima, ¡no sé qué hacer!",
      "Se me tildó la tele y no puedo ver Netflix.",
      "Necesito pasar las fotos de mi celular viejo al nuevo.",
      "La impresora no me imprime, ¡y necesito esos papeles urgente!",
      "Me sale un error raro en la compu.",
      "No me anda el WiFi",
    ];

    let fraseActual = 0;
    const elementoFrase = document.getElementById("fraseCambiante");

    function cambiarFrase() {
      elementoFrase.classList.remove("visible");

      setTimeout(() => {
        fraseActual = (fraseActual + 1) % frases.length;
        elementoFrase.textContent = frases[fraseActual];
        elementoFrase.classList.add("visible");
      }, 500);
    }

    setInterval(cambiarFrase, 5000);

    elementoFrase.textContent = frases[0];
    elementoFrase.classList.add("visible");
  }, []);

  return (
    <section id="home" className="relative min-h-[75vh] flex items-center justify-center bg-[#3973B9] pt-16 overflow-hidden">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0">
        <img src="https://i.imgur.com/WPeQlyD.jpeg" alt="Señora hablando por teléfono" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-[#3973B9]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3973B9]/90 via-[#3973B9]/70 to-transparent" />
      </div>
      
      {/* Contenido */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-left max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Todo es más fácil cuando sabés 
            <br />
            <span className="drop-shadow-lg text-slate-50">a quién llamar</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-12 font-light">
            Soporte técnico confiable y amigable para tu día a día
            <br className="hidden sm:block" />
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a href="https://wa.me/59899123456" target="_blank" rel="noopener noreferrer" className="glass-panel px-8 py-4 text-white hover:text-[#3973B9] hover:bg-white rounded-full font-semibold transition-all duration-300 flex items-center gap-2 group transform hover:scale-105">
              Contactanos ahora
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Frases cambiantes - Ahora reposicionadas */}
      <div id="fraseContenedor" className="frase-contenedor">
        <p id="fraseCambiante" className="frase-cambiante"></p>
      </div>
    </section>
  );
};

export default Hero;

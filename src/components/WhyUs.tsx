
import { Heart, Zap, Calendar, Shield } from "lucide-react";

const WhyUs = () => {
  const reasons = [
    {
      icon: Heart,
      title: "Calidez y Cercanía",
      description:
        "Explicamos todo de forma clara y simple, sin usar jerga técnica complicada.",
    },
    {
      icon: Zap,
      title: "Soluciones Rápidas y Accesibles",
      description:
        "Resolvemos tus problemas de forma eficiente y a precios razonables.",
    },
    {
      icon: Calendar,
      title: "Horarios Flexibles",
      description:
        "Nos adaptamos a tu disponibilidad, incluso fuera del horario comercial.",
    },
    {
      icon: Shield,
      title: "Confianza y Transparencia",
      description:
        "Te explicamos paso a paso qué haremos y por qué, sin sorpresas.",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir compu.uy?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nos destacamos por brindar un servicio personalizado y de calidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 transition-colors hover-scale"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <reason.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

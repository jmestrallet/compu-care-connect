
import { Computer, Smartphone, Tv, Video } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Computer,
      title: "Reparación y Optimización de PC",
      description:
        "Solucionamos problemas de hardware y software, optimizamos el rendimiento y realizamos mantenimiento preventivo.",
    },
    {
      icon: Smartphone,
      title: "Configuración de Celulares",
      description:
        "Te ayudamos a configurar tu nuevo celular, instalar apps y transferir datos de forma segura.",
    },
    {
      icon: Tv,
      title: "Smart TV y Streaming",
      description:
        "Instalación y configuración de Smart TV, Netflix, Amazon Prime y otros servicios de streaming.",
    },
    {
      icon: Video,
      title: "Soporte Remoto",
      description:
        "Asistencia técnica a distancia vía AnyDesk o TeamViewer, o visitas a domicilio en Montevideo.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Lo que hacemos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nos especializamos en hacer la tecnología accesible para todos,
            especialmente para quienes no están familiarizados con ella.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-white hover-scale"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

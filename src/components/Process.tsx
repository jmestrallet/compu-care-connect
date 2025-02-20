
import { useEffect, useRef } from "react";

const Process = () => {
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = processRef.current?.querySelectorAll(".fade-in");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      title: "Nos contás tu problema",
      description: "Por WhatsApp, llamada o email. Simple y sin complicaciones.",
    },
    {
      title: "Encontramos la mejor solución",
      description:
        "Evaluamos si podemos resolverlo de forma remota o si es necesaria una visita.",
    },
    {
      title: "Nos ponemos a trabajar",
      description:
        "Reparamos, configuramos o instalamos. Si es necesario, retiramos y devolvemos el equipo.",
    },
    {
      title: "¡Listo!",
      description:
        "Tu dispositivo funciona perfectamente y te explicamos todo el proceso.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-gray-50" ref={processRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Cómo lo hacemos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un proceso simple y transparente, diseñado para tu tranquilidad
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200" />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-center fade-in ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>
                      <h3 className="ml-4 text-xl font-semibold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;


const Testimonials = () => {
  const testimonials = [
    {
      text: "Mi computadora estaba muy lenta y no sabía qué hacer. El equipo de compu.uy no solo la arregló sino que me explicó todo de forma muy clara. ¡Excelente servicio!",
      author: "Liliana B.",
      role: "Cliente desde 2022",
    },
    {
      text: "Necesitaba configurar Netflix en mi Smart TV y WhatsApp en mi nuevo celular. Fueron muy pacientes y me ayudaron con todo. Los super recomiendo.",
      author: "Adriana C.",
      role: "Cliente desde 2023",
    },
    {
      text: "Rápidos, eficientes y muy amables. Me ayudaron de forma remota con un problema urgente de mi laptop. Definitivamente volveré a contactarlos.",
      author: "Ricardo M.",
      role: "Cliente desde 2023",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de
            presentación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-48 flex items-center justify-center mb-6">
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

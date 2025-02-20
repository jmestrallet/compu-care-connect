
import { Phone, Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ¿Listo para resolver tus problemas técnicos?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Contactanos hoy mismo y te ayudamos con lo que necesites
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <a
            href="https://wa.me/59899123456"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 rounded-2xl hover:bg-gray-50 transition-colors group"
          >
            <MessageSquare className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-gray-600 text-center">
              Escribinos por WhatsApp para una respuesta rápida
            </p>
          </a>

          <a
            href="tel:+59899123456"
            className="flex flex-col items-center p-6 rounded-2xl hover:bg-gray-50 transition-colors group"
          >
            <Phone className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Teléfono</h3>
            <p className="text-gray-600 text-center">+598 99 123 456</p>
          </a>

          <a
            href="mailto:info@compu.uy"
            className="flex flex-col items-center p-6 rounded-2xl hover:bg-gray-50 transition-colors group"
          >
            <Mail className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 text-center">info@compu.uy</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

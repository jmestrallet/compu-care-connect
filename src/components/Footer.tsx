
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-2xl font-semibold text-primary mb-4 block">
              compu.uy
            </a>
            <p className="text-gray-600 max-w-sm">
              Soporte técnico confiable y amigable en Montevideo y remoto en todo
              Uruguay.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li>
                <p className="text-gray-600">Calle Falsa 123</p>
                <p className="text-gray-600">Montevideo, Uruguay</p>
              </li>
              <li>
                <a
                  href="tel:+59899123456"
                  className="text-gray-600 hover:text-primary"
                >
                  +598 99 123 456
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@compu.uy"
                  className="text-gray-600 hover:text-primary"
                >
                  info@compu.uy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Seguinos
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} compu.uy. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

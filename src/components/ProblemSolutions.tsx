
import React from "react";
import { motion } from "framer-motion";

type Problem = {
  problem: string;
  solution: string;
};

const problems: Problem[] = [
  {
    problem: "Mi compu está tan lenta que puedo hacer un café mientras abre un archivo.",
    solution: "La ponemos a punto y la dejamos volando, como cuando era nueva.",
  },
  {
    problem: "Tengo un Smart TV, pero no logro configurar Netflix o Amazon Prime.",
    solution: "Te configuramos todo para que solo tengas que elegir la serie y darle play.",
  },
  {
    problem: "Mi celu me dice que no tiene espacio, pero no sé qué borrar.",
    solution: "Liberamos espacio y te enseñamos a mantenerlo ordenado, sin perder nada importante.",
  },
  {
    problem: "La impresora no quiere imprimir, y ya probé de todo.",
    solution: "Revisamos la conexión, configuramos los drivers y te dejamos imprimir sin dramas.",
  },
  {
    problem: "No entiendo cómo usar WhatsApp o alguna app en el celu.",
    solution: "Te guiamos paso a paso, con paciencia, para que te sientas seguro usándolas.",
  },
];

const ProblemCard = ({ problem, solution }: Problem) => {
  return (
    <div className="relative group h-40 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
      <div className="p-6 h-full flex items-center justify-center text-center">
        <p className="text-gray-800 group-hover:opacity-0 transition-opacity duration-300">
          "{problem}"
        </p>
        <div className="absolute inset-0 bg-[#3973B9] p-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-center">
            {solution}
          </p>
        </div>
      </div>
    </div>
  );
};

const ProblemSolutions = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Problemas comunes, soluciones simples
          </h2>
          <p className="text-xl text-gray-600">
            Estos son algunos ejemplos de cómo ayudamos a nuestros clientes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProblemCard problem={item.problem} solution={item.solution} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutions;

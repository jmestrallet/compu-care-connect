
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 cursor-pointer max-w-2xl mx-auto"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence mode="wait">
        {!isHovered ? (
          <motion.div
            key="problem"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-white/90 text-xl sm:text-2xl text-center font-light"
          >
            "{problem}"
          </motion.div>
        ) : (
          <motion.div
            key="solution"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-white text-xl sm:text-2xl text-center font-medium"
          >
            {solution}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ProblemSolutions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % problems.length);
    }, 5000); // Cambiar cada 5 segundos

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative -mt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <ProblemCard key={currentIndex} {...problems[currentIndex]} />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProblemSolutions;

/*const Cursos = () => {
    return (
    <section id="#cursos" className="py-20 bg-white">
        <div className="container">
            <h2 className="text-3xl font-bold mb-8">Nuestros Cursos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {}
            <div className="p-6 shadow-lg rounded-xl bg-orange-50">Curso de React</div>
            <div className="p-6 shadow-lg rounded-xl bg-orange-50">Curso de Tailwind</div>
            <div className="p-6 shadow-lg rounded-xl bg-orange-50">Curso de Framer
Motion</div>
    </div>
    </div>
 </section>
 )
}

export default Cursos*/

import { motion } from "framer-motion"
import { cursosData } from "../../data/data"
import { FaClock, FaStar } from "react-icons/fa"

const Cursos = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  const getLevelColor = (level) => {
    switch(level) {
      case "Principiante": 
        return "bg-green-100 text-green-700 border-green-300"
      case "Intermedio": 
        return "bg-blue-100 text-blue-700 border-blue-300"
      case "Avanzado": 
        return "bg-purple-100 text-purple-700 border-purple-300"
      default: 
        return "bg-gray-100 text-gray-700 border-gray-300"
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-20">
      <div className="container px-4">
        
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl font-bold text-amber-900 mb-4"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"]
            }}
            transition={{
              duration: 5,
              repeat: Infinity
            }}
          >
            Nuestros Cursos
          </motion.h2>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto mb-4">
            Descubre nuestros programas diseñados para todos los niveles
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto"></div>
        </motion.div>

        {/* Grid de cursos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {cursosData.map((curso, index) => (
            <motion.div
              key={curso.id}
              variants={cardVariants}
              whileHover={{ 
                y: -15,
                boxShadow: "0 25px 50px rgba(146, 64, 14, 0.25)",
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-amber-100 hover:border-amber-300 transition-all group"
            >
              {/* Encabezado de la tarjeta con icono */}
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-8 text-center relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity
                  }}
                />
                <motion.div
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: 1.2
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-7xl mb-2 relative z-10"
                >
                  {curso.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-white relative z-10">
                  {curso.title}
                </h3>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 min-h-[60px]">
                  {curso.description}
                </p>

                {/* Información del curso */}
                <div className="space-y-3 mb-6">
                  <motion.div 
                    className="flex items-center gap-3 text-amber-700"
                    whileHover={{ x: 5 }}
                  >
                    <FaClock className="text-xl" />
                    <span className="font-semibold">Duración:</span>
                    <span>{curso.duration}</span>
                  </motion.div>

                  <motion.div 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <FaStar className="text-xl text-amber-500" />
                    <span className="font-semibold text-gray-700">Nivel:</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold border-2 ${getLevelColor(curso.level)}`}>
                      {curso.level}
                    </span>
                  </motion.div>
                </div>

                {/* Botón de inscripción */}
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 20px rgba(146, 64, 14, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  Inscribirse Ahora
                </motion.button>
              </div>

              {/* Decoración inferior */}
              <motion.div 
                className="h-2 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Sección de beneficios */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-amber-200">
            <h3 className="text-3xl font-bold text-amber-900 mb-6 text-center">
              ¿Por qué elegirnos? 🏆
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Instructores certificados internacionalmente",
                "Grupos reducidos para atención personalizada",
                "Instalaciones modernas y seguras",
                "Caballos entrenados y saludables",
                "Flexibilidad de horarios",
                "Certificación al finalizar"
              ].map((beneficio, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + (i * 0.1) }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <span className="text-2xl">✓</span>
                  <span className="font-medium">{beneficio}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to action final */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-amber-800 mb-6">
            ¿Listo para comenzar tu aventura ecuestre?
          </p>
          <motion.a
            href="/contacto"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(146, 64, 14, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-amber-600 to-amber-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg"
          >
            Contáctanos Hoy 📞
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Cursos
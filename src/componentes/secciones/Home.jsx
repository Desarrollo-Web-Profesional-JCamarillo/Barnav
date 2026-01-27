/*const Home = () => {
    return (
        <section
         id="/"
         className="h-screen flex items-center justify-center bg-gray-50"
        >
         <h1 className="text-5xl font-bold">
          Bienvenido a <span className="text-primary">JJCO Cursos</span>
        </h1>
        </section>
    );
};

export default Home;*/



import { motion } from "framer-motion"
import { GiHorseHead, GiHorseshoe } from "react-icons/gi"
import { FaHorse } from "react-icons/fa"

const Home = () => {
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden pt-20">
      
      {/* Elementos decorativos animados en el fondo */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-20 text-amber-200 opacity-20"
      >
        <GiHorseshoe className="text-9xl" />
      </motion.div>

      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 left-20 text-orange-200 opacity-20"
      >
        <GiHorseshoe className="text-8xl" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-40 left-1/4 text-yellow-200 opacity-30"
      >
        <FaHorse className="text-7xl" />
      </motion.div>

      <div className="container text-center z-10 px-4">
        
        {/* Logo animado principal */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 200
          }}
          className="mb-8 flex justify-center"
        >
          <motion.div animate={floatingAnimation}>
            <GiHorseHead className="text-9xl text-amber-700" />
          </motion.div>
        </motion.div>

        {/* Título principal */}
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-amber-900 mb-6"
        >
          Bienvenido a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
            Academia Ecuestre
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl md:text-2xl text-amber-700 mb-8 max-w-2xl mx-auto"
        >
          Descubre el arte de la equitación y conecta con estos magníficos animales
        </motion.p>

        {/* Caballos animados */}
        <div className="flex justify-center gap-8 mb-12">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                delay: 0.8 + (i * 0.2),
                duration: 0.6
              }}
            >
              <motion.div
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaHorse className="text-5xl text-amber-600" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Botones de acción */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="/cursos"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(146, 64, 14, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Explorar Cursos 🐴
          </motion.a>

          <motion.a
            href="/about"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(217, 119, 6, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-amber-700 border-2 border-amber-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-amber-50 transition-all"
          >
            Conocer Más
          </motion.a>
        </motion.div>

        {/* Estadísticas rápidas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { number: "15+", label: "Años de experiencia", icon: "🏆" },
            { number: "500+", label: "Estudiantes felices", icon: "😊" },
            { number: "50+", label: "Caballos entrenados", icon: "🐎" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border-2 border-amber-200"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-amber-800">{stat.number}</div>
              <div className="text-amber-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Home
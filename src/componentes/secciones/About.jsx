/*const About = () => {
    return (
     <section id="#about" className="py-20 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Sobre Nosotros</h2>
        <p className="text-lg">Aquí iría la información sobre la empresa o institución.</p>
        </div>
     </section>
 )
}

export default About*/



import { motion } from "motion/react"
import { GiHorseHead, GiHorseshoe } from "react-icons/gi"
import { FaAward, FaUsers, FaHeart } from "react-icons/fa"

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        type: "spring"
      }
    })
  }

  const features = [
    {
      icon: <FaAward className="text-5xl" />,
      title: "Excelencia",
      description: "Más de 15 años formando jinetes profesionales"
    },
    {
      icon: <FaUsers className="text-5xl" />,
      title: "Comunidad",
      description: "Una familia unida por la pasión ecuestre"
    },
    {
      icon: <FaHeart className="text-5xl" />,
      title: "Amor Animal",
      description: "Respeto y cuidado por nuestros caballos"
    }
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-20">
      <div className="container px-4">
        
        {/* Encabezado con animación */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2
            }}
            className="inline-block mb-6"
          >
            <GiHorseHead className="text-7xl text-amber-700" />
          </motion.div>
          
          <h2 className="text-5xl font-bold text-amber-900 mb-4">
            Sobre Nosotros
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto"></div>
        </motion.div>

        {/* Historia */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-amber-200">
            <motion.h3 
              className="text-3xl font-bold text-amber-800 mb-6 flex items-center gap-3"
              whileHover={{ x: 10 }}
            >
              <GiHorseshoe className="text-amber-600" />
              Nuestra Historia
            </motion.h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              La Academia Ecuestre nació en 2009 con el sueño de crear un espacio donde 
              personas de todas las edades pudieran conectar con estos magníficos animales. 
              Comenzamos con solo 5 caballos y una pequeña pista, pero nuestra pasión y 
              dedicación nos han llevado a convertirnos en una de las academias más 
              respetadas de la región.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Hoy contamos con instalaciones de primer nivel, más de 50 caballos 
              perfectamente entrenados y un equipo de instructores certificados 
              internacionalmente. Pero lo más importante es que hemos creado una 
              comunidad de amantes de los caballos que comparten valores de respeto, 
              disciplina y amor por estos nobles animales.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nuestra misión es simple: enseñar el arte de la equitación mientras 
              fomentamos el bienestar animal y creamos experiencias inolvidables para 
              cada uno de nuestros estudiantes.
            </p>
          </div>
        </motion.div>

        {/* Características principales */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(146, 64, 14, 0.2)"
              }}
              className="bg-white rounded-xl shadow-lg p-8 text-center border-2 border-amber-100 hover:border-amber-300 transition-all"
            >
              <motion.div 
                className="text-amber-600 mb-4 flex justify-center"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                {feature.icon}
              </motion.div>
              <h4 className="text-2xl font-bold text-amber-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Valores */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-6 text-center">
              Nuestros Valores
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Respeto", desc: "Hacia los caballos y todas las personas" },
                { title: "Seguridad", desc: "Protocolos estrictos en todas las actividades" },
                { title: "Pasión", desc: "Amor genuino por la equitación" },
                { title: "Excelencia", desc: "Búsqueda constante de la mejora" }
              ].map((valor, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4"
                >
                  <div className="text-2xl">✓</div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">{valor.title}</h4>
                    <p className="text-amber-100">{valor.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="/cursos"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(146, 64, 14, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-amber-600 to-amber-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg"
          >
            Únete a Nuestra Comunidad 🐴
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default About
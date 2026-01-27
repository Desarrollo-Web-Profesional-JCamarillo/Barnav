import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { FaHorse, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { GiHorseHead, GiHorseshoe } from "react-icons/gi"

const Galeria = () => {
  const [selectedGallery, setSelectedGallery] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Galería con múltiples imágenes por categoría
  const galleryItems = [
    { 
      id: 1, 
      title: "Entrenamiento Matutino", 
      icon: "🌅", 
      color: "from-orange-400 to-amber-500",
      images: [
        "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800",
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800",
        "https://images.unsplash.com/photo-1534126511673-b6899657816a?w=800",
        "https://images.unsplash.com/photo-1591662663234-61239e92e20e?w=800",
        "https://images.unsplash.com/photo-1516041774788-96a9c0a5f844?w=800"
      ]
    },
    { 
      id: 2, 
      title: "Salto Ecuestre", 
      icon: "🏇", 
      color: "from-amber-500 to-yellow-500",
      images: [
        "https://images.unsplash.com/photo-1598849066084-41c53f33a2da?w=800",
        "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=800",
        "https://images.unsplash.com/photo-1569180105320-e4c3f83e8296?w=800",
        "https://images.unsplash.com/photo-1567556265004-d7a3ae6a8a7c?w=800",
        "https://images.unsplash.com/photo-1570739885726-0b4cf72d6de9?w=800"
      ]
    },
    { 
      id: 3, 
      title: "Doma Clásica", 
      icon: "⭐", 
      color: "from-yellow-500 to-orange-400",
      images: [
        "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=800",
        "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800",
        "https://images.unsplash.com/photo-1598849066084-41c53f33a2da?w=800",
        "https://images.unsplash.com/photo-1516041774788-96a9c0a5f844?w=800",
        "https://images.unsplash.com/photo-1591662663234-61239e92e20e?w=800"
      ]
    },
    { 
      id: 4, 
      title: "Cuidado Equino", 
      icon: "💚", 
      color: "from-green-400 to-emerald-500",
      images: [
        "https://images.unsplash.com/photo-1534126511673-b6899657816a?w=800",
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800",
        "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800",
        "https://images.unsplash.com/photo-1569180105320-e4c3f83e8296?w=800",
        "https://images.unsplash.com/photo-1570739885726-0b4cf72d6de9?w=800"
      ]
    },
    { 
      id: 5, 
      title: "Competencia Regional", 
      icon: "🏆", 
      color: "from-amber-600 to-orange-600",
      images: [
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800",
        "https://images.unsplash.com/photo-1598849066084-41c53f33a2da?w=800",
        "https://images.unsplash.com/photo-1567556265004-d7a3ae6a8a7c?w=800",
        "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=800",
        "https://images.unsplash.com/photo-1516041774788-96a9c0a5f844?w=800"
      ]
    },
    { 
      id: 6, 
      title: "Paseos Campestres", 
      icon: "🌲", 
      color: "from-lime-500 to-green-500",
      images: [
        "https://images.unsplash.com/photo-1591662663234-61239e92e20e?w=800",
        "https://images.unsplash.com/photo-1569180105320-e4c3f83e8296?w=800",
        "https://images.unsplash.com/photo-1534126511673-b6899657816a?w=800",
        "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800",
        "https://images.unsplash.com/photo-1570739885726-0b4cf72d6de9?w=800"
      ]
    },
    { 
      id: 7, 
      title: "Clases Grupales", 
      icon: "👥", 
      color: "from-blue-400 to-cyan-500",
      images: [
        "https://images.unsplash.com/photo-1516041774788-96a9c0a5f844?w=800",
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800",
        "https://images.unsplash.com/photo-1598849066084-41c53f33a2da?w=800",
        "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800",
        "https://images.unsplash.com/photo-1591662663234-61239e92e20e?w=800"
      ]
    },
    { 
      id: 8, 
      title: "Atardecer en el Rancho", 
      icon: "🌇", 
      color: "from-rose-400 to-orange-500",
      images: [
        "https://images.unsplash.com/photo-1569180105320-e4c3f83e8296?w=800",
        "https://images.unsplash.com/photo-1567556265004-d7a3ae6a8a7c?w=800",
        "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=800",
        "https://images.unsplash.com/photo-1534126511673-b6899657816a?w=800",
        "https://images.unsplash.com/photo-1570739885726-0b4cf72d6de9?w=800"
      ]
    },
    { 
      id: 9, 
      title: "Exhibición Anual", 
      icon: "🎪", 
      color: "from-purple-400 to-pink-500",
      images: [
        "https://images.unsplash.com/photo-1567556265004-d7a3ae6a8a7c?w=800",
        "https://images.unsplash.com/photo-1598849066084-41c53f33a2da?w=800",
        "https://images.unsplash.com/photo-1516041774788-96a9c0a5f844?w=800",
        "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800",
        "https://images.unsplash.com/photo-1591662663234-61239e92e20e?w=800"
      ]
    }
  ]

  const openGallery = (item) => {
    setSelectedGallery(item)
    setCurrentImageIndex(0)
  }

  const closeGallery = () => {
    setSelectedGallery(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedGallery) {
      setCurrentImageIndex((prev) => 
        prev === selectedGallery.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedGallery) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedGallery.images.length - 1 : prev - 1
      )
    }
  }

  const goToImage = (index) => {
    setCurrentImageIndex(index)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateY: -90
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-20 relative overflow-hidden">
      
      {/* Elementos decorativos de fondo */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 text-amber-200 opacity-20"
      >
        <GiHorseHead className="text-8xl" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, -10, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-10 text-orange-200 opacity-20"
      >
        <GiHorseshoe className="text-9xl" />
      </motion.div>

      <div className="container px-4 relative z-10">
        
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2
            }}
            className="inline-block mb-6"
          >
            <FaHorse className="text-7xl text-amber-700" />
          </motion.div>
          
          <h2 className="text-5xl font-bold text-amber-900 mb-4">
            Nuestra Galería
          </h2>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto mb-4">
            Momentos inolvidables de nuestra academia ecuestre
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto"></div>
        </motion.div>

        {/* Grid de galería */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateZ: 2,
                boxShadow: "0 25px 50px rgba(146, 64, 14, 0.3)",
                transition: { duration: 0.3 }
              }}
              onClick={() => openGallery(item)}
              className="relative group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${item.color} rounded-2xl shadow-xl overflow-hidden h-72 flex items-center justify-center relative`}>
                
                {/* Icono de fondo */}
                <motion.div
                  className="text-9xl absolute opacity-20"
                  animate={{
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 2,
                    delay: index * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {item.icon}
                </motion.div>

                {/* Título siempre visible */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-4">
                  <h3 className="text-white text-xl font-bold text-center">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm text-center mt-1">
                    {item.images.length} imágenes
                  </p>
                </div>

                {/* Overlay hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-3"
                >
                  <div className="text-6xl">📷</div>
                  <p className="text-white font-bold text-lg">Ver Galería</p>
                </motion.div>

                {/* Caballo decorativo */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute top-2 right-2 text-white/30"
                >
                  <FaHorse className="text-2xl" />
                </motion.div>
              </div>

              {/* Borde decorativo */}
              <motion.div 
                className="h-2 bg-gradient-to-r from-amber-600 to-orange-600 rounded-b-xl"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Modal con Carrusel */}
        <AnimatePresence>
          {selectedGallery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeGallery}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-white rounded-2xl overflow-hidden max-w-5xl w-full shadow-2xl"
              >
                {/* Botón cerrar */}
                <button
                  onClick={closeGallery}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-amber-900 rounded-full p-3 z-20 font-bold text-xl shadow-lg transition-all hover:scale-110"
                >
                  ✕
                </button>

                {/* Título del carrusel */}
                <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2">
                  <h3 className="text-white text-xl font-bold flex items-center gap-2">
                    <span className="text-2xl">{selectedGallery.icon}</span>
                    {selectedGallery.title}
                  </h3>
                </div>

                {/* Carrusel de imágenes */}
                <div className="relative">
                  {/* Imagen principal con animación */}
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={selectedGallery.images[currentImageIndex]}
                      alt={`${selectedGallery.title} - ${currentImageIndex + 1}`}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-[60vh] object-cover"
                    />
                  </AnimatePresence>

                  {/* Botón anterior */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-amber-900 rounded-full p-4 shadow-lg transition-all hover:scale-110"
                  >
                    <FaChevronLeft className="text-2xl" />
                  </button>

                  {/* Botón siguiente */}
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-amber-900 rounded-full p-4 shadow-lg transition-all hover:scale-110"
                  >
                    <FaChevronRight className="text-2xl" />
                  </button>

                  {/* Contador de imágenes */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2">
                    <p className="text-white font-bold">
                      {currentImageIndex + 1} / {selectedGallery.images.length}
                    </p>
                  </div>
                </div>

                {/* Miniaturas */}
                <div className="bg-gray-100 p-4">
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {selectedGallery.images.map((image, index) => (
                      <motion.button
                        key={index}
                        onClick={() => goToImage(index)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-shrink-0 rounded-lg overflow-hidden border-4 transition-all ${
                          index === currentImageIndex
                            ? 'border-amber-600 shadow-lg'
                            : 'border-gray-300 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Miniatura ${index + 1}`}
                          className="w-20 h-20 object-cover"
                        />
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sección de estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-amber-200">
            <h3 className="text-3xl font-bold text-amber-900 mb-6 text-center flex items-center justify-center gap-3">
              <GiHorseHead className="text-amber-700" />
              Momentos Especiales
              <GiHorseHead className="text-amber-700" />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { emoji: "📸", count: "500+", label: "Fotografías" },
                { emoji: "🎥", count: "100+", label: "Videos" },
                { emoji: "🏆", count: "50+", label: "Eventos" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + (i * 0.2) }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5
                  }}
                  className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border-2 border-amber-200"
                >
                  <div className="text-5xl mb-3">{stat.emoji}</div>
                  <div className="text-3xl font-bold text-amber-800 mb-1">
                    {stat.count}
                  </div>
                  <div className="text-amber-600 font-semibold">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-gray-600 text-lg">
              Capturamos cada momento especial de nuestra comunidad ecuestre. 
              Desde entrenamientos diarios hasta competencias nacionales.
            </p>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-amber-800 mb-6">
            ¿Quieres ser parte de nuestra próxima sesión fotográfica?
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
            Únete a Nosotros 📷
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Galeria
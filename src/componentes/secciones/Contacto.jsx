import { motion } from "motion/react"
import { useState } from "react"
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa"
import { GiHorseHead } from "react-icons/gi"

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Formulario enviado:", formData)
    // Aquí iría la lógica de envío
    alert("¡Gracias por contactarnos! Te responderemos pronto 🐴")
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <FaPhone className="text-3xl" />,
      title: "Teléfono",
      info: "+52 461 123 4567",
      subinfo: "Lun - Sáb: 8:00 AM - 8:00 PM"
    },
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: "Email",
      info: "info@academiaecuestre.com",
      subinfo: "Respuesta en 24 horas"
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: "Ubicación",
      info: "Rancho Los Caballos",
      subinfo: "Celaya, Guanajuato, México"
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "Horario",
      info: "Lunes - Domingo",
      subinfo: "7:00 AM - 9:00 PM"
    }
  ]

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
            Contáctanos
          </h2>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto mb-4">
            Estamos aquí para responder todas tus preguntas
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Formulario de contacto */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border-2 border-amber-200">
                <h3 className="text-3xl font-bold text-amber-900 mb-6">
                  Envíanos un Mensaje
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Nombre */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-amber-900 font-semibold mb-2">
                      Nombre Completo *
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      placeholder="Juan Pérez"
                      className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all"
                    />
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-amber-900 font-semibold mb-2">
                      Correo Electrónico *
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all"
                    />
                  </motion.div>

                  {/* Teléfono */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-amber-900 font-semibold mb-2">
                      Teléfono
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+52 461 123 4567"
                      className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all"
                    />
                  </motion.div>

                  {/* Mensaje */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-amber-900 font-semibold mb-2">
                      Mensaje *
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.02 }}
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                      className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all resize-none"
                    />
                  </motion.div>

                  {/* Botón Submit */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 15px 30px rgba(146, 64, 14, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    Enviar Mensaje 📧
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Información de contacto */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Tarjetas de información */}
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  whileHover={{ 
                    scale: 1.03,
                    x: 10,
                    boxShadow: "0 20px 40px rgba(146, 64, 14, 0.2)"
                  }}
                  className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-2 border-amber-200 hover:border-amber-400 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="text-amber-600 mt-1"
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <h4 className="text-xl font-bold text-amber-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-700 font-semibold mb-1">
                        {item.info}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {item.subinfo}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Mapa decorativo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-lg p-8 text-white text-center"
              >
                <h4 className="text-2xl font-bold mb-4">Visítanos</h4>
                <div className="text-6xl mb-4">🗺️</div>
                <p className="mb-4">
                  Nuestro rancho está ubicado en las afueras de Celaya, 
                  rodeado de naturaleza y con instalaciones de primer nivel.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-amber-700 px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  Ver en Google Maps 🌍
                </motion.button>
              </motion.div>

              {/* Redes sociales */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-2 border-amber-200"
              >
                <h4 className="text-xl font-bold text-amber-900 mb-4 text-center">
                  Síguenos en Redes Sociales
                </h4>
                <div className="flex justify-center gap-4">
                  {["📘", "📷", "🐦", "📹"].map((emoji, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="text-4xl hover:opacity-80 transition-opacity"
                    >
                      {emoji}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto
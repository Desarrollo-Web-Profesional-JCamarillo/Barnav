import { motion } from "motion/react"
import { useState } from "react"
import { GiHorseHead } from "react-icons/gi"
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login attempt:", formData)
    // Aquí iría la lógica de autenticación
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden py-20 px-4">
      
      {/* Elementos decorativos */}
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
        className="absolute top-10 right-10 text-amber-200 opacity-20"
      >
        <GiHorseHead className="text-9xl" />
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
        className="absolute bottom-10 left-10 text-orange-200 opacity-20"
      >
        <GiHorseHead className="text-8xl" />
      </motion.div>

      {/* Contenedor del formulario */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full border-2 border-amber-200 relative z-10"
      >
        {/* Logo animado */}
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
          className="flex justify-center mb-6"
        >
          <GiHorseHead className="text-7xl text-amber-700" />
        </motion.div>

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-amber-900 text-center mb-2"
        >
          Bienvenido de Vuelta
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-amber-700 mb-8"
        >
          Inicia sesión para continuar
        </motion.p>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Campo Email */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-amber-900 font-semibold mb-2">
              Correo Electrónico
            </label>
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-600" />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
                className="w-full pl-12 pr-4 py-3 border-2 border-amber-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all"
              />
            </div>
          </motion.div>

          {/* Campo Contraseña */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <label className="block text-amber-900 font-semibold mb-2">
              Contraseña
            </label>
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-600" />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="w-full pl-12 pr-12 py-3 border-2 border-amber-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all"
              />
              <motion.button
                type="button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </motion.button>
            </div>
          </motion.div>

          {/* Recordarme y Olvidé contraseña */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-between"
          >
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                className="w-4 h-4 accent-amber-600"
              />
              <span className="text-sm text-gray-600">Recordarme</span>
            </label>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#"
              className="text-sm text-amber-700 hover:text-amber-900 font-semibold"
            >
              ¿Olvidaste tu contraseña?
            </motion.a>
          </motion.div>

          {/* Botón Submit */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 15px 30px rgba(146, 64, 14, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Iniciar Sesión
          </motion.button>
        </form>

        {/* Divisor */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="relative my-6"
        >
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-amber-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-amber-700">O continúa con</span>
          </div>
        </motion.div>

        {/* Botones sociales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-2 gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 py-3 border-2 border-amber-200 rounded-xl hover:bg-amber-50 transition-all"
          >
            <span className="text-2xl">🔵</span>
            <span className="font-semibold text-gray-700">Google</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 py-3 border-2 border-amber-200 rounded-xl hover:bg-amber-50 transition-all"
          >
            <span className="text-2xl">📘</span>
            <span className="font-semibold text-gray-700">Facebook</span>
          </motion.button>
        </motion.div>

        {/* Registro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-6 text-gray-600"
        >
          ¿No tienes cuenta?{" "}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#"
            className="text-amber-700 hover:text-amber-900 font-bold"
          >
            Regístrate aquí
          </motion.a>
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Login
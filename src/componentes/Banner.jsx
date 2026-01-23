import React from 'react'
import { motion } from "motion/react"

const Banner = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-gradient-to-r from-primary to-secondary py-12 px-6 mt-8 rounded-xl mx-4 shadow-lg overflow-hidden relative"
    >
      {/* Partículas flotantes de fondo */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        className="absolute bottom-10 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* Título principal con efecto stagger */}
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
           ¡Aprende Desarrollo Web con JJCO Cursos!
        </motion.h2>
        
        {/* Descripción con fade in desde abajo */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/90 text-lg mb-8 max-w-2xl mx-auto"
        >
          Domina React, Tailwind CSS y más con nuestros cursos prácticos. 
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="block mt-2 text-yellow-200 font-semibold"
          >
            50% de descuento hoy
          </motion.span>
        </motion.p>
        
        {/* Botones con entrada desde los lados */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary font-bold px-8 py-3 rounded-lg hover:shadow-xl transition-all"
          >
            Ver Cursos
          </motion.button>
          
          <motion.button 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-all"
          >
            Prueba Gratis
          </motion.button>
        </div>
        
        {/* Código descuento con efecto de revelación */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-8"
        >
          <p className="text-white/80 mb-2">Usa este código:</p>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-lg cursor-pointer"
          >
            <motion.span 
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.1em" }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-2xl font-bold text-white font-mono"
            >
              JJCO50
            </motion.span>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="text-white/70 text-sm mt-4"
          >
            Oferta por tiempo limitado
          </motion.p>
        </motion.div>
        <br />

        {/* Badge de descuento con animación de pulso y brillo */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 1.5,
            type: "spring",
            stiffness: 200
          }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">DESCUENTO EXCLUSIVO</h3>
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(255,215,0,0.3)",
                "0 0 40px rgba(255,215,0,0.6)",
                "0 0 20px rgba(255,215,0,0.3)"
              ]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-flex items-center justify-center w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 relative"
          >
            <motion.span 
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-4xl font-bold text-white"
            >
              50%
            </motion.span>
            
            {/* Efecto de brillo rotatorio */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 rounded-full"
              style={{
                background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)"
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Banner
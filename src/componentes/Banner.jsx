import React from 'react'
/* eslint-disable no-unused-vars */
import { motion } from "motion/react"
/* eslint-enable no-unused-vars */

const Banner = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-primary to-secondary py-12 px-6 mt-8 rounded-xl mx-4 shadow-lg"
    >
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Título principal */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
           ¡Aprende Desarrollo Web con JJCO Cursos!
        </h2>
        
        {/* Descripción */}
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Domina React, Tailwind CSS y más con nuestros cursos prácticos. 
          <span className="block mt-2 text-yellow-200 font-semibold">
            50% de descuento hoy
          </span>
        </p>
        
        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary font-bold px-8 py-3 rounded-lg hover:shadow-xl transition-all"
          >
            Ver Cursos
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-all"
          >
            Prueba Gratis
          </motion.button>
        </div>
        
        {/* Código descuento */}
        <div className="mt-8">
          <p className="text-white/80 mb-2">Usa este código:</p>
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-lg">
            <span className="text-2xl font-bold text-white font-mono">JJCO50</span>
          </div>
          <p className="text-white/70 text-sm mt-4">
            Oferta por tiempo limitado
          </p>
        </div>
        <br />

<h3 className="text-2xl font-bold text-white mb-4">DESCUENTO EXCLUSIVO</h3>
                 <motion.div
                    animate={{ 
                      rotateY: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotateY: { duration: 3, repeat: Infinity },
                      scale: { duration: 2, repeat: Infinity }
                    }}
                    className="inline-flex items-center justify-center w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500"
                  >
                    <span className="text-4xl font-bold text-white">50%</span>
                  </motion.div>
      </div>
    </motion.div>
  )
}

export default Banner
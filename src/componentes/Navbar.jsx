import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navbarLinks } from '../data/data'
import { CiSearch } from "react-icons/ci"
import { PiShoppingCartLight } from "react-icons/pi"
import { GiHorseHead } from "react-icons/gi"
import { HiMenuAlt3, HiX } from "react-icons/hi"
import { motion } from "motion/react"
import MenuResponsivo from './MenuResponsivo'

const Navbar = () => {
  const [abierto, setAbierto] = useState(false)

  const toggleMenu = () => {
    setAbierto(!abierto)
  }

  return (
    <>
      <nav className="bg-gradient-to-r from-amber-50 to-orange-50 shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="container flex justify-between font-bold items-center py-6">
          
          {/* Sección Logo con Animación */}
          <Link to="/">
            <motion.div 
              className="text-2xl flex items-center gap-2 uppercase cursor-pointer"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                <GiHorseHead className="text-amber-700 text-4xl" />
              </motion.div>
              <p className="text-amber-900">Academia</p>
              <p className="text-amber-600">Ecuestre</p>
            </motion.div>
          </Link>

          {/* Sección Menú (Desktop) */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-7 text-amber-800">
              {navbarLinks.map((item, index) => (
                <motion.li 
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1, 
                    color: "#92400e",
                    y: -2
                  }}
                  className="inline-block"
                >
                  <Link 
                    to={item.url} 
                    className="inline-block py-1 px-3 hover:text-amber-900 transition-colors"
                  >
                    {item.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Sección Iconos CON ANIMACIONES */}
          <div className="flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl hover:bg-amber-700 text-amber-800 hover:text-white rounded-full p-2 duration-300 hidden sm:block"
            >
              <CiSearch />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl hover:bg-amber-700 text-amber-800 hover:text-white rounded-full p-2 duration-300 hidden sm:block"
            >
              <PiShoppingCartLight />
            </motion.button>
            
            <Link to="/login">
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 20px rgba(146, 64, 14, 0.3)",
                  backgroundColor: "#92400e"
                }}
                whileTap={{ scale: 0.95 }}
                className="hover:bg-amber-900 font-semibold rounded-md text-white bg-amber-700 px-6 py-2 duration-300 hidden md:block"
              >
                Ingresar
              </motion.button>
            </Link>
            
            {/* Botón menú móvil CON ANIMACIÓN */}
            <div className="md:hidden">
              <motion.button
                onClick={toggleMenu}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                className="text-amber-800 p-2 rounded-lg hover:bg-amber-100 transition-colors"
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={{ rotate: abierto ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {abierto ? (
                    <HiX className="text-4xl" />
                  ) : (
                    <HiMenuAlt3 className="text-4xl" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Espaciador para que el contenido no quede detrás del navbar fijo */}
      <div className="h-20"></div>

      {/* Menú Responsivo */}
      <MenuResponsivo open={abierto} navbarLinks={navbarLinks} setAbierto={setAbierto} />
    </>
  )
}

export default Navbar
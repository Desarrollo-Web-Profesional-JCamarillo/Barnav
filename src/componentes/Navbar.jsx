/*import React, { useState } from 'react'
import { navbarLinks } from '../data/data'
import { CiSearch } from "react-icons/ci"
import { ImBooks } from "react-icons/im"
import { MdMenu } from "react-icons/md"
import { PiShoppingCartLight } from "react-icons/pi"
import { motion } from "motion/react"
import MenuResponsivo from './MenuResponsivo'

const Navbar = () => {
  const [abierto, setAbierto] = useState(false)

  return (
    <>
      <nav>
        <div className="container flex justify-between font-bold items-center py-8">
          
          {}
          <div className="text-2xl flex items-center gap-2 uppercase">
            <ImBooks />
            <p>El sitio de JJCO</p>
            <p className="text-secondary">Cursos</p>
          </div>

          {}
          <div className="hidden md:block">
            <ul className="flex items-center gap-7 text-gray-600">
              {navbarLinks.map((item) => (
                <motion.li 
                  key={item.id}
                  whileHover={{ scale: 1.1, color: "#ff8901" }}
                  transition={{ duration: 0.2 }}
                  className="inline-block"
                >
                  <a 
                    href={item.url} 
                    className="inline-block py-1 px-3 hover:text-primary"
                  >
                    {item.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {}
          <div className="flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300"
            >
              <CiSearch />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300"
            >
              <PiShoppingCartLight />
            </motion.button>
            
            <motion.button 
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                backgroundColor: "#ff8901"
              }}
              whileTap={{ scale: 0.95 }}
              className="hover:bg-primary font-semibold rounded-md text-white bg-secondary px-6 py-2 duration-300 border-primary hidden md:block"
            >
              Ingresar
            </motion.button>
            
            {}
            <div className="md:hidden">
              <motion.div
                whileTap={{ rotate: 90 }}
                whileHover={{ scale: 1.1 }}
              >
                <MdMenu 
                  onClick={() => setAbierto(!abierto)} 
                  className="text-4xl cursor-pointer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </nav>

      {}
      <MenuResponsivo open={abierto} navbarLinks={navbarLinks} />
    </>
  )
}

export default Navbar*/

import React, { useState } from 'react'
import { navbarLinks } from '../data/data'
import { CiSearch } from "react-icons/ci"
import { MdMenu } from "react-icons/md"
import { PiShoppingCartLight } from "react-icons/pi"
import { GiHorseHead } from "react-icons/gi"
import { motion } from "motion/react"
import MenuResponsivo from './MenuResponsivo'

const Navbar = () => {
  const [abierto, setAbierto] = useState(false)

  return (
    <>
      <nav className="bg-gradient-to-r from-amber-50 to-orange-50 shadow-lg">
        <div className="container flex justify-between font-bold items-center py-6">
          
          {/* Sección Logo con Animación */}
          <motion.div 
            className="text-2xl flex items-center gap-2 uppercase"
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
                  <a 
                    href={item.url} 
                    className="inline-block py-1 px-3 hover:text-amber-900 transition-colors"
                  >
                    {item.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Sección Iconos CON ANIMACIONES */}
          <div className="flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl hover:bg-amber-700 text-amber-800 hover:text-white rounded-full p-2 duration-300"
            >
              <CiSearch />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl hover:bg-amber-700 text-amber-800 hover:text-white rounded-full p-2 duration-300"
            >
              <PiShoppingCartLight />
            </motion.button>
            
            <motion.a
              href="/login"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 20px rgba(146, 64, 14, 0.3)",
                backgroundColor: "#92400e"
              }}
              whileTap={{ scale: 0.95 }}
              className="hover:bg-amber-900 font-semibold rounded-md text-white bg-amber-700 px-6 py-2 duration-300 hidden md:block"
            >
              Ingresar
            </motion.a>
            
            {/* Botón menú móvil CON ANIMACIÓN */}
            <div className="md:hidden">
              <motion.div
                whileTap={{ rotate: 90 }}
                whileHover={{ scale: 1.1 }}
              >
                <MdMenu 
                  onClick={() => setAbierto(!abierto)} 
                  className="text-4xl cursor-pointer text-amber-800"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </nav>

      {/* Menú Responsivo */}
      <MenuResponsivo open={abierto} navbarLinks={navbarLinks} />
    </>
  )
}

export default Navbar
import React, { useState } from 'react'
import { navbarLinks } from '../data/data'
import { CiSearch } from "react-icons/ci"
import { ImBooks } from "react-icons/im"
import { MdMenu } from "react-icons/md"
import { PiShoppingCartLight } from "react-icons/pi"
/* eslint-disable no-unused-vars */
import { motion } from "motion/react"
/* eslint-enable no-unused-vars */
import MenuResponsivo from './MenuResponsivo'

const Navbar = () => {
  const [abierto, setAbierto] = useState(false)

  return (
    <>
      <nav>
        <div className="container flex justify-between font-bold items-center py-8">
          
          {/* Sección Logo */}
          <div className="text-2xl flex items-center gap-2 uppercase">
            <ImBooks />
            <p>El sitio de JJCO</p>
            <p className="text-secondary">Cursos</p>
          </div>

          {/* Sección Menú (Desktop) */}
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

          {/* Sección Iconos CON ANIMACIONES */}
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
            
            {/* Botón menú móvil CON ANIMACIÓN */}
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

      {/* Menú Responsivo */}
      <MenuResponsivo open={abierto} navbarLinks={navbarLinks} />
    </>
  )
}

export default Navbar
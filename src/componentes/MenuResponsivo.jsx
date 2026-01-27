import { AnimatePresence, motion as Motion } from "motion/react"
import { Link } from "react-router-dom"

const MenuResponsivo = ({ open, navbarLinks, setAbierto }) => {
  const menuVariants = {
    hidden: { 
      opacity: 0, 
      x: "100%"
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      x: "100%",
      transition: { duration: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  }

  const handleLinkClick = () => {
    setAbierto(false)
  }

  return (
    <AnimatePresence mode="wait">
      {open && (
        <>
          {/* Overlay oscuro */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setAbierto(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          />

          {/* Menú lateral */}
          <Motion.div 
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-amber-700 to-amber-900 shadow-2xl z-50 md:hidden overflow-y-auto"
          >
            <div className="p-6">
              {/* Header del menú */}
              <Motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between mb-8 pb-4 border-b border-amber-500"
              >
                <h2 className="text-2xl font-bold text-white">Menú</h2>
                <button
                  onClick={() => setAbierto(false)}
                  className="text-white hover:text-amber-200 transition-colors"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </Motion.div>

              {/* Links del menú */}
              <ul className="flex flex-col gap-2">
                {navbarLinks.map((item, index) => (
                  <Motion.li 
                    key={item.id} 
                    custom={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      to={item.url}
                      onClick={handleLinkClick}
                      className="block w-full text-left py-4 px-6 text-white hover:bg-white/10 rounded-lg transition-all text-lg font-semibold hover:translate-x-2"
                    >
                      <Motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.title}
                      </Motion.div>
                    </Link>
                  </Motion.li>
                ))}

                {/* Botón de Login */}
                <Motion.li 
                  custom={navbarLinks.length}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-4"
                >
                  <Link
                    to="/login"
                    onClick={handleLinkClick}
                    className="block w-full text-center py-4 px-6 bg-amber-500 hover:bg-amber-400 text-white rounded-lg transition-all text-lg font-bold shadow-lg"
                  >
                    <Motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      🔐 Ingresar
                    </Motion.div>
                  </Link>
                </Motion.li>
              </ul>

              {/* Footer del menú */}
              <Motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 pt-6 border-t border-amber-500"
              >
                <p className="text-amber-200 text-center text-sm">
                  Academia Ecuestre 🐴
                </p>
                <p className="text-amber-300 text-center text-xs mt-2">
                  Tu pasión por los caballos
                </p>
              </Motion.div>
            </div>
          </Motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MenuResponsivo
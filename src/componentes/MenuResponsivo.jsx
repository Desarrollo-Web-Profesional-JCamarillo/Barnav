import { AnimatePresence, motion as Motion } from "motion/react"

const MenuResponsivo = ({ open, navbarLinks }) => {
  const menuVariants = {
    hidden: { 
      opacity: 0, 
      y: -50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: { 
      opacity: 0, 
      y: -50,
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  }

  return (
    <AnimatePresence mode="wait">
      {open && (
        <Motion.div 
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold uppercase bg-gradient-to-r from-primary to-secondary text-white rounded-b-md py-10 m-6 shadow-xl">
            <ul className="flex flex-col justify-center items-center gap-8">
              {navbarLinks.map((item, index) => (
                <Motion.li 
                  key={item.id} 
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ 
                    scale: 1.1, 
                    color: "#ffd700",
                    transition: { duration: 0.2 }
                  }}
                  className="hover:text-yellow-300 cursor-pointer py-2 px-6 rounded-lg hover:bg-white/10 transition-all"
                >
                  {item.title}
                </Motion.li>
              ))}
            </ul>
          </div>
        </Motion.div>
      )}
    </AnimatePresence>
  )
}

export default MenuResponsivo
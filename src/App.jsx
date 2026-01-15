import Navbar from './componentes/Navbar'
import Banner from './componentes/Banner'

const App = () => {
  return (
    <div className='overflow-x-hidden min-h-screen bg-gradient-to-b from-gray-50 to-gray-100'>
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Banner />
        
        {/* Sección de contenido adicional (opcional) */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            ¿Por qué elegir JJCO Cursos?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Aprendizaje Práctico",
                description: "Proyectos reales desde el día 1",
                color: "text-primary"
              },
              {
                title: "Certificación",
                description: "Diploma reconocido internacionalmente",
                color: "text-secondary"
              },
              {
                title: "Comunidad Activa",
                description: "Más de 10,000 estudiantes activos",
                color: "text-green-600"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <h3 className={`text-2xl font-bold ${item.color} mb-4`}>
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./componentes/secciones/Home.jsx"
import Cursos from "./componentes/secciones/Cursos.jsx"
import About from "./componentes/secciones/About.jsx"
import Login from "./componentes/secciones/Login.jsx"
import Galeria from "./componentes/secciones/Galeria.jsx"
import Contacto from "./componentes/secciones/Contacto.jsx"
import Navbar from './componentes/Navbar'

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
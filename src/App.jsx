import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./componentes/secciones/Home.jsx"
import Cursos from "./componentes/secciones/Cursos.jsx"
import About from "./componentes/secciones/About.jsx"
import Navbar from './componentes/Navbar'
import Banner from './componentes/Banner'

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;
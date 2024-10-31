import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Navbar } from './components/navbar';
import {PaginaInicio} from '../src/pages/pageinicio';
import  Proyectos  from './components/proyectos';
import Contacto from './components/contacto'

function App() {
  return (
    <div className="App">
      <Router basename="/portfolio">
        <Navbar />
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path='/Proyectos' element={Proyectos}/>
          <Route path='/Contacto' element={Contacto}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

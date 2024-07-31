import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Navbar } from './components/navbar';
import { Inicio } from './pages/inicio';
import { Proyectos } from './components/proyectos';
import {Contacto} from './components/contacto'


function App() {
  return (
    <div className="App">
      <Router>
      <Contacto/>
      <Proyectos/>
      <Inicio/>
        <Navbar/>
        <Routes>
          <Route  path='/' element={Inicio}/>
          <Route path='/Proyectos' element={Proyectos}/>
          <Route path='/Contacto' element={Contacto}/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Navbar } from './components/navbar';
import {PaginaInicio} from '../src/pages/pageinicio';


function App() {
  return (
    <div className="App">
      <Router>
      <PaginaInicio/>
        <Navbar/>
      </Router>
    </div>
  );
}

export default App;

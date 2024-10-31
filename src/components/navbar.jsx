import React from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Books } from "phosphor-react";
import {List} from "phosphor-react";
import {X} from "phosphor-react";
import { Phone } from "phosphor-react";
import "./navbar.css";


export  const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const[barraVisible, setBarraVisible] = useState(false);
    const[boton, setBoton] = useState(true);

    const abrirBarra = () => {
        setBarraVisible(true);
    };
    
    const cerrarBarra = () => {
        setBarraVisible(false);
    };

    const ocultarboton = () =>{
        setBoton(false);
    };

    const mostrarboton = () => {
        setBoton(true);
    };

  const handleScroll = (id) => {
    if (location.pathname !== '/') {
      navigate.push(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
    return <div className={`navbar ${barraVisible ? "visible" : ""}`}>
      <button className={`btnabrir ${boton ? "visible" : ""}`} onClick={() => {abrirBarra(); ocultarboton()}}><List size={32} color="#f1efef" /></button>
        <div className={`linkss ${barraVisible ? "visible" : ""}`}>
          <button className={`btncerrar ${barraVisible ? "visible" : ""}`} onClick={() => {cerrarBarra(); mostrarboton()}}><X size={32} color="#f1efef" /></button>
            <Link to="/#ini" onClick={() => {handleScroll('ini'); cerrarBarra(); mostrarboton()}} className={`nosub ${barraVisible ? "visible" : "" }`}>Inicio</Link>
            <Link to="/#proyec"  onClick={() => {handleScroll('proyec'); cerrarBarra(); mostrarboton()}} className={`nosub ${barraVisible ? "visible" : "" }`}>
                Proyectos <Books size={25} />
            </Link>
            <Link to="/#contact" onClick={() => {handleScroll('contact'); cerrarBarra(); mostrarboton()}} className={`nosub ${barraVisible ? "visible" : "" }`}>
                Contacto <Phone size={25} />
            </Link>
        </div>
    </div>
};
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Books } from "phosphor-react";
import { Phone } from "phosphor-react";
import "./navbar.css";


export  const Navbar = () => {
    const location = useLocation();

  const handleScroll = (id) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
    return <div className="navbar">
        <div className="linkss">
            <Link to="/#ini" onClick={() => handleScroll('ini')} className="nosub">Inicio</Link>
            <Link to="/#proyec"  onClick={() => handleScroll('proyec')} className="nosub">
                Proyectos <Books size={25} />
            </Link>
            <Link to="/#contact" onClick={() => handleScroll('contact')} className="nosub">
                Contacto <Phone size={25} />
            </Link>
        </div>
    </div>
};
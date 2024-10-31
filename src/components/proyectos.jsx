import React from "react";
import "./proyectos.css";
import logphp from "../img/php.png";
import logsql from "../img/mysql.png";
import logjs from "../img/js.webp";
import node from "../img/nodeexpress.png";
import react from "../img/react.webp";
import {GithubLogo} from "phosphor-react";

export default function Proyectos() {
    return <div id="proyec" className="proy">
        <div className="proyectoslista">
        <header className="proyect">Proyectos</header>
            <main className="main">

                <article className="hol" id="hol3">
                    <header>Service Online</header>
                    <p>App web ideada para la gestión de pequeños servicios técnicos.
                        Permite registrar empresas, guardar info de clientes,<br />
                        gestionar información y tiene un panel para que los clientes<br />
                        puedan ver el estado de su reparación.
                    </p>
                    <footer className="foot">
                        <li className="tec"><img src={node} alt="Node y Express"/></li>
                        <li className="tec"><img src={react} alt="React.js" /></li>
                        <li className="tec"><img src={logsql} alt="mysql" /></li>
                    </footer>
                    <a className="logo2" href="https://github.com/matisosagit/appservices" target="_blank" rel="noopener" ><GithubLogo size={40} alt="github" /><br></br>Repositorio</a>
                </article>

                <article className="hol" id="hol1">
                    <header>GoleadoresUY</header>
                    <p>Es un juego el cual compara datos de goleadores del futbol uruguayo.
                        Permite registrar usuarios y guarda los puntajes en una base de datos, <br />
                        mostrando un ranking de puntuaciones al terminar el juego.
                    </p>
                    <footer className="foot">
                        <li className="tec"><img src={logphp} alt="php"/></li>
                        <li className="tec"><img src={logsql} alt="mysql" /></li>
                        <li className="tec"><img src={logjs} alt="JavaScript" /></li>
                    </footer>
                    <a className="logo2" href="https://www.goleadoresuy.com/" target="_blank" rel="noopener" ><GithubLogo size={40} alt="github" /><br></br>Repositorio</a>
                </article>



            </main>
        </div>
    </div>

}
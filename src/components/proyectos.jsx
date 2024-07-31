import React from "react";
import "./proyectos.css";
import logphp from "../img/php.png";
import logsql from "../img/mysql.png";
import logjs from "../img/js.webp";
import holfondo from "../img/holfondo.png";
import apifondo from "../img/api.jpg"

export const Proyectos = () =>{
    return <div id="proyec" className="proy">
        <div className="proyectoslista">
        <header className="proyect">Proyectos</header>
            <main className="main">
                <a href="https://www.goleadoresuy.com/" target="_blank">
                <article className="hol" id="hol1">
                    <header>GoleadoresUY</header>
                    <p>Es un juego el cual compara datos de goleadores del futbol uruguayo.
                        Permite registrar usuarios y guarda los puntajes en una base de datos, <br />
                        mostrando un ranking de puntuaciones al terminar el juego.
                    </p>
                    <footer className="foot">
                        <li className="tec"><img src={logphp} /></li>
                        <li className="tec"><img src={logsql} alt="" /></li>
                        <li className="tec"><img src={logjs} alt="" /></li>
                    </footer>
                </article>
                </a>
                <a className="li" href="https://github.com/matisosagit/api" target="_blank">
                <article className="hol" id="hol2">
                    <header>API Clientes</header>
                    <p>Es una API para manejar datos de clientes.<br />
                        Permite crear, borrar y editar usuarios .
                    </p>
                    <footer className="foot">
                        <li className="tec"><img src={logphp} /></li>
                        <li className="tec"><img src={logsql} alt="" /></li>
                    </footer>
                </article>
                </a>
            </main>
        </div>
    </div>

}
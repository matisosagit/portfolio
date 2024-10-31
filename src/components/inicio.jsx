import React from "react";
import "./inicio.css"
import { Code } from "phosphor-react";
import yoo from "../img/yoo.png";
import {GithubLogo} from "phosphor-react";
import {LinkedinLogo} from "phosphor-react";
import {FileArrowDown} from "phosphor-react";
import {WhatsappLogo} from "phosphor-react";
import node from "../img/nodeexpress.png";
import react from "../img/react.webp";
import logsql from "../img/mysql.png";
import logphp from "../img/php.png";

export default function Inicio () {
    return <div id="ini" className="sobremi">
        
        <main className="col">
        <article className="infooimg">
            <img className="infooimg" src={yoo} alt="Matias Sosa" />     
        </article>
            <article className="infoo">
                <h1>Matias Sosa <br />
                    Programador Full Stack</h1>
                    <Code size={40} />
                    <div className="links">
                        <a className="logo" href="https://github.com/matisosagit" target="_blank" rel="noopener" ><GithubLogo size={40} alt="github"/></a>
                        <a className="logo" href="https://www.linkedin.com/in/matias-sosa-330488293/" target="_blank" rel="noopener"><LinkedinLogo size={40} alt="linkedin"/></a>
                        <a className="logo" href="https://drive.google.com/file/d/1wpxGgS365yfm3l4o3LpscqHY3Z-O6IBx/view?usp=sharing" target="_blank" rel="noopener"><FileArrowDown size={40} alt="cv"/></a>
                        <a className="logo" href="https://wa.me/+59896474382" target="_blank"><WhatsappLogo size={40} /></a>
                </div>
            </article>
                
        </main>
        <div className="links2">
                <h2>Tecnologías</h2>
                <div className="links3">
                    <figcaption>
                        <img src={react} className="logo2" alt="react"/>
                        <br />
                        React
                    </figcaption>
                    <figcaption>
                        <img src={node} className="logo2" alt="node"/>
                        <br />
                        Node/Express
                    </figcaption>
                    <figcaption>
                        <img src={logsql} className="logo2" alt="mysql"/>
                        <br />
                        MySQL
                    </figcaption>
                    <figcaption>
                        <img src={logphp} className="logo2" alt="php"/>
                        <br />
                        PHP
                    </figcaption>
                </div>
        </div>
    </div>

}
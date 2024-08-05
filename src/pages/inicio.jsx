import React from "react";
import "./inicio.css"
import { Code } from "phosphor-react";
import yoo from "../img/yoo.png";
import {GithubLogo} from "phosphor-react";
import {LinkedinLogo} from "phosphor-react";
import {FileArrowDown} from "phosphor-react";
import {WhatsappLogo} from "phosphor-react";

export const Inicio = () =>{
    return <div id="ini" className="sobremi">
        <article className="infooimg">
            <img className="infooimg" src={yoo} alt="Matias Sosa" />     
        </article>
        <main className="col">
            <article className="infoo">
                <h1>Matias Sosa <br />
                    Junior Developer</h1>
                    <Code size={40} />
            </article>
                <div className="links">
                    <a className="logo" href="https://github.com/matisosagit" target="_blank"  ><GithubLogo size={40} /></a>
                    <a className="logo" href="https://www.linkedin.com/in/matias-sosa-330488293/" target="_blank"><LinkedinLogo size={40} /></a>
                    <a className="logo" href="https://drive.google.com/file/d/1k84lsXPFKwJVwyNXT8Sv7tKF4T6YuCYl/view" target="_blank"><FileArrowDown size={40} /></a>
                    <a className="logo" href="https://wa.me/+59896474382" target="_blank"><WhatsappLogo size={40} /></a>
                </div>
        </main>
    </div>

}
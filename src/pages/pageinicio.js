import './pageinicio.css';
import Inicio from '../components/inicio';
import Proyectos from '../components/proyectos';
import Contacto from '../components/contacto';


export const PaginaInicio = () => {
    return(
        <div className='pageinicioo'>
            <Inicio/>
            <Proyectos/>
            <Contacto/>
        </div>
    )
} 
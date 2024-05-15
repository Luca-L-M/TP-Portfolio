import "./style.css";
import Enlace from "../../components/Enlace";

const Navbar = () =>{

    return(
        <nav>
            <Enlace class="izquierda" url="AcercaDeMi" element="Julián Lifschitz"/>
            <ul>
                <li><Enlace url="Conocimiento" element="Conocimiento"/></li>
                <li><Enlace url="Experiencia" element="Experiencia"/></li>
                <li><Enlace url="Educacion" element="Educacion"/></li>
                <li><Enlace url="Contactos" element="Contactos"/></li>
            </ul>
        </nav>
    );
};

export default Navbar;
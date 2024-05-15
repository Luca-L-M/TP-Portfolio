import "./style.css";
import Enlace from "../../components/Enlace";

const Navbar = () =>{
    <ul>
        <li className="izquierda"><Enlace url={"AcercaDeMi"} element={"Julián Lifschitz"}/></li>
        <li><Enlace url={"Conocimiento"} element={"Conocimiento"}/></li>
        <li><Enlace url={"Experiencia"} element={"Experiencia"}/></li>
        <li><Enlace url={"Educacion"} element={"Educacion"}/></li>
        <li><Enlace url={"Contactos"} element={"Contactos"}/></li>
    </ul>
};

export default Navbar;
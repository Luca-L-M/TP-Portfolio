import "./style.css";
import Enlace from "../../components/Enlace";

const Navbar = () =>{

    // const estilo1 = {
    //     display: 'block', padding: '.5rem 5rem', color: '#000000', textDecoration: 'none'
    //     //hover: '#dd1212'
    // }

    return(
        <nav>
            <div className="container">
                <Enlace url="#about" element="Julián Lifschitz" />
       
                    <ul>
                        <li><Enlace url="#Conocer" element="Conocimiento" /></li>
                        <li><Enlace url="#Experiencia" element="Experiencia" /></li>
                        <li><Enlace url="#Educacion" element="Educacion" /></li>
                        <li><Enlace url="#Contactos" element="Contactos" /></li>
                    </ul>
                </div>
    
        </nav>
    );
};

export default Navbar;
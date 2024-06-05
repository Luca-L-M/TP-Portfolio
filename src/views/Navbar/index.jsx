import "./style.css";
import Enlace from "../../components/Enlace";

const Navbar = () =>{

    const estilo1 = {
        display: 'block', padding: '.5rem 5rem', color: '#000000', textDecoration: 'none'
        //hover: '#dd1212'
    }

    return(
        <nav>
            <div className="container">
                <Enlace url="#about" element="Julián Lifschitz" estilo={estilo1}/>
                <div className="ul">
                    <ul>
                        <li><Enlace url="#Conocer" element="Conocimiento" estilo={estilo1}/></li>
                        <li><Enlace url="#Experiencia" element="Experiencia" estilo={estilo1}/></li>
                        <li><Enlace url="#Educacion" element="Educacion" estilo={estilo1}/></li>
                        <li><Enlace url="#Contactos" element="Contactos" estilo={estilo1}/></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
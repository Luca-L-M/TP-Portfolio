import './style.css';
import Item from '../../components/Item';
import desarrollo_web from "../../img/desarrollo_web.jpg";
import img2 from "../../img/desarrollo_movil.jpg";
import img3 from "../../img/BD.jpg";

const Conocimientos = () =>{

    const estilo1 = {
        flex:'0 0 auto', width:'25%', height:'30%', textAlign:'center !important'
    }

    return(
        <div id='Conocer'>
            <h1>CONOCIMIENTOS</h1>
            <div id='Conocimientos'>
                <Item url={desarrollo_web} contenido={"Desarrollo web"} estilo={estilo1}/>
                <Item url={img2} contenido={"Desarrollo movil"} estilo={estilo1}/>
                <Item url={img3} contenido={"Administracion BD"} estilo={estilo1}/>
            </div>
        </div>
    );
};

export default Conocimientos;
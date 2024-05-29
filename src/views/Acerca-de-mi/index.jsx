import "./style.css";
import Parrafo from '../../components/Parrafo';
import luca from '../../img/lucagod.jpeg';
import binker from '../../img/binker.jpg';

const AcercaDeMi = () =>{

    const estilo1 = {
        marginTop:'10rem'
    }
    return(
        <div style={estilo1}>
            <img className="binker" src={binker} alt=""></img>
            <div  id="about">
                <img src={luca} alt=""></img>
                <div>
                    <h2>Mi nombre es Julio Lifschitx.</h2>
                    <Parrafo contenido={"Tengo 18 años"}/>
                    <Parrafo contenido={"Soy recien graduado del Instituto Ort y estoy dispuesto a aprender"}/>
                    <Parrafo contenido={"Estoy buscando algun trabajo que me permita crecer tanto personalmente como laboralmente"}/>
                </div>
            </div>
        </div>
    )
};

export default AcercaDeMi;
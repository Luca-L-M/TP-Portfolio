import "./style.css";
import Parrafo from '../../components/Parrafo';
import luca from '../../img/lucagod.jpeg';

const AcercaDeMi = () =>{
    return(
        <div id="about">
            <img src={luca} alt=""></img>
            <div>
                <h2>Mi nombre es Julian Lifschitx.</h2>
                <Parrafo contenido={"Tengo 18 años"}/>
                <Parrafo contenido={"Soy recien graduado del Instituto Ort y estoy dispuesto a aprender"}/>
                <Parrafo contenido={"Estoy buscando algun trabajo que me permita crecer tanto personalmente como laboralmente"}/>
            </div>
        </div>
    )
};

export default AcercaDeMi;
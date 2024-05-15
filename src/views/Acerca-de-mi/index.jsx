import "./style.css";
import Parrafo from '../../components/Parrafo';

const AcercaDeMi = () =>{
    <div>
        <img src={"./img/Yo.jpg"} alt=""></img>
        <div>
            <h2>Mi nombre es Julian Lifschits.</h2>
            <br></br>
            <Parrafo contenido={"Tengo 18 años"}/>
            <Parrafo contenido={"Soy recien graduado del Instituto Ort y estoy dispuesto a aprender"}/>
            <br></br>
            <Parrafo contenido={"Estoy buscando algun trabajo que me permita crecer tanto personalmente como laboralmente"}/>
        </div>
    </div>
};

export default AcercaDeMi;
import './style.css';
import Card from "../../components/Card";
import logo_ort from "../../img/logo_ort.jpg";

const Educacion = () =>{
    return(
        <div id="Educacion">
            <Card titulo={"Escuela tecnica especializada en tecnologia"} subtitulo={"Institucion Ort"} img={logo_ort}
            contenido={"Graduado de la escuela tecnica Ort con un promedio de 9 "}/>
        </div>
    );
};

export default Educacion;
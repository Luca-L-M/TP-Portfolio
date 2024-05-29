import Card from "../../components/Card";
import logo_ort from "../../img/logo_ort.jpg";

const Experiencia = () =>{
    return(
        <div id="Experiencia">
            <Card titulo={"Desarrollador Full Stack"} subtitulo={"Instituto Ort"} img={logo_ort}
            contenido={"Me he desempeñado como desarrollador full stack codiando desde el frontend hasta la base de datos en proyectos variados"}/>
        </div>
    );
};

export default Experiencia;
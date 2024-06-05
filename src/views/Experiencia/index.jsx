import './style.css';
import Card from "../../components/Card";
import logo_ort from "../../img/logo_ort.jpg";
import proyecto from "../../img/proyecto.jpg";

const Experiencia = () =>{

    const stilo ={
        width:'10rem', height:'12rem'
    }
    return(
        <div id="Experiencia">
            <Card titulo={"Desarrollador Full Stack"} subtitulo={"Instituto Ort"} img={logo_ort} style={stilo}
            contenido={"Me he desempeñado como desarrollador full stack codiando desde el frontend hasta la base de datos en proyectos variados"}/>
            <Card titulo={"Proyecto final"} subtitulo={"Instituto Ort"} img={proyecto} style={stilo}
            contenido={"He llevado a cabo un proyecto de emprendimiento propio rentable y funcional"}/>
        </div>
    );
};

export default Experiencia;
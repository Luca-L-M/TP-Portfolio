import './style.css';
import Item from '../../components/Item';

const Conocimientos = () =>{
    return(
        <div>
        <Item url={"logo"} contenido={"Desarrollo web"}/>
        <Item url={"logo"} contenido={"Desarrollo movil"}/>
        <Item url={"logo"} contenido={"Administracion BD"}/>
        </div>
    );
};

export default Conocimientos;
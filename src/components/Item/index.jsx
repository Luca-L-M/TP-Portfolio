import './style.css';

const Item = (props) => {
    return(
        <div style={props.estilo}>
            <img src={props.url} alt=""></img>
            <h3>{props.contenido}</h3>
        </div>
    );
};

export default Item;
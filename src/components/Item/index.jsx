import './style.css';

const Item = (props) => {
    return(
        <div style={props.estilo}>
            <h3>{props.contenido}</h3>
            <img src={props.url} alt=""></img>
        </div>
    );
};

export default Item;
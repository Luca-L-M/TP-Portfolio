import './style.css'

const Card = (props) => {
    return(
        <div className="card">
        <div className="card-header">
            <div>
                <h5 className="card-title">{props.titulo}</h5>
                <p className="card-subtitle">{props.subtitulo}</p>
            </div>
            <img className="card-img-top" src={props.img} alt=""></img>
        </div>
        <div className="card-body">
            <p className="card-text">{props.contenido}</p>
        </div>
        </div>
    );
};

export default Card;
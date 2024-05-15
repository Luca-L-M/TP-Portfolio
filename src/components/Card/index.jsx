import './style.css'

const Card = (promps) => {
    return(
        <div class="card">
        <div class="card-header">
            <div>
                <h5 class="card-title">{promps.titulo}</h5>
                <p class="card-subtitle">{promps.subtitulo}</p>
            </div>
            <img class="card-img-top" src={promps.img} alt=""></img>
        </div>
        <div class="card-body">
            <p class="card-text">{promps.contenido}</p>
        </div>
        </div>
    );
};

export default Card;
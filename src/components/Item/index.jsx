import './style.css';

const Item = (promps) => {
    <div>
        <img src={promps.url} alt=""></img>
        <h2>{promps.contenido}</h2>
    </div>
};

export default Item;
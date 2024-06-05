const Enlace = (props) => {
    
  
    return  <a href={props.url} style={{display: 'block', padding: '.5rem 5rem', color: '#000000', textDecoration: 'none'}}>{props.element}</a>
};

export default Enlace;
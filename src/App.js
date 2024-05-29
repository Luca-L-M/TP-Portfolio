import './App.css';
import Navbar from './views/Navbar';
import AcercaDeMi from './views/Acerca-de-mi';
import Conocimientos from './views/Conocimientos';
import Experiencia from './views/Experiencia';
import Educacion from './views/Educacion';
import Contactos from './views/Contactos';

function App() {
  return(
    <>
      <Navbar/>
      <AcercaDeMi/>
      <h1>CONOCIMIENTOS</h1>
      <br></br>
      <Conocimientos/>
      <h1>EXPERENCIA</h1>
      <br></br>
      <Experiencia/>
      <h1>EDUCACION</h1>
      <br></br>
      <Educacion/>
      <h1>CONTACTOS</h1>
      <br></br>
      <Contactos/>
    </>
  );
};

export default App;

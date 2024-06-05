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
      <Conocimientos/>
      <h1>EXPERENCIA</h1>
      <Experiencia/>
      <h1>EDUCACION</h1>
      <Educacion/>
      <h1>CONTACTOS</h1>
      <Contactos/>
    </>
  );
};

export default App;

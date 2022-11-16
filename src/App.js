import './css/App.css';
import Navbar from './components/Navbar';
import Nosotros from './components/Nosotros';
import Home from './components/Home';
import Footer from './components/footer';
import {Route, Routes} from "react-router-dom";
import EjemplosIndex from './components/ejemplos';
import ComponenteFuncion from './components/ejemplos/ComponenteFuncion';
import ComponenteClase from './components/ejemplos/ComponenteClase';
import CategoriasIndex from './components/categorias';
import ProductosIndex from './components/productos';
import UsuariosIndex from './components/usuarios';


function App() {
  return (

    <div>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/nosotros" element={<Nosotros/>}/>
          <Route path="/ejemplos" element={<EjemplosIndex/>}/>
          <Route path="/ejemplos/funcion" element={<ComponenteFuncion msn={"Mensaje por PROPS de Componente Funcion"}/>}/>
          <Route path="/ejemplos/clase" element={<ComponenteClase msn={"Mensaje por PROPS de Componente Clase"}/>}/>
          <Route path="/categorias" element={<CategoriasIndex/>}/>
          <Route path="/productos" element={<ProductosIndex/>}/>
          <Route path="/usuario" element={<UsuariosIndex/>}/>
        </Routes>        
        <Footer/>
      </div>
    </div>
  );
}

export default App;

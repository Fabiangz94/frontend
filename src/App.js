import './css/App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home';
import {Route, Routes} from "react-router-dom";
import LoginView from './components/usuarios/login';
import CreateUsuario from './components/usuarios/CreateUsuario';
import ActualizarUsuario from './components/usuarios/ActualizarUsuario';
import EliminarUsuario from './components/usuarios/EliminarUsuario';
import ContactoIndex from './components/contacto';
import TestimonialIndex from './components/testimonial';
import NosotrosIndex from './components/nosotros';
import RegionesIndex from './components/regiones';
import UserIndex from './components/usuarios';

function App() {
  return (
    <div>
      <div className="App">
        <Navbar logged={false}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/nosotros" element={<NosotrosIndex/>}/>
          <Route path='/testimonios' element={<TestimonialIndex/>}/>
          <Route path='/contacto' element={<ContactoIndex/>}/>
          <Route path='/regiones' element={<RegionesIndex/>}/>
          <Route path='/login' element={<LoginView/>}/>
          <Route path='/user' element={<UserIndex/>}/>
          <Route path='/usuario/create' element={<CreateUsuario/>}/>
          <Route path="/usuario/update">
              <Route path=":idUsuario" element={<ActualizarUsuario/>}/>
          </Route>
          <Route path="/usuario/delete">
              <Route path=":idUsuario" element={<EliminarUsuario/>}/>
          </Route>
        </Routes>        
      </div>
    </div>
  );
}

export default App;

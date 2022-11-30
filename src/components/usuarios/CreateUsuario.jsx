import Navbar from "../navbar/Navbar";
import '../../css/App.css';
import { Link } from "react-router-dom";
import { getRequest } from "../../js/getData";
import backendConfig from "../../config";
import {useNavigate} from "react-router-dom";

function CreateUsuario (props){
  let navigate = useNavigate();
    return ( 
      <div>
        <Navbar/>
        <div>
          <div className="col-12 w-50 mx-auto">
            <h3> Crear Usuario</h3>
            <form>
              <div class="row ">

                <div class="">
                  <label for="firstName" class="form-label">Nombre</label>
                  <input type="text" class="form-control" id="firstName" placeholder=" Nombre de la persona" defaultValue="" required={true} minLength={4}/>
                </div>

                <div class="col-12">
                  <label for="Username" class="form-label">Nombre de Usuario</label>
                  <div class="input-group has-validation">
                    <span class="input-group-text">@</span>
                    <input type="text" class="form-control" id="Username" placeholder="Username" defaultValue="" required={true} minLength={4}/>
                  </div>
                </div>

                <div class="col-12">
                  <label for="email" class="form-label">Correo</label>
                  <input type="email" class="form-control" id="email" placeholder="you@example.com"/>
                </div>

                <div class="col-12">
                  <label for="password" class="form-label">Contraseña</label>
                  <input type="password" class="form-control" id="password"  defaultValue="" required={true}/>
                </div>
              <hr class="my-4"/>

              <button class="w-100 btn btn-outline-success btn-lg" type="button" 
              onClick={() =>{
                onClickSubmit(navigate)
                }}
              >Crear</button>
              <Link to={"/user"}><a className="mt-5 mb-3"> Regresar a Usuarios</a></Link>
              </div>
            </form>
          </div>
          </div>

    </div>);
}

function onClickSubmit(navigate) {
  //capturamos los datos del formulario
  let id = Math.random();
  let firstName = document.getElementById("firstName").value;
  let username = document.getElementById("Username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  //contruimos la peticion
  //construimos el body
  let bodyData = {
      id,
      firstName,
      username,
      email,
      password,
  };
  let url = backendConfig.FULL_API_PATH + "usuarios/create";
  let promesaCreate = getRequest(url, {}, "post", bodyData);
  //enviamos la peticion
  promesaCreate
      .then(function (res) {
          if (res.status < 300) {
              //redireccionar
              console.log("Usuario creado");
              navigate("/user");
          }
          console.log(res);
      })
      .catch(function (err) {
          console.log(err);
      });
  //segun el resultado, mostramos errores O cargamos la pagina de usuarios
}

export default CreateUsuario;
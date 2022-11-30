import { useParams } from "react-router-dom";
import { getRequest, getUsuario } from "../../js/getData";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import backendConfig from "../../config";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";


function ActualizarUsuario (props){
  let navigate = useNavigate();
  let {idUsuario} = useParams();
  let url = backendConfig.FULL_API_PATH + "usuarios/get/" + idUsuario;
  let data = {};
  const [usuario, setUsuario] = useState(data);
  const [state, setState] = useState("loading");
  const [error, setError] = useState("");
  useEffect(()=>{
    let promesaCreate = getRequest(url,{},"get", {});
    //enviamos la peticion
    promesaCreate
      .then(function (res) {
        if (res.status < 300) {
          console.log("Se obtuvieron los datos");
          setState("loaded");
          setUsuario(res.data);
        }
        console.log(res); 
      }
      ).catch(function (err) {
        setState("error");
        setError (err);
        console.log(err);
      });
  },[]);

    if (state === "error"){
      return(
        <div className="mx-4">
          <h3>{error.toString()}</h3>
        </div>
      );
    }

    if (state === "loading") {
      return (
      <div className="mx-4">
        <h3>Cargando datos...</h3>
      </div>);}

    return ( 
      <div>
        <Navbar/>
        <div className="col-12 w-50 mx-auto">
            <h3>  Actualizar Usuario</h3>

            <form>
              <div class="row g-3">

                <div class="">
                  <label for="identifier" class="form-label">Id</label>
                  <input type="text" class="form-control" id="identifier" defaultValue={idUsuario} required={true} readOnly={true}/>
                </div>

                <div class="">
                  <label for="firstName" class="form-label">Nombre</label>
                  <input type="text" class="form-control" id="firstName" placeholder=" Nombre de la persona" defaultValue={usuario.firstName} required={true} minLength={4}/>
                </div>

                <div class="col-12">
                  <label for="username" class="form-label">Nombre de Usuario</label>
                  <div class="input-group has-validation">
                    <span class="input-group-text">@</span>
                    <input type="text" class="form-control" id="Username" placeholder="Username" defaultValue={usuario.username} required={true} minLength={4}/>
                  </div>
                </div>

                <div class="col-12">
                  <label for="email" class="form-label">Correo</label>
                  <input type="email" class="form-control" id="email" placeholder="you@example.com" defaultValue={usuario.email} required={true} />
                </div>

                <div class="col-12">
                  <label for="password" class="form-label">Contraseña</label>
                  <input type="text" class="form-control" id="password"  defaultValue={usuario.password} required={true}/>
                </div>

              <hr class="my-4"/>

              <button class="w-100 btn btn-outline-warning btn-lg" type="button"
              onClick={() =>{
                onClickSubmit(navigate)
              }}
              >Actualizar</button>

              <Link to={"/user"}><a className="mt-5 mb-3"> Regresar a Usuarios</a></Link>

              </div>
            </form>
          </div>
      </div>);
}

function onClickSubmit(navigate) {
  //capturamos los datos del formulario
  let id = document.getElementById("identifier").value;
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
  let url = backendConfig.FULL_API_PATH + "usuarios/put/"+ id;
  console.log(url);
  let promesaCreate = getRequest(url, {}, "put", bodyData);
  //enviamos la peticion
  promesaCreate
      .then(function (res) {
          if (res.status < 300) {
              //redireccionar
              console.log("Usuario modificado");
              navigate("/user");
          }
          console.log(res);
      })
      .catch(function (err) {
          console.log(err);
      });
  //segun el resultado, mostramos errores O cargamos la pagina de usuarios
}

export default ActualizarUsuario;
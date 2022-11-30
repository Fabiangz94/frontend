import Navbar from "../navbar/Navbar";
import logo from "../../img/logoprofile.png";
import { Link } from "react-router-dom";

function LoginView(props) {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="w-50 mx-auto">
                <form>
                    <img className="mb-4" src={logo} alt="" width="200px" height="200px"/>
                    <h1 className="h3 mb-3 fw-normal">Por favor ingrese sus datos.</h1>

                    <div className="form-floating my-3">
                        <input type="text" class="form-control" id="floatingInput" placeholder="userId"/>
                        <label for="floatingInput">Usuario</label>
                    </div>
                    <div className="form-floating my-3">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                        <label for="floatingPassword">Password</label>
                    </div>
                    <Link to={"/user"}><button className="w-100 btn btn-lg btn-outline-primary" type="button">Ingresar</button></Link>
                    <br/>
                    <br/>
                    <a className="mt-5 mb-3"> Crear una cuenta nueva.</a>
                </form>

            </div>
        </div>
    </div>
  )
}

export default LoginView;
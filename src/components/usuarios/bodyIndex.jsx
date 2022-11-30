import { getRequest } from "../../js/getData";
import Navbar from "../navbar/Navbar";
import MainPage from "../table/MainPage";

function BodyIndex(props) {
    return (
    <div>
        <Navbar/>
        <div>
          <h3>Usuarios</h3>
          <p>Bienvenidos a la pagina de administración de usuarios</p>
            <div className="tabla">
              <MainPage
                data={props.datosTabla} 
                path={"/usuario"}
                name={"Tabla de Usuarios"} 
                columns={["_id","firstName","email","username","password"]} 
                columnsAlias={["ID","Nombre","Correo","Usuario","Contrasena"]}
                tools={["update","delete"]} 
              />
            </div>
        </div>
    </div>
    );
}

export default BodyIndex;
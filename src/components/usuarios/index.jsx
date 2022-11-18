import Table from "../table/table";
import getData from "../../js/getData";

function UsuariosIndex (props){
    let datosTabla= getData("url",{},"get",{});
    return(
        <div>
            <h3>Usuarios</h3>
            <p>Bienvenidos a la pagina de administración de usuarios</p>
            <Table 
                data={datosTabla} 
                path={"/usuario"}
                name={"Tabla de Usuarios"} 
                columns={["id","firstName","email","username","password"]} 
                columnsAlias={["ID","Nombre","Correo","Usuario","Contrasena"]}
                tools={["update","delete"]} 
            />
        </div>
    );
}

export default UsuariosIndex;
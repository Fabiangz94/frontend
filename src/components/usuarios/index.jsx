import {loadData} from "../../js/getData";
import { getRequest } from "../../js/getData";
import '../../css/App.css';
import { useEffect, useState } from "react";
import BodyIndex from "./bodyIndex";
import backendConfig from "../../config";

function UserIndex(props) {
  //let datosTabla = getData("url",{},"get",{});
  let data = loadData();
  const [datosTabla, setDatosTabla] = useState(data);
  const [state, setState] = useState("loading");
  const [error, setError] = useState("");
  useEffect(()=>{
    let promiseData = getRequest(
      backendConfig.FULL_API_PATH + "usuarios/all",
      {},
      "get",
      {}
    );
    promiseData
      .then(function(response){
        console.log(response);
        setState("loaded");
        setDatosTabla(response.data);
      })
      .catch(function (err) {
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
   
  if (state === "loading"){
    return(
      <div className="mx-4">
        <h3>Cargando datos...</h3>
      </div>
    );
  }
  return <BodyIndex datosTabla = {datosTabla}></BodyIndex>;
}

export default UserIndex;

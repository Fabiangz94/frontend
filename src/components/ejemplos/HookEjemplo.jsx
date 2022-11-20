import React, {useState} from "react";

function HookEjemplo(props){

    const [count, setCount] = useState(0); //funcion usuState devuelve 2 componentes [variable estado , funcion para cambiar variable]  (0) -> Valor inicial de la varable
    return (
        <div className="d-flex text-center mx-auto">
            <div>
                <p> Has clikeado {count} veces</p>
                <button className="btn btn-success" onClick={() => setCount(count + 1)}>
                    Clikeame
                </button>
            </div>
        </div>
    );

}

export default HookEjemplo;
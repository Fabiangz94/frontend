import ActualizarTool from "./ActualizarTool";
import EliminarTool from "./EliminarTool";

function Tools (props){

    if (props.tools && props.tools.length > 0){
        let toolsElement = [];
        if(props.tools.indexOf("update")>=0){
            toolsElement.push(ActualizarTool({
                    path: props.path,
                    id: props.id,
                })
            );
        }
        if(props.tools.indexOf("delete")>=0){
            toolsElement.push(EliminarTool({
                    path: props.path,
                    id: props.id,
                })
            );
        }
        return <td>{toolsElement}</td>;   
    }   
    return null;
}
export default Tools;
import Header from "./Header";
import Bodi from "./Bodi";

function Table(props){
    return (
        <div className="mx-5">
            <table class="table">
                <caption>{props.name}</caption>
                <Header columns={props.columnsAlias} tools={props.tools}/>
                <Bodi path={props.path} data={props.data} columns={props.columns} tools={props.tools} />
            </table>
        </div>
    )
}

export default Table;
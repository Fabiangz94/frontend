import Row from "./Row";

function Bodi (props){
    return(
        <tbody class="table-group-divider">
            {
                props.data.map(function(value,index){
                    return ( <Row rowData={value} columns={props.columns} tools={props.tools} path={props.path}/>);
                })
            }
        </tbody>
    );
}

export default Bodi;
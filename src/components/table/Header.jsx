function Header (props){
    let toolHeader = undefined;
    if(props.tools && props.tools.length > 0){
        toolHeader = <th scope="col">Tools</th>
    }
    return(
        <thead>
            <tr>

            {props.columns.map(function(value,index){ //map me permite recibir un callback que se ejecuta por cada uno de los elemnts del arreglo
                return <th scope="col">{value}</th>;
            })}
            {toolHeader}
            </tr>
        </thead>
    );
}

export default Header;
import { useState } from "react";

function SearchBar(props){
    const [searchText, setSearchText] = useState ("");
    let onChangeSearchTextField = function(e) {
        let searchText = e.target.value;
        setSearchText(searchText);
        let results = Search( props.data, props.columns, searchText);
        props.setDataforTable(results);
    };

    return <div className="d-flex text-center me-auto">
        <input type={"text"} className="form-control ms-5" value={searchText} onChange={onChangeSearchTextField}></input>
        <input type={"button"} value={"Buscar"} className="btn btn-success ms-3"></input>
    </div>
}

// algoritmo de Busqueda
function Search(data, columns, search){
    let results = [];
    let included = false;
    data.forEach( function (value, index) {
        included=false;
        columns.forEach(function (column, indexColum){
            if(
                value[column]
                    .toString()
                    .toLowerCase()
                    .indexOf(search.toString().toLowerCase()) >= 0 && 
                !included
            ) {
                results.push(value);
                included=true;
            }
        });
    });
    return results;
}

export default SearchBar;
import React from "react";

class ComponenteClase extends React.Component {
    render(){
        return(
            <div>
                <h2>Este es un componente de tipo Clase</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque laborum libero accusamus laudantium modi, temporibus unde molestias ducimus consequatur animi totam porro, dolorum sit tempore ex perferendis, praesentium distinctio. Maxime.</p>
                <br/>
                <p>El mensaje es: {this.props.msn}</p>
            </div>
        );
    }
}

export default ComponenteClase;
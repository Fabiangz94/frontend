function ComponenteFuncion (props){
    return(
        <div>
            <h3>Este es un componente de tipo Funcion</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptas iusto esse quod deleniti ea quibusdam! Dolore quam, unde asperiores sint adipisci ipsum consequuntur, accusantium labore, autem obcaecati perferendis architecto.</p>
            <br/>
            <p>El mensaje es: {props.msn}</p>
        </div>
    );
}

export default ComponenteFuncion;
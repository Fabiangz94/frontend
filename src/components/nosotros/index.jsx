import Navbar from "../navbar/Navbar";
import '../../css/App.css';
import ReactPlayer from "react-player";
import ImgProfile from "../../img/logoprofile.png";

function NosotrosIndex(props) {
  return (
    <div>
        <Navbar/>
            <div className="container">
                <div className="section-title">
                    <h2>¿QUIÉNES SOMOS?</h2>
                    <p>No somos una agencia de Turismo, queremos ser tu aliado y contar la historia de un país que busca demostrarle al mundo la hermosura de sus paisajes y de su gente. Nuestro objetivo es cerrar la brecha entre las percepciones negativas que tienen en el mundo acerca de Colombia y las realidades del país a través del potencial de sus recursos y del valor de su gente.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 aos-init aos-animate" data-aos="fade-right">
                        <img src={ImgProfile} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content aos-init aos-animate" data-aos="fade-left">
                        <h3>Una nación con innumerables atributos como Colombia tenía que contar con un aliado que potenciara su valor ante el mundo.</h3>
                        <p className="fst-italic">
                            Nos centramos en promover el orgullo nacional en cada colombiano, y de celebrar, con nuestros compatriotas y con el mundo entero, todos los hechos que enaltecen al país.
                        </p>
                        <div className="row">
                            <ReactPlayer
                                url='https://media.istockphoto.com/id/1392431838/es/v%C3%ADdeo/c%C3%B3ndor-volando.mp4?s=mp4-640x640-is&amp;k=20&amp;c=p9dXQOExhVBZMko7ZqR9ukJlrQrpHKM0pXIefGpF3mk='
                                className='react-player'
                                playing
                                loop='true'
                                width='100%'
                                height='100%'
                            />
                        </div>
                        <p>
                        Colombia pasa hoy por un buen momento y es hora de contárselo a todos. Durante la última década el país ha venido construyendo un mejor territorio para quienes lo habitan y para quienes quieren vivir la magia de Colombia, en esta pagina encontraras los mayores sitios turísticos de Colombia por Regiones, queremos destacar la belleza de cada Región, y darte las mejores recomendaciones para que tengas el mejor viaje.
                        </p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default NosotrosIndex;
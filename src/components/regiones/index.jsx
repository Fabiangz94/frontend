import Navbar from "../navbar/Navbar";
import '../../css/App.css';
import tatacoa from "../../img/tatacoa.png";
import chiribiquete from "../../img/chiribiquete.png";
import cocuy from "../../img/cocuy.png";
import cristales from "../../img/cristales.png"
import gorgona from "../../img/gorgona.png";
import guatape from "../../img/guatape.png";
import lagunaverde from "../../img/lagunaverde.png";
import malpelo from "../../img/malpelo.png";
import mavecure from "../../img/mavecure.png";
import sanandres from "../../img/Sanandres.png"
import solano from "../../img/solano.png";
import tota from "../../img/tota.png";


function RegionesIndex(props) {
  return (
    <div> 
        <Navbar/>
        <div>
            <section id="portfolio" class="portfolio section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>Sitios turísticos de Colombia</h2>
                        <p>El Caribe, el Pacífico, la Orinoquía, la Amazonía, la zona Andina e Insular son las seis regiones naturales de Colombia, cada una con sus propia belleza, características, costumbres, gastronomía y música. Cada una es un mundo distinto dentro de un mismo país.
                        <br/>
                        A continuación podrás conocer los mejores lugares turísticos de  Colombia.
                        </p>
                    </div>


                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                        <div className="col">
                            <div className="card shadow-sm">
                                <img src={tatacoa} className="bd-placeholder-img card-img-top"/>
                                <div className="card-body">
                                    <h5>DESIERTO DE LA TATACOA</h5>
                                    <ul>
                                        <li><strong>Nombre:</strong> Desierto De La Tatacoa.</li>
                                        <li><strong>Ubicación:</strong> Municipio de Villavieja.</li>
                                        <li><strong>Departamento:</strong> Huila.</li>
                                        <li><strong>Tipo:</strong> Reserva natural regional.</li>
                                        <li><strong>Superficie:</strong> 330 km²</li>
                                        <li><strong>Clima:</strong> Semiárido cálido.</li>
                                    </ul>
                                    <p className="card-text"> 
                                        La Tatacoa o el Valle de las Tristezas, no es justamente un desierto, sino un bosque seco tropical. El nombre “Tatacoa” se lo atribuyeron los españoles, refiriéndose a la serpiente cascabel. Como lo revelan los científicos, La Tatacoa, durante el Período terciario, fue un jardín con miles de flores y árboles que poco a poco se fue secando hasta convertirse en un desierto. El Desierto de la Tatacoa es la segunda zona árida más extensa de Colombia después de la Península de La Guajira. Esta zona es un rico yacimiento de fósiles.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow-sm">
                                <img src={lagunaverde} className="bd-placeholder-img card-img-top"/>
                                <div className="card-body">
                                    <h5>LAGUNA VERDE</h5>
                                    <ul>
                                        <li><strong>Nombre:</strong> Volcán Azufral Chaitan.</li>
                                        <li><strong>Ubicación:</strong> Se ubica en el Municipio de Tuquerres en el Departamento de Nariño.</li>
                                        <li><strong>Departamento:</strong> Nariño.</li>
                                        <li><strong>Tipo:</strong> Parque Regional Natural.</li>
                                        <li><strong>Superficie:</strong> 62.943 Hectáreas.</li>
                                        <li><strong>Clima:</strong> Frio Húmedo (Temperaturas entre 15 y 17.5°C).</li>
                                    </ul>
                                    <p className="card-text"> 
                                        La laguna Verde es un lago situado en el cono volcánico del volcán Azufral en el municipio de Túquerres, en el departamento colombiano de Nariño. Su color característico se debe a las concentraciones de azufre que contiene por la actividad volcánica.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow-sm">
                                <img src={solano} className="bd-placeholder-img card-img-top"/>
                                <div className="card-body">
                                    <h5>BAHIA SOLANO</h5>
                                    <ul>
                                        <li><strong>Nombre:</strong> Bahía Solano.</li>
                                        <li><strong>Ubicación:</strong> Es un municipio perteneciente al departamento de Chocó.</li>
                                        <li><strong>Tipo:</strong> Playa.</li>
                                        <li><strong>Superficie:</strong> 1.667 km²</li>
                                        <li><strong>Clima:</strong> Tropical Húmedo (Temperatura promedio 25 °C.)</li>
                                    </ul>
                                    <p className="card-text"> 
                                        Bahía Solano es una de las joyas turísticas que puedes encontrar en el pacífico colombiano, apreciada por turistas que buscan una experiencia ecológica y aventureros que quieren domar las impresionantes olas que suelen verse en el lugar.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow-sm">
                                <img src={chiribiquete} className="bd-placeholder-img card-img-top"/>
                                <div className="card-body">
                                    <h5>SERRANÍA DE CHIRIBIQUETE</h5>
                                    <ul>
                                        <li><strong>Nombre:</strong> Parque nacional natural serranía de chiribiquete.</li>
                                        <li><strong>Ubicación:</strong> Se encuentra situado en la parte occidental del Escudo Guyanés, al occidente de la Guayana venezolana.</li>
                                        <li><strong>Departamento:</strong> Caquetá y Guaviare.</li>
                                        <li><strong>Tipo:</strong> Parque Nacional Natural.</li>
                                        <li><strong>Superficie:</strong> 4'268.095 Hectáreas.</li>
                                        <li><strong>Clima:</strong> Cálido húmedo (24 °C)</li>
                                    </ul>
                                    <p className="card-text"> 
                                        Es una meseta rocosa en la región de la Amazonía colombiana originada a partir del escudo Guayanés. Es uno de los sistemas montañosos más importantes de la Amazonía, presentando una importante presencia de población prehistórica.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow-sm">
                                <img src={tota} className="bd-placeholder-img card-img-top"/>
                                <div className="card-body">
                                    <h5>LAGUNA DE TOTA</h5>
                                    <ul>
                                        <li><strong>Ubicación:</strong> Municipio de Cuitiva, vereda el Boquerón.</li>
                                        <li><strong>Departamento:</strong> Boyacá.</li>
                                        <li><strong>Tipo:</strong> Reserva natural regional.</li>
                                        <li><strong>Extensión:</strong> 3.5 Hectáreas</li>
                                        <li><strong>Clima:</strong> Frio.</li>
                                    </ul>
                                    <p className="card-text"> 
                                        El lago de Tota es el mayor lago de Colombia. Sus playas son de arena blanca y el agua es clara y transparente, es la única playa de clima frío que existe en Colombia. En estas aguas viven diferentes especies de truchas. La zona en la que se encuentra esta laguna se caracteriza por el ecosistema de bosque andino.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow-sm">
                                <img src={guatape} className="bd-placeholder-img card-img-top"/>
                                <div className="card-body">
                                    <h5>LA PIEDRA DEL PEÑOL - GUATAPÉ</h5>
                                    <ul>
                                        <li><strong>Ubicación:</strong> Entre los municipios de Guatapé y El Peñol</li>
                                        <li><strong>Departamento:</strong> Antioquia</li>
                                        <li><strong>Tipo:</strong> Inselberg (plutón granítico)</li>
                                        <li><strong>Clima:</strong> Templado.</li>

                                    </ul>
                                    <p className="card-text"> 
                                        Es un monolito de 220 metros de altura, sobre el cual se construyó un mirador con 702 escalones hasta la cima, donde además de observar el paisaje puede comprar artesanías, fotos instantáneas entre otros. Es un sitio que por su singularidad se ha convertido en uno de los destinos imperdibles de Antioquia.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow-sm">
                                <img src={cocuy} className="bd-placeholder-img card-img-top"/>
                                <div className="card-body">
                                    <h5>PARQUE NACIONAL NATURAL EL COCUY</h5>
                                    <ul>
                                        <li><strong>Ubicación:</strong> En el municipios de el Cocuy y Güicán.</li>
                                        <li><strong>Departamento:</strong> Boyacá, Casanare y Arauca.</li>
                                        <li><strong>Tipo:</strong> Parque Nacional Natural.</li>
                                        <li><strong>Superficie:</strong> 3.060 km².</li>
                                        <li><strong>Clima:</strong> Debido a la gran extensión del parque, el clima va de cálido, pasando por templado y frío, hasta clima de páramo. La temperatura oscila entre los -20 y 30 ºC.</li>
                                    </ul>
                                    <p className="card-text"> 
                                        Es la mayor masa glaciar de Colombia conformada por 25 picos cubiertos de hielo y nieve, tiene la ventaja de que buena parte de ella se puede recorrer a pie. Cuenta con una sucesión de picos nevados (de 4.800 a 5.300 msnm) que inicia con el Pan de Azúcar y continúa con los picos Diamante, Pulpito del Diablo, Tote. Portales, Cóncavoy Concavito, formando una majestuosa fila que llega hasta la Laguna Grande de la Sierra, una de las 150 que podrás disfrutar en este parque.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow-sm">
                                <img src={gorgona} className="bd-placeholder-img card-img-top"/>
                                <div className="card-body">
                                    <h5>ISLA GORGONA</h5>
                                    <ul>
                                        <li><strong>Nombre:</strong> Parque Nacional Natural Isla Gorgona.</li>
                                        <li><strong>Ubicación:</strong> A 28 km al oeste de la costa del Pacífico colombiano.</li>
                                        <li><strong>Departamento:</strong> Cauca.</li>
                                        <li><strong>Tipo:</strong> Isla volcánica.</li>
                                        <li><strong>Superficie:</strong> 26 km² de superficie terrestre y 61.687 Ha de área marina.</li>
                                        <li><strong>Clima:</strong> Cálido (Temperatura promedio de 26 °C).</li>
                                    </ul>
                                    <p className="card-text"> 
                                        El Parque está conformado por dos islas, Gorgona y Gorgonilla, que recibieron el nombre de Francisco Pizarro en 1527; como sus hombres fueron mordidos por muchas serpientes, las comparó con los monstruos femeninos de la mitología griega, una de ellas llamada Gorgona. También hay indicios de un asentamiento precolombino del siglo XIII A.C. que es fundamental para la comprensión de la etnohistoria de la región. Ha sido denominada ‘Isla Ciencia’ por la cantidad de información que ha dado a los investigadores para entender los ecosistemas y para el manejo efectivo del área protegida.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>



                        <div className="col">
                            <div className="card shadow-sm">
                                <img src={malpelo} className="bd-placeholder-img card-img-top"/>
                                <div className="card-body">
                                    <h5>ISLA DE MALPELO</h5>
                                    <ul>
                                        <li><strong>Ubicación:</strong> Está ubicada en el Océano Pacifico Oriental Tropical aproximadamente a 500 kilómetros al oeste del puerto de Buenaventura.</li>
                                        <li><strong>Departamento:</strong> Valle del Cauca.</li>
                                        <li><strong>Tipo:</strong> Isla volcánica.</li>
                                        <li><strong>Superficie:</strong> 1,2 km².</li>
                                        <li><strong>Clima:</strong> Cálido muy Húmedo (Temperatura promedio 25°C).</li>

                                    </ul>
                                    <p className="card-text"> 
                                    Malpelo es una Isla oceánica con costas acantiladas de formación volcánica, rodeada por diez pequeños islotes, que emerge desde las profundidades a 4.000 metros, es considerada un paraíso de biodiversidad que alberga una fauna terrestre muy particular y única en el mundo, así como las más importantes formaciones coralinas del Pacífico colombiano junto a una variada y exclusiva fauna marina, fue declarada en el año de 1995 Santuario de Flora y Fauna por el Gobierno Nacional.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow-sm">
                                <img src={cristales} className="bd-placeholder-img card-img-top"/>
                                <div className="card-body">
                                    <h5>CAÑO CRISTALES</h5>
                                    <ul>
                                        <li><strong>Ubicación:</strong> Sierra de la Macarena en el departamento del Meta, en el piedemonte andino en la selva amazónica.</li>
                                        <li><strong>Departamento:</strong> Meta.</li>
                                        <li><strong>Tipo:</strong> Rio.</li>
                                        <li><strong>Longitud:</strong> 100 km.</li>
                                        <li><strong>Profundidad:</strong> 	20 metros.</li>
                                        <li><strong>Clima:</strong> Cálido Húmedo.</li>
                                    </ul>
                                    <p className="card-text"> 
                                        Ha sido denominado “el río de los dioses”, “el río de los siete colores”, “el arco iris que se derritió2, e incluso, “el río más hermoso del mundo”,ya que en su fondo se reproducen plantas acuáticas que con la exposición al sol cambian de color en un proceso que va desde el verde hasta un rojo intenso. Esto produce el efecto visual de estar frente a un río de seis colores: rojo, amarillo y verde, por las plantas; negro, por el agua de selva que baja por allí; azul, por el reflejo del cielo; y blanco, por la espuma formada por las caídas de agua.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow-sm">
                                <img src={sanandres} className="bd-placeholder-img card-img-top"/>
                                <div className="card-body">
                                    <h5>ISLA DE SAN ANDRÉS</h5>
                                    <ul>
                                        <li><strong>Ubicación:</strong> Aproximadamente 637 km al noroeste de Colombia. Es la isla más grande del archipiélago.</li>
                                        <li><strong>Departamento:</strong>  San Andrés y Providencia.</li>
                                        <li><strong>Tipo:</strong> Isla – Volcánica, Coralina.</li>
                                        <li><strong>Superficie:</strong> 26 km².</li>
                                        <li><strong>Clima:</strong> Cálido (Temperatura entre 26 °C y 29 °C).</li>
                                    </ul>
                                    <p className="card-text"> 
                                        La isla de San Andres es unas de las mejores playas del Caribe, un mar azul pero que también es verde y de tonos lila, y gente llena de amabilidad, fue declarada en el año 2000 Reserva Mundial de la Biosfera “Seaflower”. Esta reserva no solo incluye las islas y sus cayos lejanos; además, conforma el 10% del mar Caribe, con una extensión mayor a los 300 mil kilómetros cuadrados. En este pequeño paraíso las influencias de ingleses, españoles, piratas y corsarios se mezclaron con el pueblo afro para dar como resultado una cultura de mucha riqueza.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow-sm">
                                <img src={mavecure} className="bd-placeholder-img card-img-top"/>
                                <div className="card-body">
                                    <h5>CERROS DE MAVECURE</h5>
                                    <ul>
                                        <li><strong>Ubicación:</strong> Hacen parte del Macizo o escudo Guayanés y se encuentran localizados a orillas del Río Inírida.</li>
                                        <li><strong>Departamento:</strong> Guainía.</li>
                                        <li><strong>Tipo:</strong> Reserva natural regional.</li>
                                        <li><strong>Clima:</strong> Humedo Tropical (Temperatura entre 25 - 35 ºC).</li>
                                    </ul>
                                    <p className="card-text"> 
                                        Los cerros de Mavecure, una formación de tres enormes montículos de piedra gris llamados tepuyes, palabra que en lengua indígena significa hogar o morada de los dioses, están ubicados en el departamento de Guainía, cerca de la ciudad de Inírida. Sus rocas, que se alzan sobre la Estrella Fluvial del Sur, donde confluyen los esplendorosos ríos Orinoco, Atabapo y Guaviare, están catalogadas entre las más antiguas del planeta.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default RegionesIndex;
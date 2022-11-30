import Navbar from "../navbar/Navbar";
import '../../css/App.css';
import testimonials1 from "../../img/testimonials/testimonials-1.png";
import testimonials2 from "../../img/testimonials/testimonials-2.png";
import testimonials3 from "../../img/testimonials/testimonials-3.png";
import testimonials4 from "../../img/testimonials/testimonials-4.png";


function TestimonialIndex() {
  return (
    <div>
        <Navbar/>
        <div className="testimonials section-bg">
            <div className="container">
                <div className="section-title">
                        <h2>Testimonios.</h2>
                        <p>Las mejores experiencias se viven en el país más acogedor del mundo</p>
                </div>

                <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide  col-4">
                            <div className="testimonial-item" data-aos="fade-up">
                                <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                Viajar por Colombia es compartir con una infinidad de culturas y descubrir paisajes inimaginables, solo Colombia es capaz de reunir a varias comunidades, culturas, contrastes y combinar paisajes opuestos como la nieve y el mar en un mismo lugar. Que país tan hermoso!
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                                <img src={testimonials1} className="testimonial-img" alt=""/>
                                <h3>Jorge</h3>
                                <h4>Pereira.</h4>
                            </div>
                        </div>

                        <div className="swiper-slide col-4">
                            <div className="testimonial-item" data-aos="fade-up">
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                    Me ha encantado mi viaje a Colombia! Fué emocionante!!!!!!!!!!!!! <br/> Y gracias a TurisCol pude disfrutar de los mejores lugares. Fue de gran ayuda.
                                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                                <img src={testimonials2} className="testimonial-img" alt=""/>
                                <h3>Carolina Rodriguez</h3>
                                <h4>Bogotá.</h4>
                            </div>
                        </div>

                        <div className="swiper-slide col-4">
                            <div className="testimonial-item" data-aos="fade-up">
                                <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                Si viajas a Colombia es obligatorio conocer la hermosa playa del Tayrona. La mejor. Playas cristalinas, bien organizada, muy recomendada.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                                <img src={testimonials3} className="testimonial-img" alt=""/>
                                <h3>Fabian Gonzalez</h3>
                                <h4>Boyacá</h4>
                            </div>
                        </div>

                        <div className="swiper-slide col-4">
                            <div className="testimonial-item" data-aos="fade-up">
                                <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                He ido dos veces a Colombia y volvería siempre que pueda. No encuentro otro lugar ideal, empezando por el viaje tan hermoso para llegar hasta ahí, el lugar, la atención, la comida...todo… Y esta pagina es la mejor para saber que hacer en Colombia.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                                <img src={testimonials4} className="testimonial-img" alt=""/>
                                <h3>Emma Schmid</h3>
                                <h4>Suiza</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialIndex;
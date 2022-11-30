import Navbar from "../navbar/Navbar";
import '../../css/App.css';

function ContactoIndex(props) {
  return (
    <div className="container-fluid">
        <Navbar/>
        <div className="contact">
            <div className="section-title">
                <h2>Contactanos</h2>
            </div>

            <div className="row" data-aos="fade-in">
                <div className="container-fluid d-flex align-items-stretch">
                    <div className="info">
                        <h3>Encuentra nuestras oficinas:</h3>
                        <br/>
                        <div className="address">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
                            </i>
                            <h4>Dirección:</h4>
                            <p>KM 22 Autopista Norte Vereda Verganzo sector Tibiflores, Tocancipa, Tocancipa.</p>
                        </div>

                        <div className="email">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/></svg>
                            </i>
                            <h4>Email:</h4>
                            <p>fabiangz_94@hotmail.com</p>
                        </div>

                        <div className="phone">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-phone-fill" viewBox="0 0 16 16"><path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/></svg>
                            </i>
                            <h4>Telefono:</h4>
                            <p>+57 310 6950754</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                    <h3>¿Cómo te podemos contactar?</h3>
                    <br/>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label for="name">Nombres Y Apellidos</label>
                            <input type="text" name="name" className="form-control" id="name" required/>
                        </div>
                        <div className="form-group col-md-12">
                            <label for="name">Email</label>
                            <input type="email" className="form-control" name="email" id="email" required/>
                        </div>
                    
                        <div className="form-group col-md-12">
                            <label for="name">Asunto</label>
                            <input type="text" className="form-control"  name="subject" id="subject" required/>
                        </div>
                        <div className="form-group">
                            <label for="name">¿Cómo te podemos ayudar?</label>
                            <textarea className="form-control" placeholder="¿Tienes alguna pregunta o quieres dejar algún comentario?" name="message" rows="5" required></textarea>
                        </div>
                    </div>
                    <div className="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Tu mensaje ha sido enviado con éxito. Gracias!</div>
                    </div>
                    <div className="text-center"><button type="submit">Enviar Mensaje</button></div>
                </form>
            </div>

        </div>
    </div>
  )
}

export default ContactoIndex;
import inicio1 from '../../img/background.png';
import inicio2 from '../../img/inicio2.png';
import inicio3 from '../../img/inicio3.png';
import inicio4 from '../../img/inicio4.png';
import '../../css/App.css';


function Slider() {
  return (
    <div>    
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner ">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={inicio1} class="d-block w-auto" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <p>“Colombia, el país más acogedor del mundo...”</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={inicio2} class="d-block w-auto" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <p>¡Viaja por Colombia y vive momentos memorables!</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={inicio3} class="d-block w-auto" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <p>Todo para tu próxima escapada....</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={inicio4} class="d-block w-auto" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <p>Programa tu próximo viaje por Colombia...</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Slider;

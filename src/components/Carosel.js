import React from 'react';


const Carosel = () => {
  return (
    <div>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://i.pinimg.com/736x/04/da/f5/04daf59fd22b4b284d101905996984d2.jpg" className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="imagen.png" className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src="imagen.png" className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carosel;

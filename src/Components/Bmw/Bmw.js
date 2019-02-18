import React from 'react';
import '../css/cars.css';
import m2 from '../../Images/Bmw/m2.png';
import series4 from '../../Images/Bmw/series4.png';
import series6 from '../../Images/Bmw/series6.png';
import x6 from '../../Images/Bmw/x6.png';

const Bmw = () => {
  return(
    <div className="cars-wrapper">
      <div className="car-model">
        <img className="car-image" alt="Bmw m2" src={m2}></img>
        <h4 className="car-title">BMW M2</h4>
        <a href="#" className="view-more">View more</a>
      </div>
      <div className="car-model">
        <img className="car-image" alt="Bmw series4" src={series4}></img>
        <h4 className="car-title">BMW series 4</h4>
        <a href="#" className="view-more">View more</a>
      </div>
      <div className="car-model">
        <img className="car-image" alt="Bmw series6" src={series6}></img>
        <h4 className="car-title">BMW series 6</h4>
        <a href="#" className="view-more">View more</a>
      </div>
      <div className="car-model">
        <img className="car-image" alt="Bmw x6" src={x6}></img>
        <h4 className="car-title">BMW x6</h4>
        <a href="#" className="view-more">View more</a>
      </div>
    </div>
  );
}

export default Bmw;
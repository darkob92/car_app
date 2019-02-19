import React from 'react';
import '../css/cars.css';
import beetle from '../../../Images/Volkswagen/beetle.png';
import golf from '../../../Images/Volkswagen/golf.png';
import jetta from '../../../Images/Volkswagen/jetta.png';
import passat from '../../../Images/Volkswagen/passat.png';

const Volkswagen = () => {
  return(
    <div className="cars-wrapper">
      <div className="car-model">
        <img className="car-image" alt="volkswagen beetle" src={beetle}></img>
        <h4 className="car-title">VW Beetle</h4>
        <a href="#" className="view-more">View more</a>
      </div>
      <div className="car-model">
        <img className="car-image" alt="volkswagen golf 7" src={golf}></img>
        <h4 className="car-title">VW Golf VII</h4>
        <a href="#" className="view-more">View more</a>
      </div>
      <div className="car-model">
        <img className="car-image" alt="volkswagen jetta" src={jetta}></img>
        <h4 className="car-title">VW Jetta</h4>
        <a href="#" className="view-more">View more</a>
      </div>
      <div className="car-model">
        <img className="car-image" alt="volkswagen passat" src={passat}></img>
        <h4 className="car-title">VW Passat</h4>
        <a href="#" className="view-more">View more</a>
      </div>
    </div>
  );
}

export default Volkswagen;
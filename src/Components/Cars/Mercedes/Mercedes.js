import React from 'react';
import '../css/cars.css';
import cClass from '../../../Images/Mercedes/c-class.png';
import gla from '../../../Images/Mercedes/gla.png';
import gClass from '../../../Images/Mercedes/g-class.png';
import slk from '../../../Images/Mercedes/slk.png';

const Mercedes = () => {
  return(
    <div className="cars-wrapper">
      <div className="car-model">
        <img className="car-image" alt="mercedes c-class" src={cClass}></img>
        <h4 className="car-title">Mercedes C-Class</h4>
        <a href="#" className="view-more">View more</a>
      </div>
      <div className="car-model">
        <img className="car-image" alt="mercedes gla" src={gla}></img>
        <h4 className="car-title">Mercedes GLA</h4>
        <a href="#" className="view-more">View more</a>
      </div>
      <div className="car-model">
        <img className="car-image" alt="mercedes g-class" src={gClass}></img>
        <h4 className="car-title">Mercedes G-Class</h4>
        <a href="#" className="view-more">View more</a>
      </div>
      <div className="car-model">
        <img className="car-image" alt="mercedes slk" src={slk}></img>
        <h4 className="car-title">Mercedes SLK</h4>
        <a href="#" className="view-more">View more</a>
      </div>
    </div>
  );
}

export default Mercedes;
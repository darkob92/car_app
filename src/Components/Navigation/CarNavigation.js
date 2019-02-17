import React from 'react';
import './carNavigation.css';
import Audi from '../../Images/Car-Logo/audi-logo.png';
import Bmw from '../../Images/Car-Logo/bmw-logo.png';
import Mercedes from '../../Images/Car-Logo/mercedes-logo.png';
import Volkswagen from '../../Images/Car-Logo/volkswagen-logo.png';

const CarNavigation = () => {
  return(
    <div className="brands-wrapper">
      <div className="brands">
        <a href="#"><img className="brand-logo" src={Audi}></img></a>
      </div>
      <div className="brands">
        <a href="#"><img className="brand-logo" src={Bmw}></img></a>
      </div>
      <div className="brands">
        <a href="#"><img className="brand-logo" src={Mercedes}></img></a>
      </div>
      <div className="brands">
        <a href="#"><img className="brand-logo" src={Volkswagen}></img></a>
      </div>
    </div>
  );
}

export default CarNavigation;
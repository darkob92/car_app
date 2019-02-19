import React from 'react';
import './carNavigation.css';
import Audi from '../../Images/Car-Logo/audi-logo.png';
import Bmw from '../../Images/Car-Logo/bmw-logo.png';
import Mercedes from '../../Images/Car-Logo/mercedes-logo.png';
import Volkswagen from '../../Images/Car-Logo/volkswagen-logo.png';
import { Link } from 'react-router-dom';

const CarNavigation = () => {
  return(
    <div className="brands-wrapper">
      <div className="brands">
        <Link to="audi"><img alt="audi logo" className="brand-logo" src={Audi}></img></Link>
      </div>
      <div className="brands">
        <Link to="bmw"><img alt="bmw logo" className="brand-logo" src={Bmw}></img></Link>
      </div>
      <div className="brands">
        <Link to="mercedes"><img alt="mercedes logo" className="brand-logo" src={Mercedes}></img></Link>
      </div>
      <div className="brands">
        <Link to="volkswagen"><img alt="volkswagen logo" className="brand-logo" src={Volkswagen}></img></Link>
      </div>
    </div>
  );
}

export default CarNavigation;
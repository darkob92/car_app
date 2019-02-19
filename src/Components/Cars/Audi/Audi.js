import React, { Component } from 'react';
import '../css/cars.css';
import a5 from '../../../Images/Audi/a5.png';
import a6 from '../../../Images/Audi/a6.png';
import a8 from '../../../Images/Audi/a8.png';
import { inject, observer } from 'mobx-react';


@inject('CarStore')
@observer
class Audi extends Component  {
  render() {
    const { CarStore } = this.props;
    return (
      <div className="cars-wrapper">
        <div className="car-model">
          <img className="car-image" alt="audi a4" src={CarStore.audi[0].src}></img>
          <h4 className="car-title">{CarStore.audi[0].name}</h4>
          <a href="#" className="view-more">View more</a>
        </div>
        <div className="car-model">
          <img className="car-image" alt="audi a5" src={a5}></img>
          <h4 className="car-title">Audi A5</h4>
          <a href="#" className="view-more">View more</a>
        </div>
        <div className="car-model">
          <img className="car-image" alt="audi a6" src={a6}></img>
          <h4 className="car-title">Audi A6</h4>
          <a href="#" className="view-more">View more</a>
        </div>
        <div className="car-model">
          <img className="car-image" alt="audi a8" src={a8}></img>
          <h4 className="car-title">Audi A8</h4>
          <a href="#" className="view-more">View more</a>
        </div>
      </div>
    );
  }
}

export default Audi;
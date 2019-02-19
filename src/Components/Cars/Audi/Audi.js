import React, { Component } from 'react';
import '../css/cars.css';
import { inject, observer } from 'mobx-react';


@inject('CarStore')
@observer
class Audi extends Component  {
  render() {
    const { CarStore } = this.props;
    return (
      <div className="cars-wrapper">
        {CarStore.audi.map((car, i) => (
          <div className="car-model" key={i}>
            <img className="car-image" alt={car.name} src={car.src}></img>
            <h4 className="car-title">{car.name}</h4>
            <a href={car.link} className="view-more" target="_blank" rel="noopener noreferrer">View more</a>
          </div>
        ))}
      </div>
    );
  }
}

export default Audi;
import React from 'react';
import CarNavigation from '../Navigation/CarNavigation';
import './home.css';

const Home = () => {
  return(
    <div className="home-wrapper">
      <div className="main-navigation-wrapper">
        <ul className="main-navigation">
          <li className="navigation-item"><a className="navigation-link" href="#">Home</a></li>
          <li className="navigation-item"><a className="navigation-link" href="#">Cars</a></li>
          <li className="navigation-item"><a className="navigation-link" href="#">About Us</a></li>
          <li className="navigation-item"><a className="navigation-link" href="#">Contact Us</a></li>
        </ul>
      </div>
      <CarNavigation />
    </div>
  );
}

export default Home;
import React from 'react';
import CarNavigation from '../Navigation/CarNavigation';
import './home.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Audi from '../Cars/Audi/Audi';
import Bmw from '../Cars/Bmw/Bmw';
import Mercedes from '../Cars/Mercedes/Mercedes';
import Volkswagen from '../Cars/Volkswagen/Volkswagen';
import { Link, NavLink } from 'react-router-dom';

const Home = () => {
  return(
    <BrowserRouter>
      <div className="home-wrapper">
        <div className="main-navigation-wrapper">
          <ul className="main-navigation">
            <li className="navigation-item"><Link to="home" className="navigation-link">Home</Link></li>
            <li className="navigation-item"><a className="navigation-link" href="#">About Us</a></li>
            <li className="navigation-item"><a className="navigation-link" href="#">Contact Us</a></li>
          </ul>
        </div>
        <Route path='home' component={Home} />
        <CarNavigation />
        <Route path='/audi' component={Audi} />
        <Route path='/bmw' component={Bmw} />
        <Route path='/mercedes' component={Mercedes} />
        <Route path='/volkswagen' component={Volkswagen} />
      </div>
    </BrowserRouter>
  );
}

export default Home;
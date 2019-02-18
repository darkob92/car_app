import React from 'react';
import CarNavigation from '../Navigation/CarNavigation';
import './home.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Audi from '../Audi/Audi';
import Bmw from '../Bmw/Bmw';
import Mercedes from '../Mercedes/Mercedes';
import Volkswagen from '../Volkswagen/Volkswagen';
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
        <Route exact path='/' component={Home} />
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
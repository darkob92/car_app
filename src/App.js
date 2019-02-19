import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {inject, observer} from 'mobx-react';

@inject('CarStore')
@observer
class App extends Component {
  render() {
    const {CarStore} = this.props;
    return (
      <div className="App">
        <Home/>
        <h2>You have {CarStore.audi[0].src} cars</h2>
      </div>
    );
  }
}

export default App;

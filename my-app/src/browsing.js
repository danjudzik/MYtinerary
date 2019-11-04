import logo from './circled-right-2.png';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Browsing extends Component  {
  
  render (){ return (
        <div className="App">
      <header className="App-header">
      <p className="txto2"> Find your perfect trip, designed by insiders who know and love their citiesss </p>
        <h4 className="texto">Starts Browsing </h4>
        <Link to="/browsing"> <img src={logo} className="App-link" alt="logo" />
        </Link>
       
      </header>
       
     
    </div>
  )
  }
}

export default Browsing;

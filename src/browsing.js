import logo from './circled-right-2.png';
import React, { Component } from 'react';


class GreetingEverybody2 extends Component  {
  
  render (){ return (
        <div className="App">
      <header className="App-header">
      <p className="texto2"> Find your perfect trip, designed by insiders who know and love their cities </p>
        <h4 className="texto">Starts Browsing </h4>
        <img src={logo} className="App-link" alt="logo" />
      </header>
       
     
    </div>
  )
  }
}

export default GreetingEverybody2;

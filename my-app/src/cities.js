import React, { Component } from 'react';
import logo from './homeIcon.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class GreetingEverybody5 extends Component  {
  
  render (){ return (
        <div className="App">
      <header className="App-header">
      <p className="texto2">cities</p>
      <header className="App-header">
      <Link to ="/"> <img src={logo} className="App-logo" alt="logo" /></Link>
      </header>
      </header>
       
     
    </div>
  )
  }
}

export default GreetingEverybody5;
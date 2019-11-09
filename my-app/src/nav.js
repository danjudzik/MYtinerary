import logo from './imagenes/homeIcon.png';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Nav extends Component  {
 
  render (){ return (
        <div className="App">
      <header className="App-header">
      <Link to="/"> <img src={logo} className="App-logo" alt="logo" /></Link>
      </header>
       
    
    </div>
  )
  }
}

export default Nav;

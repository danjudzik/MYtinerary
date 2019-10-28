import React, { Component } from 'react';
import logo from './homeIcon.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import cai from './cai.png'


class StartBrowsing extends Component  {
  
  render (){ return (
        <div className="App">
      <header className="App-header">
      <p className="texto2">Browsing</p>
      <img src={cai}/>
        
      
      
      </header>
     
       
     
    </div>
  )
  }
}

export default StartBrowsing;
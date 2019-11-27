
import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class Footer extends Component  {
  
  render (){ return (
  <div className="App">
      <header className="App-header">
      <p className="texto2">Want to create your own MYtinerary?</p>
  
        <ul> 
          <li className="tabla"> 
           <Link to ="/Log_In">Log In</Link>
          </li>
          <li className="tabla">
            <Link to ="/Sign_In"> Sign In</Link>
          </li>
        </ul>

  
      </header>
       
    
  </div>
  )
  }
}

export default Footer;

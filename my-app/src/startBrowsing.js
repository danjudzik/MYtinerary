<<<<<<< HEAD
import React, { Component } from 'react';

import ny from './imagenes/descarga.jpg'
import amsterdam from './imagenes/amsterdam.jpg'
import paris from './imagenes/paris.jpeg'
import london from './imagenes/london.jpg'
import barcelona from './imagenes/barcelona.jpg'
import roma from './imagenes/roma.jpg'



class StartBrowsing extends Component  {
  
  render (){ return (
        <div className="App">
      <header className="App-header">
      <h2 className="texto2">Browsing</h2>
      <img className="imagen" src={ny}/> 
      <img className="imagen" src={amsterdam}/> 
      <img className="imagen" src={paris}/> 
      <img className="imagen" src={london}/> 
      <img className="imagen" src={barcelona}/> 
      <img className="imagen" src={roma}/> 
        
      
      
      </header>
     
       
     
    </div>
  )
  }
}

=======
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

>>>>>>> 698bdbc1c7bda6f5fb78421ee9877c43c717151b
export default StartBrowsing;
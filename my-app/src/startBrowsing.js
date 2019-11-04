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

export default StartBrowsing;
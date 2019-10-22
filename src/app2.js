import logo from './MYtineraryLogo.png';
import React, { Component } from 'react';
import './App.css';
import GreetingEverybody from './header.js'
import GreetingEverybody2 from './browsing.js'
import GreetingEverybody3 from './footer.js'


class App extends Component  {
  
  render (){ return (
        <div className="App">
      <header className="App-header">
        
        <GreetingEverybody > <img src={logo} className="App-logo" alt="logo" /> </GreetingEverybody>
      </header>

      <section>
        <p> Find your perfect trip, designed by insiders who know and love their cities </p>
        <h4>Starts Browsing </h4>
        <GreetingEverybody2 > 
          
          <img src={logo} className="App-logo" alt="logo" /> 
          </GreetingEverybody2>
        <p>Want to create your own MYtinerary?</p>
   

      </section>
      <footer>
      <ul>
          <li className="tabla">log in </li>
          <li className="tabla"> create account</li>
        </ul>
<GreetingEverybody3 > <img src={logo} className="App-logo" alt="logo" /> </GreetingEverybody3>
      </footer>
     
     
    </div>
  )
  }
}

export default App;

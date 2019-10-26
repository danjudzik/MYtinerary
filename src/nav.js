import logo from './homeIcon.png';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from './app2';

class GreetingEverybody3 extends Component  {
 
  render (){ return (
        <div className="App">
      <header className="App-header">
      <Link to ="/"> <img src={logo} className="App-logo" alt="logo" /></Link>
      </header>
       
     <Router>
       <Switch>
         <Route path ="/">
           <App />
         </Route>
       </Switch>
     </Router>
    </div>
  )
  }
}

export default GreetingEverybody3;

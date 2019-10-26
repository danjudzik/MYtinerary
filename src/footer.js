
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GreetingEverybody6 from './sing in';
import GreetingEverybody7 from './log in';


class GreetingEverybody4 extends Component  {
  
  render (){ return (
        <div className="App">
      <header className="App-header">
      <p className="texto2">Want to create your own MYtinerary?</p>
     <Router>
           <ul> 
           <li className="tabla"> 
           <Link to ="/sign in"> sign in</Link>
            </li>
           <li className="tabla">
             <Link to ="/create account"> create account</Link>
              </li>
        </ul>

        <Switch>
          <Route path="/sign in">
            <GreetingEverybody6 />
          </Route>
          <Route path="/create account">
            <GreetingEverybody7 />
          </Route>
        </Switch>
     </Router>

        
      </header>
       
     
    </div>
  )
  }
}

export default GreetingEverybody4;

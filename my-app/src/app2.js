import React, { Component } from "react";
import "./App.css";
import Header from "./header.js";
import Browsing from "./browsing.js";
import Nav from "./nav.js";
import Footer from "./footer.js";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from "./sing in";
import LogIn from "./log in";
import Postres from "./startBrowsing";
import Itinerary from "./cities";







class App extends Component {
  render() {
    return (
      <div className="App">
         <Header></Header>
        <Router>
          <Switch>
            <Route  path="/Sign_In" component={SignIn}></Route>
            <Route path="/Log_In/:city" component={Itinerary}></Route>
            <Route path="/sad/:city" component={Itinerary} ></Route>
            <Route  path="/browsing" component={ Postres}></Route>
            <Route exact path="/">
            
              <section>
                <div>
                  <Browsing> </Browsing>
                </div>
              </section>

            </Route>
          
          </Switch>
              <footer>
                <Footer></Footer>
              </footer>

              <nav>
                <Nav></Nav>
              </nav>

        </Router>
      </div>
    );
  }
}

export default App;

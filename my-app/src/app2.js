import React, { Component } from "react";
import "./App.css";
import Header from "./header.js";
import Browsing from "./browsing.js";
import Nav from "./nav.js";
import Footer from "./footer.js";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from "./sing in";
import LogIn from "./log in";
import StartBrowsing from "./startBrowsing";

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header></Header>
        <Router>
          <Switch>
            <Route exact path="/sign in"><SignIn /></Route>
            <Route exact path="/Create_Account" ><LogIn/></Route>
            <Route exact path="/browsing"><StartBrowsing/> </Route>
            <Route path="/">

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

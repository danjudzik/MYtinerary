import React, { Component } from 'react';
import './App.css';
import GreetingEverybody from './header.js'
import GreetingEverybody2 from './browsing.js'
import GreetingEverybody3 from './nav.js'
import GreetingEverybody4 from './footer.js'

class App extends Component  {
  
  render (){ return (
     <div className="App">
      <header className="App-header">
         <GreetingEverybody >  </GreetingEverybody>
      </header>

      <section>
         <div>
          <GreetingEverybody2> </GreetingEverybody2>
        </div>
       </section>

      <footer>
         <GreetingEverybody4>  </GreetingEverybody4>
       </footer>

      <nav>
         <GreetingEverybody3 >  </GreetingEverybody3>
      </nav>

    </div>
  )
  }
}

export default App;

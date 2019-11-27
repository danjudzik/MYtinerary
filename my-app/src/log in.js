import React, { Component } from 'react';
import logo from './homeIcon.png';



class LogIn extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  
  render (){ return (
        <div className="App">
      <header className="App-header">
      <form>
      <br/>
      <p  className="form">Username: </p>
      <input  className="form2"
        type='text'
        name='username'
        
      />
      <br/>
      <p  className="form">Password :</p>
      <input  className="form2"
      type='text'
      name='password'
      /> 
      <br/>
      <br/>
      
      <input type='submit' />
      

      </form>
      </header>
     
       
     
    </div>
  )
  }
}

export default LogIn;
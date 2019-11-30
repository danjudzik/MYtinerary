import React, { Component } from 'react';



class SignIn extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      profilePhoto: '',
      username: '',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
      country: 'England' ,
      agree: false,
    };
  }

  
  render (){ return (
        <div className="App">
      <header className="App-header">

      <form>
      <p>Photo: </p>
      <input
        type='text'
        name='profilePhoto'
        
      />
      <br/>
      <p className="form">Username: </p>
      <input className ="form2"
      value={this.state.value} onChange={this.handleChange}
        type='text'
        name='username'
        
      />
      <br/>
      <p className="form">Password: </p>
      <input className ="form2"
      type='text'
      name='password'
      /> 
      <br/>
      <p className="form">Email: </p>
      <input className ="form2"
        type='text'
        name='email'
        
      />
      <br/>
      <p className="form">First Name: </p>
      <input className ="form2"
      type='text'
      name='firstName'
      /> 
      <br/>
     <p className="form"> Last Name: </p>
      <input className ="form2"
      type='text'
      name='lastName'
      /> 
      <br/>
      <p className="form">Country: </p>
      <select value={this.state.country}>
        <option value="England">England</option>
        <option value="France">France</option>
        <option value="Germany">Germany</option>
        <option value="Holland">Holland</option>
        <option value="Ireland">Ireland</option>
        <option value="Spain">Spain</option>
        <option value="USA">United States of America</option>
      </select>
      <br/>
      <br/>
      <p> <input
        type='checkbox'
        name='agree'
      /> I agree to MYtinerary terms & Conditions</p>
      
      <br/>
      <br/>
      <input type='submit' />
      

      </form>
      </header>
     
       
     
    </div>
  )
  }
}

export default SignIn;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from './store/actions/userAction';




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
      country: '' ,
      agree: false,
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log("this")
    console.log(this)

    this.setState({
      [name]: value
    });
    
  }

   handleSubmit = (event) =>{
     console.log("this")
    event.preventDefault();
    if(
        this.state.username == "" ||
        this.state.pasword == "" ||
        this.state.profilePhoto == "" ||
        this.state.firstName == "" ||
        this.state.lastName == "" ||
        this.state.agree != false
    ){
    }

    event.preventDefault();
    
    console.log("this.state");
    console.log(this.state);
    const newUser = {
        username: this.state.username,
        password: this.state.password,
        profilePhoto: this.state.profilePhoto,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.username
    }
    this.props.dispatch(createUser(newUser));
}



  
  render (){ return (
        <div className="App">
      <header className="App-header">

      <form onSubmit={this.handleSubmit}>
      <p className="form">Photo: </p>
      <input
        type='text'
        name='profilePhoto'
        className="form2"
        onChange={this.handleInputChange}
        value={this.state.numberOfGuests}
      />
      <br/>
      <p className="form">Username: </p>
      <input className ="form2"
      value={this.state.value} onChange={this.handleChange}
        type='text'
        name='username'
        onChange={this.handleInputChange}
        value={this.state.numberOfGuests}
      />
      <br/>
      <p className="form">Password: </p>
      <input className ="form2"
      type='text'
      name='password'
      onChange={this.handleInputChange}
      value={this.state.numberOfGuests}
      /> 
      <br/>
      <p className="form">Email: </p>
      <input className ="form2"
        type='text'
        name='email'
        onChange={this.handleInputChange}
        value={this.state.numberOfGuests}
      />
      <br/>
      <p className="form">First Name: </p>
      <input className ="form2"
      type='text'
      name='firstName'
      onChange={this.handleInputChange}
      value={this.state.numberOfGuests}
      /> 
      <br/>
     <p className="form"> Last Name: </p>
      <input className ="form2"
      type='text'
      name='lastName'
      onChange={this.handleInputChange}
      value={this.state.numberOfGuests}
      /> 
      <br/>
      <p className="form">Country: </p>
      <select name='country' value={this.state.country}  onChange={this.handleInputChange}>
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
        onChange={this.handleInputChange}
        checked={this.state.isGoing}
      /> I agree to MYtinerary terms & Conditions</p>
      
      <br/>
      <br/>
     <input type='submit' value="Submit" />
      

      </form>
      </header>
     
       
     
    </div>
  )
  }
}

export default connect() (SignIn);

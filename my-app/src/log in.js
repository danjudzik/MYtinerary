import React, { Component } from 'react';
import './App.css';
import { loginUser } from './store/actions/loginAction';
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import {Button} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class LogIn extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log(this)

    this.setState({
      [name]: value
    });
    
  }

   handleSubmit = (event) => {
    console.log("this")
    console.log(this)

    event.preventDefault();

    console.log("this.state");
    console.log(this.state);
    this.props.login(this.state)
    console.log(this.props)
   }

  
  render (){ 
    console.log("this.props.token")
    console.log(this.props.token2)
    const token = this.props.token2;
    if(token != "undefined" && token != {} && token != null){
      return <Redirect to='/' />
    }
    
    else{

    
    return (
        <div className="App">
      <header className="App-header">
      <form onSubmit={this.handleSubmit}>
      <br/>
      <p  className="form">Username: </p>
      <input  className="form2"
        type='text'
        name='username'
        value={this.state.value} onChange={this.handleChange}
        onChange={this.handleInputChange}
        value={this.state.numberOfGuests}
      />
      <br/>
      <p  className="form">Password :</p>
      <input  className="form2"
      type='text'
      name='password'
      value={this.state.value} onChange={this.handleChange}
        onChange={this.handleInputChange}
        value={this.state.numberOfGuests}
      /> 
      <br/>
      <br/>
      
      <Button variant = "outline-secondary">
      <Link to="/google" style={{ color: 'black' }}>Google log in</Link>
      </Button>
      <br/>
      <br/>
      
      <input type='submit' />
      </form>
      </header>
     
       
     
    </div>
  )
  }
}
}
const mapDispatchToProps =  {
  
  login:user=>loginUser(user)

}



const mapStateToProps = (state) => {
console.log("state")
console.log(state)
return {
  token2:state.login
}
}
export default connect(mapStateToProps,mapDispatchToProps)(LogIn);
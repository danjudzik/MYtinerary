import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct } from './store/actions/cityAction';




class FormItem extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      country: ''
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

    
    console.log("this.state");
    console.log(this.state);
    console.log(this.props)
    

}



  
  render (){ return (
        <div className="App">
      <header className="App-header">

      <form onSubmit={this.handleSubmit}>
      <p className="form">City: </p>
      <input
        type='text'
        name='city'
        className="form2"
        onChange={this.handleInputChange}
        value={this.state.numberOfGuests}
      />
      <br/>
      <p className="form">Country: </p>
      <input className ="form2"
      value={this.state.value} onChange={this.handleChange}
        type='text'
        name='country'
        onChange={this.handleInputChange}
        value={this.state.numberOfGuests}
      />
      <br/>
     
      <br/>
      <br/>
     <input type='submit' value="Submit" />
      

      </form>
      </header>
     
       
     
    </div>
  )
  }
}

export default connect() (FormItem);

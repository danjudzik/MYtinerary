import React from 'react';
import './App.css';
import {Button} from 'react-bootstrap';
import {addProduct,getProducts} from './store/actions/cityAction'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class Postres extends React.Component {
 constructor(props){
   super(props);
   this.state= {
     products:[]
    }
  }
  onChange2 = name => event => {
    let value_ = name === 'image'
    ? event.target.files[0]
    : event.target.value
  
    this.setState({[name]: value_ })
  
  }

  submitForm =()=>{
    fetch("http://localhost:5000/city",{
      method: 'POST',
      body:JSON.stringify(this.state),
      headers:{
        'Content-Type': 'application/json'
      }
     }).then((res)=>{
      return res.json();
    }).then((data)=>{
      console.log(data)
      this.props.dispatch(addProduct(data))

    })
  }
  
 
  componentDidMount(){
    console.log("this")
    console.log(this)
    this.props.getProducts()
  }

  render(){
    return (
      <React.Fragment>
       <hr/>
        <div>
          <ul >
            {this.props.products && this.props.products.map((product)=>{
              return (
                <li className="tabla2" key={product._id}>
                 <span>
                    <Link to={'/city/:city'} >{product.city}-{product.country}</Link>

                 </span>
                    

                  
                </li>
              )
            })}
          </ul>
        </div>
         
        <form onSubmit={(e)=>{e.preventDefault()}} className="tabla3"> 
            City:      <input type="text"  onChange={this.onChange2('City')} placeholder="City" className="form2"/> <br/>
            Country:      <input type="text"  onChange={this.onChange2('Country')} placeholder="Country" className="form2"/>
          <br/>
          <br/>
          <input type="submit" onClick={()=>{this.submitForm.bind(this)()}}></input>
        </form>
        <hr/>
        
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    products:state.cities,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    products: () => dispatch(getProducts)
  }
}
export default connect(mapStateToProps,  {getProducts})(Postres);

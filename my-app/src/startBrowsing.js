import React from 'react';
import './App.css';
import {Button} from 'react-bootstrap';
import {addProduct,getProducts} from './store/actions/cityAction'
import { connect } from 'react-redux'
import FormItem from './formItem';


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
        

        <div>
       
        </div>
        <hr/>
        <div>

          <ul >
            {this.props.products && this.props.products.map((product)=>{
              return (
                <li className="tabla2" key={product._id}>
                 <Button variant="outline-secondary">{product.city}-{product.country}   </Button> 
                </li>
              
              
              )
            })}
          </ul>
        </div>
         
        <form onSubmit={(e)=>{e.preventDefault()}} className="tabla3"> 
            City:      <input type="text"  onChange={this.onChange2('City')} placeholder="City"/> <br/>
            Country:      <input type="text"  onChange={this.onChange2('Country')} placeholder="Country"/>

          <input type="submit" onClick={()=>{this.submitForm()}}></input>
        </form>
        <hr/>
        
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("state2")
  console.log(state)
  return {
    products:state.cities,
  }
}

export default connect(mapStateToProps, {getProducts})(Postres);

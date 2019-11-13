import React from 'react';
import './App.css';
import {Button} from 'react-bootstrap';



class Postres extends React.Component {
 constructor(props){
   super(props);
   this.state= {
     products:[]
    }
  }
  componentDidMount(){
    fetch("http://localhost:5000/city").then((res)=>{
      return res.json();
    }).then((data)=>{
      this.setState({products:data})
    })
  }
  render(){
    return (
      <React.Fragment>
        

        <div>
       
        </div>
        <hr/>
        <div>
         

          <ul >
            {this.state.products.map((product)=>{
              return (
                <li className="tabla2" key={product._id}>
                 <Button variant="outline-secondary">{product.city}</Button> 
                </li>
              
              
              )
            })}
          </ul>
        </div>
        <hr/>
        
      </React.Fragment>
    )
  }
}

export default Postres;
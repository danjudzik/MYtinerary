import React from 'react';
import './App.css';
import {getProducts} from './store/actions/itineraryAction'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { withRouter } from "react-router-dom";


class Itinerary extends React.Component{
  

  componentDidMount(){
    console.log("this")
    console.log(this.props)
    this.props.getProducts()
   }

  render(){
     return (
       <React.Fragment>
         <div>aaasdfdfh
           sdf
           a
           defaultasd
           fromadf
           sda
         </div>
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

 const mapDispatchToProps = (dispatch,getState) => {
   console.log("getState")
   console.log(getState)
  return {
    getProducts: () => dispatch(getProducts(getState.match.params.city)),
  
  }
}



Itinerary.propTypes = {
  getProducts: PropTypes.func.isRequired
}
 export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);
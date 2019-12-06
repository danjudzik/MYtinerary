import React from 'react';
import './App.css';
import {getProducts,fetchItineraries} from './store/actions/itineraryAction'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';


import { withRouter } from "react-router-dom";


class Itinerary extends React.Component{
  

  componentDidMount() {
    let city = this.props.match.params.city;
    console.log(city);
    console.log(this.props);
    this.props.dispatch(fetchItineraries(city))
   .then(() => {
   console.log("aca")
   console.log(this.props)

   })
};
  render(){
    const itineraries = this.props.itineraries
    const activities = this.props.activities
    const city = this.props.match.params.city
console.log(itineraries)
     return (
       
       <React.Fragment>
         <div>
           <h3>Itinieraries for {city}</h3>
         </div>
       </React.Fragment>
     )
   }
 }

 
 const mapDispatchToProps = (dispatch,getState) => {
   console.log("getState")
   console.log(getState)
  return {
    fetchItineraries: () => dispatch(fetchItineraries(getState.match.params.city)),
  
  }
}



Itinerary.propTypes = {
  getProducts: PropTypes.func.isRequired
}
 export default connect(mapDispatchToProps)(Itinerary);
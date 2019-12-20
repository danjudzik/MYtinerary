import React from 'react';
import './App.css';
import {getProducts,fetchItineraries} from './store/actions/itineraryAction'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';



import { withRouter } from "react-router-dom";


class Itinerary extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
        open:false,
        clicked: false,
    }
};

static propTypes = {
  dispatch: PropTypes.func,
};

  componentDidMount() {
    let city = this.props.match.params.city;
    console.log("city");
    console.log(city);

    this.props.fetchItineraries(city)
   .then(() => {
   console.log("aca")
   console.log(this.props)

   })
};
  render(){
    const itineraries = this.props.itineraries2
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
   console.log(getState)
   console.log(dispatch)
  return {
    fetchItineraries: () => dispatch(fetchItineraries(getState.match.params.city)),
  
  }
}

const mapStateToProps = (state) => {
  console.log("state")
  console.log(state)
  return {
  itineraries2: state.itineraries.itineraries
  }
  }
  export default connect(mapStateToProps,mapDispatchToProps )(Itinerary);
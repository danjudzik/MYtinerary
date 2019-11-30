import { combineReducers } from "redux";
import citiesReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer"
const rootReducer = combineReducers({cities: citiesReducer,itineraries: itineraryReducer});
export default rootReducer;
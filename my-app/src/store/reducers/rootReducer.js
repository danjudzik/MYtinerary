import { combineReducers } from "redux";
import citiesReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer"
import loginReducer from "./loginReducer"
const rootReducer = combineReducers({cities: citiesReducer,itineraries: itineraryReducer,login: loginReducer});
export default rootReducer;
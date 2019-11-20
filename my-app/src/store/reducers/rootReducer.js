import { combineReducers } from "redux";
import citiesReducer from "./cityReducer";
const rootReducer = combineReducers({cities: citiesReducer});
export default rootReducer;
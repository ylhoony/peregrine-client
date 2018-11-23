import { combineReducers } from "redux";
import authenticationReducer from "./authenticationReducer";
import countriesReducer from "./countriesReducer";

export const rootReducer = combineReducers({
  authentication: authenticationReducer,
  countries: countriesReducer
});

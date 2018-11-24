import { combineReducers } from "redux";
import authentication from "./authenticationReducer";
import countries from "./countriesReducer";
import currencies from "./currenciesReducer";

export const rootReducer = combineReducers({
  authentication,
  countries,
  currencies
});

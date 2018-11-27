import { combineReducers } from "redux";
import authentication from "./authenticationReducer";
import countries from "./countriesReducer";
import currencies from "./currenciesReducer";
import layouts from "./layoutsReducers";

export const rootReducer = combineReducers({
  authentication,
  countries,
  currencies,
  layouts
});

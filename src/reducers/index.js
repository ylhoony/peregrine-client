import { combineReducers } from "redux";
import users from "./usersReducer";
import countries from "./countriesReducer";
import currencies from "./currenciesReducer";
import layouts from "./layoutsReducers";
import accounts from "./accountsReducer";

export const rootReducer = combineReducers({
  users,
  countries,
  currencies,
  layouts,
  accounts
});

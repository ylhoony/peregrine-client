import { combineReducers } from "redux";

const initalState = {
  user: null
};

export const rootReducer = combineReducers({
  user: initalState
});

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

import App from "./App";
import { rootReducer } from "./reducers/index";
import { muiTheme } from "./services/muiTheme";
import * as serviceWorker from "./serviceWorker";

const store = createStore(rootReducer);
const theme = createMuiTheme(muiTheme);
console.log("theme: ", theme);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

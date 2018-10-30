import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { muiTheme } from "./services/muiTheme";
import CssBaseline from "@material-ui/core/CssBaseline";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

const theme = createMuiTheme(muiTheme);

ReactDOM.render(
  // <Provider>
    <MuiThemeProvider theme={theme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </MuiThemeProvider>,
  // </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignUp from "./containers/authentication/SignUp";
import SignIn from "./containers/authentication/SignIn";

import Demand from "./containers/demand/Demand";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />

          <Route exact path="/demand" component={Demand} />
        </Switch>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// material-ui layout setup
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

// Authentication Routes
import SignUp from "./containers/authentication/SignUp";
import SignIn from "./containers/authentication/SignIn";

// Wrapper Routes with Auth
import AuthenticatedRoutes from "./containers/AuthenticatedRoutes";

// Layout
import Header from "./containers/layout/Header";
import LeftDrawer from "./containers/layout/LeftDrawer";

// Routes - Nav
import Dashboard from "./containers/Dashboard";
import Demand from "./containers/demand/Demand";
import Supply from "./containers/supply/Supply";
import Product from "./containers/product/Product";
import Warehouse from "./containers/warehouse/Warehouse";
import Logistics from "./containers/logistics/Logistics";
import Report from "./containers/report/Report";
import Integration from "./containers/integration/Integration";
import Setting from "./containers/setting/Setting";

// Routes
import Accounts from "./containers/accounts/Accounts";
import User from "./containers/users/User";

const styles = theme => ({
  root: {
    display: "flex"
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Router>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />

          <div className={classes.root}>
            <AuthenticatedRoutes>
              <CssBaseline />
              <Header />
              <LeftDrawer />

              <Route exact path="/" render={() => <Dashboard />} />
              <Route exact path="/dashboard" render={() => <Dashboard />} />
              <Route exact path="/product" render={() => <Product />} />
              <Route exact path="/demand" render={() => <Demand />} />
              <Route exact path="/supply" render={() => <Supply />} />
              <Route exact path="/warehouse" render={() => <Warehouse />} />
              <Route exact path="/logistics" render={() => <Logistics />} />
              <Route exact path="/report" render={() => <Report />} />
              <Route exact path="/integration" render={() => <Integration />} />
              <Route exact path="/setting" render={() => <Setting />} />
              <Route exact path="/profile" render={() => <User />} />

              <Route path="/accounts" render={() => <Accounts />} />
            </AuthenticatedRoutes>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);

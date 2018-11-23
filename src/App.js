import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignUp from "./containers/authentication/SignUp";
import SignIn from "./containers/authentication/SignIn";

import AuthenticatedRoutes from "./containers/AuthenticatedRoutes";

// Layout
import Header from "./containers/layout/Header";
import LeftDrawer from "./containers/layout/LeftDrawer";

// Routes - Main
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

// material-ui layout setup
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const drawerWidth = 180;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawerPaper: {
    height: "200vh",
    position: "fixed",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  },
  content: {
    flexGrow: 1,
    paddingTop: 0,
    paddingLeft: theme.spacing.unit * 11,
    paddingRight: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  }
});

class App extends Component {
  constructor() {
    super();

    this.state = {
      openLeftDrawer: false
    };
  }

  handleLeftDrawerDisplay = () => {
    !!this.state.openLeftDrawer
      ? this.setState({ openLeftDrawer: false })
      : this.setState({ openLeftDrawer: true });

    console.log(this.state);
  };

  render() {
    const { classes } = this.props;
    console.log(classes.content);
    return (
      <Router>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />

          <AuthenticatedRoutes>
            <div className={classes.root}>
              <CssBaseline />
              <Header
                appBarClassName={classes.appBar}
                handleLeftDrawerDisplay={this.handleLeftDrawerDisplay}
              />
              <LeftDrawer
                drawerVariant="permanent"
                drawerClasses={{
                  paper: classNames(
                    classes.drawerPaper,
                    !this.state.openLeftDrawer && classes.drawerPaperClose
                  )
                }}
                toolbarClassName={classes.toolbar}
                openLeftDrawer={this.state.openLeftDrawer}
              />

              {/* Routes */}
              <Route
                exact
                path="/"
                render={() => (
                  <Dashboard
                    mainClassName={classes.content}
                    toolbarClassName={classes.toolbar}
                  />
                )}
              />

              <Route
                exact
                path="/dashboard"
                render={() => (
                  <Dashboard
                    mainClassName={classes.content}
                    toolbarClassName={classes.toolbar}
                  />
                )}
              />

              <Route
                exact
                path="/product"
                render={() => (
                  <Product
                    mainClassName={classes.content}
                    toolbarClassName={classes.toolbar}
                  />
                )}
              />

              <Route
                exact
                path="/demand"
                render={() => (
                  <Demand
                    mainClassName={classes.content}
                    toolbarClassName={classes.toolbar}
                  />
                )}
              />

              <Route
                exact
                path="/supply"
                render={() => (
                  <Supply
                    mainClassName={classes.content}
                    toolbarClassName={classes.toolbar}
                  />
                )}
              />

              <Route
                exact
                path="/warehouse"
                render={() => (
                  <Warehouse
                    mainClassName={classes.content}
                    toolbarClassName={classes.toolbar}
                  />
                )}
              />

              <Route
                exact
                path="/logistics"
                render={() => (
                  <Logistics
                    mainClassName={classes.content}
                    toolbarClassName={classes.toolbar}
                  />
                )}
              />

              <Route
                exact
                path="/report"
                render={() => (
                  <Report
                    mainClassName={classes.content}
                    toolbarClassName={classes.toolbar}
                  />
                )}
              />

              <Route
                exact
                path="/integration"
                render={() => (
                  <Integration
                    mainClassName={classes.content}
                    toolbarClassName={classes.toolbar}
                  />
                )}
              />

              <Route
                exact
                path="/setting"
                render={() => (
                  <Setting
                    mainClassName={classes.content}
                    toolbarClassName={classes.toolbar}
                  />
                )}
              />

              <Route
                exact
                path="/profile"
                render={() => (
                  <User
                    mainClassName={classes.content}
                    toolbarClassName={classes.toolbar}
                  />
                )}
              />

              <Route
                path="/accounts"
                render={() => (
                  <Accounts
                    mainClassName={classes.content}
                    toolbarClassName={classes.toolbar}
                  />
                )}
              />
            </div>
          </AuthenticatedRoutes>
        </Switch>
      </Router>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);

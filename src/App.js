import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignUp from "./containers/authentication/SignUp";
import SignIn from "./containers/authentication/SignIn";

// Layout
import Header from "./containers/layout/Header";
import LeftDrawer from "./containers/layout/LeftDrawer";

// Routes
import Dashboard from "./containers/Dashboard";
import Demand from "./containers/demand/Demand";
import Supply from "./containers/supply/Supply";

// material-ui layout setup
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const drawerWidth = 200;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 0
  },
  toolbar: theme.mixins.toolbar
});

class App extends Component {
  constructor() {
    super();

    this.state = {
      openLeftDrawer: false
    };
  }

  handleDrawerDisplay = () => {
    !!this.state.openLeftDrawer
      ? this.setState({ openLeftDrawer: false })
      : this.setState({ openLeftDrawer: true });
  };

  render() {
    const { classes } = this.props;
    console.log(classes.content);
    return (
      <Router>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />

          <div className={classes.root}>
            {/* <CssBaseline /> */}
            <Header appBarClassName={classes.appBar} handleDrawerOpen />
            <LeftDrawer
              drawerClassName={classes.drawer}
              drawerVariant="permanent"
              drawerClasses={{
                paper: classes.drawerPaper
              }}
              toolbarClassName={classes.toolbar}
            />

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

            {/* Routes */}
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
              path="/demand"
              render={() => (
                <Demand
                  mainClassName={classes.content}
                  toolbarClassName={classes.toolbar}
                />
              )}
            />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default withStyles(styles)(App);

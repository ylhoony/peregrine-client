import React, { Component, Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import AccountList from "./AccountList";
import AccountForm from "./AccountForm";

class Accounts extends Component {
  render() {
    const { match } = this.props;

    return (
      <Fragment>
        <main className={this.props.mainClassName}>
          <div className={this.props.toolbarClassName} />
          <Switch>
            <Route
              exact
              path={`${match.url}`}
              component={() => <AccountList />}
            />
            <Route
              exact
              path={`${match.url}/new`}
              component={() => <AccountForm />}
            />
            <Route
              exact
              path={`${match.url}/:accountId`}
              component={() => <AccountForm />}
            />
          </Switch>
        </main>
      </Fragment>
    );
  }
}


export default withRouter(Accounts);

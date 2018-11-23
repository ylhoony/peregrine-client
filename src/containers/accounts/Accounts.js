import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";

import AccountList from "./AccountList";
import AccountForm from "./AccountForm";

class Accounts extends Component {
  render() {
    const { match } = this.props;
    console.log(match.url);

    return (
      <Fragment>
        <main className={this.props.mainClassName}>
          <div className={this.props.toolbarClassName} />
          <Switch>
            <Route exact path={`${match.url}`} component={AccountList} />
            <Route path={`${match.url}/new`} component={AccountForm} />
            <Route
              path={`${match.url}/:accountId`}
              component={() => <AccountForm />}
            />
          </Switch>
        </main>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ authentication }) => {
  return {
    currentUser: authentication.currentUser
  };
};

export default connect(mapStateToProps)(withRouter(Accounts));

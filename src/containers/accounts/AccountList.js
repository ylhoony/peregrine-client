import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";

class AccountList extends Component {
  render() {
    const { match } = this.props;
    return (
      <Fragment>
        <h2>Accounts List Page</h2>
        <button component={Link} to={`${match.url}/new`}>
          create new account
        </button>
      </Fragment>
    );
  }
}

export default withRouter(AccountList);

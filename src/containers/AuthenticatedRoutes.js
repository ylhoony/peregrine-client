import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../actions/index";
import authentication from "../services/authentication";

import Loading from "../components/shared/Loading";

class AuthenticatedRoutes extends Component {
  componentDidMount() {
    const token = authentication.getToken();
    if (!token) {
      this.props.history.push("/signin");
    } else {
      this.props.actions.authenticateUser(token);
    }
  }

  render() {
    console.log("authenticatedRoute: ", this.props);

    if (this.props.authenticateUserLoading) {
      return <Loading />;
    }

    if (
      !!this.props.authenticateUserError ||
      !!this.props.authenticateUserFailure
    ) {
      this.props.history.push("/signin");
    }

    return <Fragment>{this.props.children}</Fragment>;
  }
}

const mapStateToProps = ({ authentication }) => {
  return {
    currentUser: authentication.currentUser,

    authenticateUserLoading: authentication.authenticateUserLoading,
    authenticateUserFailure: authentication.authenticateUserFailure,
    authenticateUserError: authentication.authenticateUserError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AuthenticatedRoutes)
);

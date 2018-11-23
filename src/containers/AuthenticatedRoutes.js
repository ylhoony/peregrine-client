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
      if (!this.props.countries.length) {
        this.props.actions.fetchCountries();
      }
    }
  }

  render() {
    console.log("authenticatedRoute: ", this.props);
    const {
      authenticateUserLoading,
      authenticateUserError,
      authenticateUserFailure,
      fetchCountriesLoading
    } = this.props;

    if (authenticateUserLoading || fetchCountriesLoading) {
      return <Loading />;
    }

    if (!!authenticateUserError || !!authenticateUserFailure) {
      this.props.history.push("/signin");
    }

    return <Fragment>{this.props.children}</Fragment>;
  }
}

const mapStateToProps = ({ authentication, countries }) => {
  return {
    currentUser: authentication.currentUser,

    authenticateUserLoading: authentication.authenticateUserLoading,
    authenticateUserFailure: authentication.authenticateUserFailure,
    authenticateUserError: authentication.authenticateUserError,

    countries: countries.countries,
    fetchCountriesLoading: countries.fetchCountriesLoading,
    fetchCountriesFailure: countries.fetchCountriesFailure,
    fetchCountriesError: countries.fetchCountriesError
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

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
      const { actions, countries, currencies } = this.props;
      actions.authenticateUser(token);
      if (!countries.length) {
        actions.fetchCountries();
      }
      if (!currencies.length) {
        actions.fetchCurrencies();
      }
    }
  }

  render() {
    console.log("authenticatedRoute: ", this.props);
    const {
      authenticateUserLoading,
      authenticateUserError,
      authenticateUserFailure,
      fetchCountriesLoading,
      // fetchCountriesFailure,
      // fetchCountriesError,
      fetchCurrenciesLoading
      // fetchCurrenciesFailure,
      // fetchCurrenciesError
    } = this.props;

    if (
      authenticateUserLoading ||
      fetchCountriesLoading ||
      fetchCurrenciesLoading
    ) {
      return <Loading />;
    }

    if (!!authenticateUserError || !!authenticateUserFailure) {
      this.props.history.push("/signin");
    }

    return <Fragment>{this.props.children}</Fragment>;
  }
}

const mapStateToProps = ({ authentication, countries, currencies }) => {
  return {
    currentUser: authentication.currentUser,

    authenticateUserLoading: authentication.authenticateUserLoading,
    authenticateUserFailure: authentication.authenticateUserFailure,
    authenticateUserError: authentication.authenticateUserError,

    countries: countries.countries,
    fetchCountriesLoading: countries.fetchCountriesLoading,
    fetchCountriesFailure: countries.fetchCountriesFailure,
    fetchCountriesError: countries.fetchCountriesError,

    currencies: currencies.currencies,
    fetchCurrenciesLoading: currencies.fetchCurrenciesLoading,
    fetchCurrenciesFailure: currencies.fetchCurrenciesFailure,
    fetchCurrenciesError: currencies.fetchCurrenciesError
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

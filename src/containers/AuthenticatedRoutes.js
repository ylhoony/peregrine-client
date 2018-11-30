import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../actions/index";
import authentication from "../services/authentication";

import Loading from "../components/shared/Loading";

//mui
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

const drawerWidth = 200;

const styles = theme => ({
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit * 10,
    paddingRight: theme.spacing.unit * 8,
    paddingBottom: theme.spacing.unit * 8,
    paddingLeft: theme.spacing.unit * 8,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: 0
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: `${drawerWidth}px`
  }
});

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
      fetchCountriesFailure,
      fetchCountriesError,
      fetchCurrenciesLoading,
      fetchCurrenciesFailure,
      fetchCurrenciesError
    } = this.props;

    const { classes, leftDrawerOpen } = this.props;

    if (authenticateUserError) {
      authentication.removeToken();
      this.props.history.push("/signin");
    }

    if (
      authenticateUserLoading ||
      fetchCountriesLoading ||
      fetchCurrenciesLoading
    ) {
      return <Loading />;
    }

    return (
      <Fragment>
        <main
          className={classNames(
            classes.content,
            leftDrawerOpen && classes.contentShift
          )}
        >
          {this.props.children}
        </main>
      </Fragment>
    );
  }
}

const mapStateToProps = ({
  accounts,
  authentication,
  countries,
  currencies,
  layouts
}) => {
  return {
    currentUser: authentication.currentUser,

    currentAccount: accounts.currentAccount,
    accounts: accounts.accounts,

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
    fetchCurrenciesError: currencies.fetchCurrenciesError,

    leftDrawerOpen: layouts.leftDrawerOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default withStyles(styles, { withTheme: true })(
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(AuthenticatedRoutes)
  )
);

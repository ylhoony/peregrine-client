import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../actions/index";
import UserAuth from "../services/UserAuth";
import { leftDrawerWidth } from "../services/muiTheme";

import Loading from "../components/shared/Loading";

//mui
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

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
    marginLeft: `${leftDrawerWidth}px`
  }
});

class AuthenticatedRoutes extends Component {
  componentDidMount() {
    const token = UserAuth.getToken();
    if (!token) {
      this.props.history.push("/signin");
    } else {
      const { actions, countries, currencies } = this.props;
      actions.authenticateUser(token);
      actions.fetchCurrentAccount();
      actions.fetchAccounts();
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
      fetchAccountsLoading,
      fetchAccountsFailure,
      fetchAccountsError,
      fetchCountriesLoading,
      fetchCountriesFailure,
      fetchCountriesError,
      fetchCurrenciesLoading,
      fetchCurrenciesFailure,
      fetchCurrenciesError
    } = this.props;

    const { classes, leftDrawerOpen } = this.props;

    if (authenticateUserError) {
      UserAuth.removeToken();
      this.props.history.push("/signin");
    }

    if (
      authenticateUserLoading ||
      fetchAccountsLoading ||
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
  users,
  countries,
  currencies,
  layouts
}) => {
  return {
    currentUser: users.currentUser,
    currentAccount: users.currentAccount,

    fetchCurrentAccountLoading: users.fetchCurrentAccountLoading,
    fetchCurrentAccountFailure: users.fetchCurrentAccountFailure,
    fetchCurrentAccountError: users.fetchCurrentAccountError,

    accounts: accounts.accounts,
    fetchAccountsLoading: accounts.fetchAccountsLoading,
    fetchAccountsFailure: accounts.fetchAccountsFailure,
    fetchAccountsError: accounts.fetchAccountsError,

    authenticateUserLoading: users.authenticateUserLoading,
    authenticateUserFailure: users.authenticateUserFailure,
    authenticateUserError: users.authenticateUserError,

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

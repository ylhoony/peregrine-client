import authentication from "./authenticationActions";
import countries from "./countriesActions";
import currencies from "./currenciesActions";
import layouts from "./layoutsActions";
import accounts from "./accountsActions";

export const actions = {
  // layout
  openLeftDrawer: layouts.openLeftDrawer,
  closeLeftDrawer: layouts.closeLeftDrawer,
  // authentication
  signUp: authentication.signUp,
  signIn: authentication.signIn,
  authenticateUser: authentication.authenticateUser,
  // countries
  fetchCountries: countries.fetchCountries,
  fetchCountry: countries.fetchCountry,
  //currencies
  fetchCurrencies: currencies.fetchCurrencies,
  fetchCurrency: currencies.fetchCurrency,
  // accounts
  createAccount: accounts.createAccount
};

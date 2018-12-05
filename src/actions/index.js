import users from "./usersActions";
import countries from "./countriesActions";
import currencies from "./currenciesActions";
import layouts from "./layoutsActions";
import accounts from "./accountsActions";

export const actions = {
  // layout
  openLeftDrawer: layouts.openLeftDrawer,
  closeLeftDrawer: layouts.closeLeftDrawer,
  // users
  signUp: users.signUp,
  signIn: users.signIn,
  authenticateUser: users.authenticateUser,
  fetchCurrentAccount: users.fetchCurrentAccount,
  updateCurrentAccount: users.updateCurrentAccount,
  // countries
  fetchCountries: countries.fetchCountries,
  fetchCountry: countries.fetchCountry,
  //currencies
  fetchCurrencies: currencies.fetchCurrencies,
  fetchCurrency: currencies.fetchCurrency,
  // accounts
  fetchAccounts: accounts.fetchAccounts,
  createAccount: accounts.createAccount
};

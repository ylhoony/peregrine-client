import authentication from "./authenticationActions";
import countries from "./countriesActions";
import currencies from "./currenciesActions";

export const actions = {
  // authentication
  signUp: authentication.signUp,
  signIn: authentication.signIn,
  authenticateUser: authentication.authenticateUser,
  // countries
  fetchCountries: countries.fetchCountries,
  fetchCountry: countries.fetchCountry,
  //currencies
  fetchCurrencies: currencies.fetchCurrencies,
  fetchCurrency: currencies.fetchCurrency
};

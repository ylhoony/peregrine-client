import authentication from "./authenticationActions";
import countries from "./countriesActions";

export const actions = {
  // authentication
  signUp: authentication.signUp,
  signIn: authentication.signIn,
  authenticateUser: authentication.authenticateUser,
  // countries
  fetchCountries: countries.fetchCountries,
  fetchCountry: countries.fetchCountry
};

import authentication from "./authenticationActions";

export const actions = {
  signUp: authentication.signUp,
  signIn: authentication.signIn,
  authenticateUser: authentication.authenticateUser
};

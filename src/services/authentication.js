export default class Authentication {
  static setToken(token) {
    localStorage.setItem("token", token.slice(6).trim());
  }

  static token() {
    "Bearer ".concat(localStorage.getItem("token"));
    return "Bearer ".concat(localStorage.getItem("token"));
  }

  static removeToken(token) {
    localStorage.removeItem("token");
  }
}

export default class UserAuth {
  static setToken(token) {
    localStorage.setItem("token", token.split(" ")[1]);
  }

  static getEncodedToken() {
    "Bearer ".concat(localStorage.getItem("token"));
    return "Bearer ".concat(localStorage.getItem("token"));
  }

  static getToken() {
    return localStorage.getItem("token");
  }

  static removeToken(token) {
    localStorage.removeItem("token");
  }
}

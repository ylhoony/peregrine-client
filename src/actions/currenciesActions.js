import axios from "axios";
import authentication from "../services/authentication";

// actions for fetching currency list
export const FETCH_CURRENCIES_START = "FETCH_CURRENCIES_START";
export const FETCH_CURRENCIES_SUCCESS = "FETCH_CURRENCIES_SUCCESS";
export const FETCH_CURRENCIES_FAILURE = "FETCH_CURRENCIES_FAILURE";
export const FETCH_CURRENCIES_ERROR = "FETCH_CURRENCIES_ERROR";

// actions for fetching one currency
export const FETCH_CURRENCY_START = "FETCH_CURRENCY_START";
export const FETCH_CURRENCY_SUCCESS = "FETCH_CURRENCY_SUCCESS";
export const FETCH_CURRENCY_FAILURE = "FETCH_CURRENCY_FAILURE";
export const FETCH_CURRENCY_ERROR = "FETCH_CURRENCY_ERROR";

export default {
  fetchCurrencies: () => {
    return async dispatch => {
      dispatch({ type: FETCH_CURRENCIES_START });
      try {
        const res = await axios.get("/api/v1/currencies", {
          headers: {
            Authorization: authentication.getEncodedToken()
          }
        });
        dispatch({ type: FETCH_CURRENCIES_SUCCESS, payload: res.data });
      } catch (err) {
        dispatch({ type: FETCH_CURRENCIES_ERROR });
      }
    };
  },
  fetchCurrency: currencyId => {
    return async dispatch => {
      dispatch({ type: FETCH_CURRENCY_START });
      try {
        const res = await axios.get(`/api/v1/currencies/${currencyId}`, {
          headers: {
            Authorization: authentication.getEncodedToken()
          }
        });
        dispatch({ type: FETCH_CURRENCY_SUCCESS, payload: res.data });
      } catch (err) {
        dispatch({ type: FETCH_CURRENCY_ERROR });
      }
    };
  }
};

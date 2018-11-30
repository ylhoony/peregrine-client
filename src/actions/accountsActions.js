import axios from "axios";
import authentication from "../services/authentication";

// actions for fetching account list
export const FETCH_ACCOUNTS_START = "FETCH_ACCOUNTS_START";
export const FETCH_ACCOUNTS_SUCCESS = "FETCH_ACCOUNTS_SUCCESS";
export const FETCH_ACCOUNTS_FAILURE = "FETCH_ACCOUNTS_FAILURE";
export const FETCH_ACCOUNTS_ERROR = "FETCH_ACCOUNTS_ERROR";

// actions for creating new account
export const CREATE_ACCOUNT_START = "CREATE_ACCOUNT_START";
export const CREATE_ACCOUNT_SUCCESS = "CREATE_ACCOUNT_SUCCESS";
export const CREATE_ACCOUNT_FAILURE = "CREATE_ACCOUNT_FAILURE";
export const CREATE_ACCOUNT_ERROR = "CREATE_ACCOUNT_ERROR";

// actions for fetching one account
export const FETCH_ACCOUNT_START = "FETCH_ACCOUNT_START";
export const FETCH_ACCOUNT_SUCCESS = "FETCH_ACCOUNT_SUCCESS";
export const FETCH_ACCOUNT_FAILURE = "FETCH_ACCOUNT_FAILURE";
export const FETCH_ACCOUNT_ERROR = "FETCH_ACCOUNT_ERROR";

// actions for updating account
export const UPDATE_ACCOUNT_START = "UPDATE_ACCOUNT_START";
export const UPDATE_ACCOUNT_SUCCESS = "UPDATE_ACCOUNT_SUCCESS";
export const UPDATE_ACCOUNT_FAILURE = "UPDATE_ACCOUNT_FAILURE";
export const UPDATE_ACCOUNT_ERROR = "UPDATE_ACCOUNT_ERROR";

export default {
  fetchAccounts: () => {
    return async dispatch => {
      dispatch({ type: FETCH_ACCOUNTS_START });

      try {
        const res = await axios.get("/api/v1/accounts", {
          headers: {
            Authorization: authentication.getEncodedToken()
          }
        });
        dispatch({ type: FETCH_ACCOUNTS_SUCCESS, payload: res.data })
      } catch (err) {
        console.log(err);
        dispatch({ type: FETCH_ACCOUNTS_ERROR });
      }
    };
  },
  createAccount: data => {
    return async dispatch => {
      dispatch({ type: CREATE_ACCOUNT_START });
      try {
        const res = await axios({
          method: "post",
          url: "/api/v1/accounts",
          headers: {
            Authorization: authentication.getEncodedToken()
          },
          data: data
        });
        dispatch({ type: CREATE_ACCOUNT_SUCCESS, payload: res.data });
      } catch (err) {
        dispatch({ type: CREATE_ACCOUNT_ERROR });
      }
    };
  },
  fetchAccount: data => {}
};

import axios from "axios";
import authentication from "../services/authentication";

export const SIGN_UP_USER_START = "SIGN_UP_USER_START";
export const SIGN_UP_USER_SUCCESS = "SIGN_UP_USER_SUCCESS";
export const SIGN_UP_USER_FAILURE = "SIGN_UP_USER_FAILURE";
export const SIGN_UP_USER_ERROR = "SIGN_UP_USER_ERROR";

export const SIGN_IN_USER_START = "SIGN_IN_USER_START";
export const SIGN_IN_USER_SUCCESS = "SIGN_IN_USER_SUCCESS";
export const SIGN_IN_USER_FAILURE = "SIGN_IN_USER_FAILURE";
export const SIGN_IN_USER_ERROR = "SIGN_IN_USER_ERROR";

export const SIGN_OUT_USER_START = "SIGN_OUT_USER_START";
export const SIGN_OUT_USER_SUCCESS = "SIGN_OUT_USER_SUCCESS";
export const SIGN_OUT_USER_FAILURE = "SIGN_OUT_USER_FAILURE";
export const SIGN_OUT_USER_END = "SIGN_OUT_USER_END";

export const AUTHENTICATE_USER_START = "AUTHENTICATE_USER_START";
export const AUTHENTICATE_USER_SUCCESS = "AUTHENTICATE_USER_SUCCESS";
export const AUTHENTICATE_USER_FAILURE = "AUTHENTICATE_USER_FAILURE";
export const AUTHENTICATE_USER_ERROR = "AUTHENTICATE_USER_ERROR";

export default {
  signUp: data => {
    return async dispatch => {
      dispatch({ type: SIGN_UP_USER_START });
      try {
        const res = await axios.post("/api/v1/sign_up", data);

        if (!!res.headers.authorization) {
          authentication.setToken(res.headers.authorization);
          dispatch({
            type: SIGN_UP_USER_SUCCESS,
            payload: res.data
          });
        } else {
          dispatch({
            type: SIGN_UP_USER_FAILURE
          });
        }
      } catch (err) {
        dispatch({ type: SIGN_UP_USER_ERROR, payload: err });
      }
    };
  },
  signIn: data => {
    return async dispatch => {
      dispatch({ type: SIGN_IN_USER_START });
      try {
        const res = await axios.post("/api/v1/sign_in", data);
        if (!!res.headers.authorization) {
          authentication.setToken(res.headers.authorization);
          dispatch({
            type: SIGN_IN_USER_SUCCESS,
            payload: res.data
          });
        } else {
          dispatch({
            type: SIGN_IN_USER_FAILURE
          });
        }
      } catch (err) {
        dispatch({ type: SIGN_IN_USER_ERROR, payload: err });
      }
    };
  },
  authenticateUser: () => {
    return async dispatch => {
      dispatch({ type: AUTHENTICATE_USER_START });
      try {
        const res = await axios.get("/api/v1/verify_user", {
          headers: {
            Authorization: authentication.getEncodedToken()
          }
        });
        dispatch({ type: AUTHENTICATE_USER_SUCCESS, payload: res.data });
      } catch (err) {
        dispatch({ type: AUTHENTICATE_USER_ERROR, payload: err });
      }
    };
  }
};

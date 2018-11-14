import axios from "axios";
import authentication from "../services/authentication";

export const SIGN_UP_USER_START = "SIGN_UP_USER_START";
export const SIGN_UP_USER_SUCCESS = "SIGN_UP_USER_START_SUCCESS";
export const SIGN_UP_USER_FAILURE = "SIGN_UP_USER_START_FAILURE";
export const SIGN_UP_USER_ERROR = "SIGN_UP_USER_START_ERROR";

export const SIGN_IN_USER_START = "SIGN_IN_USER_START";
export const SIGN_IN_USER_SUCCESS = "SIGN_IN_USER_SUCCESS";
export const SIGN_IN_USER_ERROR = "SIGN_IN_USER_ERROR";

export const SIGN_OUT_USER_START = "SIGN_OUT_USER_START";
export const SIGN_OUT_USER_SUCCESS = "SIGN_OUT_USER_SUCCESS";
export const SIGN_OUT_USER_END = "SIGN_OUT_USER_END";

export const AUTHENTICATE_USER = "AUTHENTICATE_USER";

export default {
  signUp: data => {
    return async dispatch => {
      dispatch({ type: SIGN_UP_USER_START });
      try {
        const res = await axios.post("/api/v1/sign_up", data);

        if (!!res.headers.authorization) {
          authentication.setToken(res.headers.authorization);
          console.log(res);
          dispatch({
            type: SIGN_UP_USER_SUCCESS,
            payload: res.data
          });
        } else {
          dispatch({
            type: SIGN_UP_USER_FAILURE,
            // payload: res
          });
        }
      } catch (err) {
        console.log(err);
        dispatch({ type: SIGN_UP_USER_ERROR, payload: err });
      }
    };
  },
  signIn: data => {
    return async dispatch => {
      dispatch({ type: SIGN_IN_USER_START });
      try {
        const res = await axios.post("/api/v1/sign_up", data);
        // console.log(res);
        dispatch({
          type: SIGN_IN_USER_SUCCESS,
          payload: res.headers.authorization
        });
      } catch (err) {
        console.log(err);
        dispatch({ type: SIGN_IN_USER_SUCCESS, payload: err });
      }
    };
  },
  authenticateUser: () => {
    return async dispatch => {
      console.log(authentication.token());
      const res = axios.get("/api/v1/authenticate", {
        headers: {
          Authorization: authentication.token()
        }
      });
      dispatch({ type: AUTHENTICATE_USER, payload: res });
    };
  }
};

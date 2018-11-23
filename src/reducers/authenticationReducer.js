import {
  //
  SIGN_UP_USER_START,
  SIGN_UP_USER_SUCCESS,
  SIGN_UP_USER_FAILURE,
  SIGN_UP_USER_ERROR,
  //
  SIGN_IN_USER_START,
  SIGN_IN_USER_SUCCESS,
  SIGN_IN_USER_FAILURE,
  SIGN_IN_USER_ERROR,
  //
  // SIGN_OUT_USER_START,
  // SIGN_OUT_USER_SUCCESS,
  // SIGN_OUT_USER_FAILURE,
  // SIGN_OUT_USER_ERROR,
  //
  AUTHENTICATE_USER_START,
  AUTHENTICATE_USER_SUCCESS,
  AUTHENTICATE_USER_FAILURE,
  AUTHENTICATE_USER_ERROR
} from "../actions/authenticationActions";

const initialState = {
  currentUser: null,

  signUpLoading: false,
  signUpFailure: null,
  signUpError: null,

  signInLoading: false,
  signInFailure: null,
  signInError: null,

  authenticateUserLoading: false,
  authenticateUserFailure: null,
  authenticateUserError: null
};

export default (state = initialState, action) => {
  console.log("state: ", state);
  console.log("action: ", action);
  // debugger;

  switch (action.type) {
    // Sign Up
    case SIGN_UP_USER_START:
      return {
        ...state,
        signUpLoading: true
      };

    case SIGN_UP_USER_SUCCESS:
      return {
        ...state,
        signUpLoading: false,
        currentUser: action.payload.current_user
      };

    case SIGN_UP_USER_FAILURE:
      return {
        ...state,
        signUpLoading: false,
        signUpFailure: true
      };

    case SIGN_UP_USER_ERROR:
      return {
        ...state,
        signUpLoading: false,
        signUpError: true
      };

    // Sign In
    case SIGN_IN_USER_START:
      return {
        ...state,
        signInLoading: true
      };

    case SIGN_IN_USER_SUCCESS:
      return {
        ...state,
        signInLoading: false,
        currentUser: action.payload.current_user
      };

    case SIGN_IN_USER_FAILURE:
      return {
        ...state,
        signInLoading: false,
        signInFailure: true
      };

    case SIGN_IN_USER_ERROR:
      return {
        ...state,
        signInLoading: false,
        signInError: true
      };

    // AUTHENTICATE_USER
    case AUTHENTICATE_USER_START:
      return {
        ...state,
        authenticateUserLoading: true
      };

    case AUTHENTICATE_USER_SUCCESS:
      return {
        ...state,
        authenticateUserLoading: false,
        currentUser: action.payload.user
      };

    case AUTHENTICATE_USER_FAILURE:
      return {
        ...state,
        authenticateUserLoading: false,
        authenticateUserFailure: true
      };

    case AUTHENTICATE_USER_ERROR:
      return {
        ...state,
        authenticateUserLoading: false,
        authenticateUserError: true
      };

    default:
      return state;
  }
};

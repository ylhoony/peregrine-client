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
  AUTHENTICATE_USER_ERROR,
  //
  FETCH_CURRENT_ACCOUNT_START,
  FETCH_CURRENT_ACCOUNT_SUCCESS,
  FETCH_CURRENT_ACCOUNT_FAILURE,
  FETCH_CURRENT_ACCOUNT_ERROR,
  //
  UPDATE_CURRENT_ACCOUNT_START,
  UPDATE_CURRENT_ACCOUNT_SUCCESS,
  UPDATE_CURRENT_ACCOUNT_FAILURE,
  UPDATE_CURRENT_ACCOUNT_ERROR
} from "../actions/usersActions";

const initialState = {
  currentUser: null,
  currentAccount: null,

  signUpLoading: false,
  signUpFailure: null,
  signUpError: null,

  signInLoading: false,
  signInFailure: null,
  signInError: null,

  authenticateUserLoading: false,
  authenticateUserFailure: null,
  authenticateUserError: null,

  fetchCurrentAccountLoading: false,
  fetchCurrentAccountFailure: false,
  fetchCurrentAccountError: false,

  updateCurrentAccountLoading: false,
  updateCurrentAccountFailure: false,
  updateCurrentAccountError: false
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
        currentUser: action.payload
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
        signInLoading: true,
        signInFailure: null,
        signInError: null
      };

    case SIGN_IN_USER_SUCCESS:
      return {
        ...state,
        signInLoading: false,
        currentUser: action.payload
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
        currentUser: action.payload
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

    case FETCH_CURRENT_ACCOUNT_START:
      return {
        ...state,
        fetchCurrentAccountLoading: true
      };

    case FETCH_CURRENT_ACCOUNT_SUCCESS:
      console.log("current_account success: ", action.payload);
      return {
        ...state,
        fetchCurrentAccountLoading: false,
        currentAccount: action.payload
      };

    case FETCH_CURRENT_ACCOUNT_FAILURE:
      return {
        ...state,
        fetchCurrentAccountLoading: false,
        fetchCurrentAccountFailure: true
      };

    case FETCH_CURRENT_ACCOUNT_ERROR:
      return {
        ...state,
        fetchCurrentAccountLoading: false,
        fetchCurrentAccountError: true
      };

    //
    case UPDATE_CURRENT_ACCOUNT_START:
      return {
        ...state,
        updateCurrentAccountLoading: true
      };

    case UPDATE_CURRENT_ACCOUNT_SUCCESS:
      return {
        ...state,
        updateCurrentAccountLoading: false,
        currentAccount: action.payload
      };

    case UPDATE_CURRENT_ACCOUNT_FAILURE:
      return {
        ...state,
        updateCurrentAccountLoading: false,
        updateCurrentAccountFailure: true
      };

    case UPDATE_CURRENT_ACCOUNT_ERROR:
      return {
        ...state,
        updateCurrentAccountLoading: false,
        updateCurrentAccountError: true
      };

    default:
      return state;
  }
};

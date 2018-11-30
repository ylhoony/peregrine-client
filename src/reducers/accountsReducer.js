import {
  // actions for fetching account list
  // FETCH_ACCOUNTS_START,
  // FETCH_ACCOUNTS_SUCCESS,
  // FETCH_ACCOUNTS_FAILURE,
  // FETCH_ACCOUNTS_ERROR,
  // actions for creating new account
  CREATE_ACCOUNT_START,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE,
  CREATE_ACCOUNT_ERROR

  // actions for fetching one account
  // FETCH_ACCOUNT_START,
  // FETCH_ACCOUNT_SUCCESS,
  // FETCH_ACCOUNT_FAILURE,
  // FETCH_ACCOUNT_ERROR,

  // // actions for updating account
  // UPDATE_ACCOUNT_START,
  // UPDATE_ACCOUNT_SUCCESS,
  // UPDATE_ACCOUNT_FAILURE,
  // UPDATE_ACCOUNT_ERROR
} from "../actions/accountsActions";

const initialState = {
  currentAccount: null,
  accounts: [],

  createAccountLoading: null,
  createAccountFailure: null,
  createAccountError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ACCOUNT_START:
      return {
        ...state,
        createAccountLoading: true
      };

    case CREATE_ACCOUNT_SUCCESS:
      debugger;
      return {
        ...state,
        createAccountLoading: false,
        currentAccount: action.payload,
        accounts: state.accounts.concat(action.payload)
      };

    case CREATE_ACCOUNT_FAILURE:
      return {
        ...state,
        createAccountLoading: false,
        createAccountFailure: true
      };

    case CREATE_ACCOUNT_ERROR:
      return {
        ...state,
        createAccountLoading: false,
        createAccountError: true
      };

    default:
      return state;
  }
};

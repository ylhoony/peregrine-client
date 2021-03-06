import {
  // actions for fetching account list
  FETCH_ACCOUNTS_START,
  FETCH_ACCOUNTS_SUCCESS,
  FETCH_ACCOUNTS_FAILURE,
  FETCH_ACCOUNTS_ERROR,
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
  accounts: [],

  fetchAccountsLoading: null,
  fetchAccountsFailure: null,
  fetchAccountsError: null,

  createAccountLoading: null,
  createAccountFailure: null,
  createAccountError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACCOUNTS_START:
      return {
        ...state,
        fetchAccountsLoading: true
      };

    case FETCH_ACCOUNTS_SUCCESS:
      return {
        ...state,
        fetchAccountsLoading: false,
        accounts: action.payload
      };

    case FETCH_ACCOUNTS_FAILURE:
      return {
        ...state,
        fetchAccountsLoading: false,
        fetchAccountsFailure: true
      };

    case FETCH_ACCOUNTS_ERROR:
      return {
        ...state,
        fetchAccountsLoading: false,
        fetchAccountsError: true
      };

    case CREATE_ACCOUNT_START:
      return {
        ...state,
        createAccountLoading: true
      };

    case CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        createAccountLoading: false,
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

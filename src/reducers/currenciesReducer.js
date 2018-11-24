import {
  // actions for fetching currency list
  FETCH_CURRENCIES_START,
  FETCH_CURRENCIES_SUCCESS,
  FETCH_CURRENCIES_FAILURE,
  FETCH_CURRENCIES_ERROR,

  // actions for fetching one currency
  FETCH_CURRENCY_START,
  FETCH_CURRENCY_SUCCESS,
  FETCH_CURRENCY_FAILURE,
  FETCH_CURRENCY_ERROR
} from "../actions/currenciesActions";

const initialState = {
  currencies: [],
  fetchCurrenciesLoading: false,
  fetchCurrenciesFailure: null,
  fetchCurrenciesError: null,

  selectedCurrency: null,
  fetchCurrencyLoading: false,
  fetchCurrencyFailure: null,
  fetchCurrencyError: null
};

export default (state = initialState, action) => {
  // console.log("currencies reducer: ", action);

  switch (action.type) {
    // fetch currency list
    case FETCH_CURRENCIES_START:
      return {
        ...state,
        fetchCurrenciesLoading: true
      };

    case FETCH_CURRENCIES_SUCCESS:
      return {
        ...state,
        currencies: action.payload,
        fetchCurrenciesLoading: false
      };

    case FETCH_CURRENCIES_FAILURE:
      return state;

    case FETCH_CURRENCIES_ERROR:
      return state;

    // fetch one country
    case FETCH_CURRENCY_START:
      return {
        ...state,
        fetchCurrencyLoading: true
      };

    case FETCH_CURRENCY_SUCCESS:
      return {
        ...state,
        selectedCurrency: action.payload,
        fetchCurrencyLoading: false
      };

    case FETCH_CURRENCY_FAILURE:
      return state;

    case FETCH_CURRENCY_ERROR:
      return state;

    default:
      return state;
  }
};

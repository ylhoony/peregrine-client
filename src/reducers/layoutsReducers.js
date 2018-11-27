import { OPEN_LEFT_DRAWER, CLOSE_LEFT_DRAWER } from "../actions/layoutsActions";

const initialState = {
  leftDrawerWidth: 240,
  leftDrawerOpen: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_LEFT_DRAWER:
      return {
        ...state,
        leftDrawerOpen: true
      };

    case CLOSE_LEFT_DRAWER:
      return {
        ...state,
        leftDrawerOpen: false
      };

    default:
      return state;
  }
};

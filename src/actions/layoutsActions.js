export const OPEN_LEFT_DRAWER = "OPEN_LEFT_DRAWER";
export const CLOSE_LEFT_DRAWER = "CLOSE_LEFT_DRAWER";
// export const OPEN_RIGHT_DRAWER = "OPEN_RIGHT_DRAWER";
// export const CLOSE_RIGHT_DRAWER = "CLOSE_RIGHT_DRAWER";

export default {
  openLeftDrawer: () => {
    return dispatch => {
      dispatch({ type: OPEN_LEFT_DRAWER });
    };
  },
  closeLeftDrawer: () => {
    return dispatch => {
      dispatch({ type: CLOSE_LEFT_DRAWER });
    };
  }
};

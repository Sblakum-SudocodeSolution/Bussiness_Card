import * as actionTypes from "../ActionType/TextActiontypes";

export const initialState = {
  text: "",
};

const textReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    case actionTypes.CLEAR_TEXT:
      return {
        ...state,
        text: "",
      };
    default:
      return state;
  }
};

export default textReducer;

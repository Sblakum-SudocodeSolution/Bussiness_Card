import * as actionTypes from "../ActionType/ImageActiontypes";

export const initialState = {
  image: "",
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_IMAGE:
      return {
        ...state,
        image: action.payload,
      };
    default:
      return state;
  }
};

export default imageReducer;

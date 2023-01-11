import * as actionTypes from "../ActionType/ShapeActiontypes";

export const initialState = {
  shape: "",
  square: "",
  star : ""
};

const shapeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SHAPE:
      return {
        ...state,
        shape: action.payload,
      };
    case actionTypes.SET_SQUARE:
      return {
        ...state,
        square: action.payload,
      };
      case actionTypes.SET_STAR:
      return {
        ...state,
        star: action.payload,
      };
    default:
      return state;
  }
};

export default shapeReducer;

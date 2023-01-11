import * as actionTypes from "../ActionType/ShapeActiontypes";

const setShape = (shape) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_SHAPE,
    payload: shape,
  });
};

const setSquare = (square) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_SQUARE,
    payload: square,
  });
};

const setStar = (star) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_STAR,
    payload: star,
  });
};

export { setShape, setSquare, setStar };

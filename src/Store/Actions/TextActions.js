import * as actionTypes from "../ActionType/TextActiontypes";

const setText = (textVal) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_TEXT,
    payload: textVal,
  });
};

const clearText = () => (dispatch) => {
  dispatch({
    type: actionTypes.CLEAR_TEXT,
  });
};

export { setText, clearText };

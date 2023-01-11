import * as actionTypes from "../ActionType/ImageActiontypes";

const setImage = (imageUrl) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_IMAGE,
    payload: imageUrl,
  });
};

export { setImage };

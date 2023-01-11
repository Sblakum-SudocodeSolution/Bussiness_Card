import { combineReducers } from "redux";
import TextReducer from "./TextReducer";
import ShapeReducer from "./ShapeReducer";
import ImageReducer from "./ImageReducer";
import SquareReducer from "./ShapeReducer";
import StarReducer from "./ShapeReducer";

export default combineReducers({
  text: TextReducer,
  shape: ShapeReducer,
  image: ImageReducer,
  square: SquareReducer,
  star: StarReducer,
});

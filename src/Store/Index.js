import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "./Reducers";

const initialState = {};

const middlewares = [thunk];

const store = createStore(
  RootReducer,
  initialState,
  compose(
    applyMiddleware(...middlewares)
  )
);

export default store;

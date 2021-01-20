import { createStore, combineReducers } from "redux";
import Reducer from "../reducers/Reducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({reducer:  Reducer});

const store = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default store;
 
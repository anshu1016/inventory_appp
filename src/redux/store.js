import { applyMiddleware, createStore } from "redux";
import { itemReducer } from "./reducer";
import thunk from "redux-thunk";

export const store = createStore(itemReducer, applyMiddleware(thunk));

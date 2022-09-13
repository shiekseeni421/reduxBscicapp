import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";
import thunk from "redux-thunk";

const middleWare = [thunk];
const store = createStore(reducer, applyMiddleware(...middleWare));

export default store;

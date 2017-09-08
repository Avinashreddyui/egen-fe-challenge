/**
 * Created by avvinash on 9/6/2017.
 */
import thunk from "redux-thunk"
import {createStore, applyMiddleware} from "redux";
import rootReducer from "./Reducers/index";
const store =createStore(
    rootReducer,
    window.devToolsExtension && window.devToolsExtension(),
    applyMiddleware(thunk)
);

export default store;
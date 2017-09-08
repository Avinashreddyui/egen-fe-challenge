/**
 * Created by avvinash on 9/6/2017.
 */
import { combineReducers } from 'redux';
import * as Reducer from "../GridComponent/AppDucksReducer/AppDucksReducer"

export default combineReducers({
    search:Reducer.AppReducer
});
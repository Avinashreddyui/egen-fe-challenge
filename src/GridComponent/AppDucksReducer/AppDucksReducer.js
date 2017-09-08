
import axios from "axios";
import store from "../../store";

export const FETCH_DATA_FAILURE="FETCH_DATA_FAILURE";
export const FETCH_DATA_ON_SUCCESS="FETCH_DATA_ON_SUCCESS";
export const SEARCH_TEXT="SEARCH_TEXT";
export const CHANGE_TO_ASCENDING="CHANGE_TO_ASCENDING";
export const CHANGE_TO_DESCENDING="CHANGE_TO_DESCENDING";

const API="https://demo4169905.mockable.io/trip%3FvehicleId=C_09a95c0f8ccef871";

export function AppReducer(state={},action){
    switch(action.type) {
        case FETCH_DATA_ON_SUCCESS:
            return {
                ...state,
                results: action.data.results
            };
        case SEARCH_TEXT:
            const searchValue=action.payload;
            const stateResults=action.data;
            const searched=stateResults.filter((val)=>val.id.includes(searchValue));
            return {
                ...state,
                results:searched
            };
        case CHANGE_TO_ASCENDING:
            return {
                ...state,
                results:action.payload
            };
        case CHANGE_TO_DESCENDING:
            return {
                ...state,
                results:action.payload
            };

        default:return state
    }
}
export function searchRequest() {
    return function (dispatch) {
        axios.get(API)
            .then((response) => dispatch(fetchDataOnSuccess(response.data)),
                (error) => dispatch(fetchDataFailure(error))
            )
    }
}
export function searchBarRequest(val) {
    return function (dispatch) {
        const currentData=store.getState().search.results;
        dispatch(searchBar(val,currentData))
    }
}
export function fetchDataOnSuccess(data) {
    return {
        type: FETCH_DATA_ON_SUCCESS,
        data: data
    }
}
export function fetchDataFailure(data) {
    return {
        type: FETCH_DATA_FAILURE,
        data: data
    }
}
export function searchBar(val, currentData) {
    return {
        type: SEARCH_TEXT,
        payload: val,
        data:currentData
    }
}
export function changeToAscending(data) {
    return {
        type:CHANGE_TO_ASCENDING,
        payload:data
    }
}
export function changeToDescending(data) {
    return {
        type:CHANGE_TO_DESCENDING,
        payload:data
    }
}
export function dataToAsc(val) {
    return function (dispatch) {
        const currentData=store.getState().search.results;
        currentData.sort((a, b) => {
            if (val=='id') {
                return a.id > b.id ? 1 : a.id < b.id ? -1 : 0;
            }
            if (val=='distance_m') {
                return a.distance_m - b.distance_m;
            }
            if (val=='fuel_cost_usd') {
                return a.fuel_cost_usd - b.fuel_cost_usd;
            }
            if (val=='average_kmpl') {
                return a.average_kmpl - b.average_kmpl;
            }
            if (val=='score_events') {
                return a.score_events - b.score_events;
            }
            if (val=='score_speeding') {
                return a.score_speeding - b.score_speeding;
            }
            if (val=='idling_time_s') {
                return a.idling_time_s - b.idling_time_s;
            }
        });
        dispatch(changeToAscending(currentData))
    }
}
export function dataToDsc(val) {
    return function (dispatch) {
        const currentData=store.getState().search.results;
        currentData.sort((a, b) => {
            if (val=='id') {
                return b.id > a.id ? 1 : b.id < a.id ? -1 : 0;
            }
            if (val=='distance_m') {
                return b.distance_m - a.distance_m;
            }
            if (val=='fuel_cost_usd') {
                return b.fuel_cost_usd - a.fuel_cost_usd;
            }
            if (val=='average_kmpl') {
                return b.average_kmpl - a.average_kmpl;
            }
            if (val=='score_events') {
                return b.score_events - a.score_events;
            }
            if (val=='score_speeding') {
                return b.score_speeding - a.score_speeding;
            }
            if (val=='idling_time_s') {
                return b.idling_time_s - a.idling_time_s;
            }
        });
        dispatch(changeToDescending(currentData))
    }
}


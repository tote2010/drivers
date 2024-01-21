import { GET_ALL_DRIVERS, GET_DRIVER_BY_ID, GET_DRIVER_BY_NAME } from "../actions";

let initialState = { allDrivers:[], driversCopy:[], post:[] };

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GET_ALL_DRIVERS:
            return {...state, allDrivers: action.payload, driversCopy: action.payload};
        case GET_DRIVER_BY_ID:
            return {...state, allDrivers: action.payload, driversCopy: action.payload};
        case GET_DRIVER_BY_NAME:
            return {...state, allDrivers: action.payload, driversCopy: action.payload};
        default: 
            return state;
    }
}

export default rootReducer;
import { GET_ALL_DRIVERS, GET_DRIVER_BY_ID, GET_DRIVER_BY_NAME, POST_DRIVER, GET_ALL_TEAMS } from "../actions";


//Or let ??
const initialState = { 
    allDrivers:[],
    driverById: [],
    driverByIdCopy: [],
    driversCopy:[], 
    allTeams:[], 
    teamsCopy:[], 
    post:[] };

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GET_ALL_DRIVERS:
            return {...state, allDrivers: action.payload, driversCopy: action.payload};
        case GET_DRIVER_BY_ID:
            return {...state, driverById: action.payload, driverByIdCopy: action.payload};
        case GET_DRIVER_BY_NAME:
            return {...state, allDrivers: action.payload, driversCopy: action.payload};
        case POST_DRIVER:
            return {...state};
        case GET_ALL_TEAMS:
            return {...state, allTeams: action.payload, driversCopy: action.payload};
        default: 
            return state;
    }
}

export default rootReducer;
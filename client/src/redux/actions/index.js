import axios from "axios";

export const GET_ALL_DRIVERS = "GET_ALL_DRIVERS";
export const GET_DRIVER_BY_ID = "GET_DRIVER_BY_ID";
export const GET_DRIVER_BY_NAME = "GET_DRIVER_BY_NAME";

export function getAllDrivers() {
    return async function(dispatch) {
        const response = await axios("http://localhost:5000/drivers");
        return dispatch({
            type: "GET_ALL_DRIVERS", 
            payload: response.data
        });
    };
}
export function getDriverById(id) {
    return async function(dispatch) {
        const response = await axios(`http://localhost:5000/drivers/${id}`);
        return dispatch({
            type: "GET_DRIVER_BY_ID", 
            payload: response.data
        });
    };
}

export function getDriversByName(name) {
    return async function(dispatch) {
        const response = await axios(`http://localhost:5000/drivers/?=${name}`);
        return dispatch({
            type: "GET_DRIVER_BY_NAME", 
            payload: response.data
        });
    };
}

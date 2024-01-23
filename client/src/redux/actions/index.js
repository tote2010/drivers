import axios from "axios";

export const GET_ALL_DRIVERS = "GET_ALL_DRIVERS";
export const GET_DRIVER_BY_ID = "GET_DRIVER_BY_ID";
export const GET_DRIVER_BY_NAME = "GET_DRIVER_BY_NAME";
export const POST_DRIVER = "POST_DRIVER";
export const GET_ALL_TEAMS = "GET_ALL_TEAMS";

export function getAllDrivers() {
    return async function(dispatch) {
        const response = await axios.get("http://localhost:5000/drivers");
        return dispatch({
            type: "GET_ALL_DRIVERS", 
            payload: response.data
        });
    };
}
export function getDriverById(id) {
    return async function(dispatch) {
        const response = await axios.get(`http://localhost:5000/drivers/${id}`);
        return dispatch({
            type: "GET_DRIVER_BY_ID", 
            payload: response.data
        });
    };
}

export function getDriversByName(name) {
    return async function(dispatch) {
        const response = await axios.get(`http://localhost:5000/drivers/?=${name}`);
        return dispatch({
            type: "GET_DRIVER_BY_NAME", 
            payload: response.data
        });
    };
}

export function addDriver(payload) {
    return async function(dispatch) {
        try {
            const response = await axios.post(`http://localhost:5000/drivers`, payload);
            //return response;
            return dispatch({
                type: "POST_DRIVER", 
                payload: response.data
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export function getAllTeams() {
    return async function(dispatch) {
        const response = await axios("http://localhost:5000/teams");
        return dispatch({
            type: "GET_ALL_TEAMS", 
            payload: response.data
        });
    };
}

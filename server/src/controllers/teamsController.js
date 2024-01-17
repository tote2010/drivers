const { Team } = require("../db.js");

const axios = require("axios");


const getAllTeams = async() => {

    const teamsAPI = (await axios.get(`http://localhost:5000/drivers`)).data;
    return teamsAPI;
};

module.exports = getAllTeams;
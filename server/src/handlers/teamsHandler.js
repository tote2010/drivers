const { getAllteams } = require("../controllers/teamsController.js");

const getDriversHandler = (req, res) => {

    try {
        const response = getAllTeams();
        console.log("res:", res.data)
        res.status(200).json(response);

        // console.log(res);
        // res.status(200).send("Entramos");
    } catch (error) {
        res.status(400).json({error: error.msj});
    }
};

module.exports = getTeamsHandler;
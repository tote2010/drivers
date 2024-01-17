const { Router } = require("express");
const getTeamsHandler = require('../handlers/teamsHandler');

const teamsRouter = Router();

teamsRouter.get('/', getTeamsHandler);

module.exports = teamsRouter;
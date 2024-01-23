const { Router } = require("express");

const { getDriversHandler, 
        getDriversByIdHandler, 
        getDriverByNombreHandler, 
        postDriverHandler 
    } = require('../handlers/driversHandler.js');

const driversRouter = Router();

driversRouter.get('/', getDriversHandler);
driversRouter.get('/:id', getDriversByIdHandler);
driversRouter.get('/?nombre', getDriverByNombreHandler);
driversRouter.post('/', postDriverHandler);

module.exports = driversRouter;
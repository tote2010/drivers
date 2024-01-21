const { Router } = require("express");
const { getDriversHandler, getDriverByNombreHandler, getDriversByIdHandler, postDriverHandler } = require('../handlers/driversHandler');


//Al de'pe
const { Driver } = ("../db.js");

const driversRouter = Router();
//Hasta acá corre bien

// driversRouter.get("/drivers", (req, res) => {
//     res.send(`<h1>Soy el controlador principal</h1>`);
// });


driversRouter.get('/', getDriversHandler);

// Add from codiumAI -???
driversRouter.post('/', postDriverHandler);


// driversRouter.get('/', (req, res) => {
//     console.log(res);
//     res.status(200).send("Entramos");
// });



driversRouter.get('/:id', getDriversByIdHandler);
driversRouter.get('/?nombre', getDriverByNombreHandler);
//driversRouter.get('/drivers?name.forename', getDriversByNombreHandler);
driversRouter.post('/', postDriverHandler);

module.exports = driversRouter;
const { getAllDrivers, getDriverById, getDriverByName, createDriverDB } = require("../controllers/driversController.js");

const getDriversHandler = async (req, res) => {

    const { nombre } = req.query;

    try {
        if(nombre){
            const driverByName = await getDriverByName(nombre);
            res.status(200).json(driverByName);
        } else {
            const allDrivers = await getAllDrivers();
            res.status(200).json(allDrivers);
        }
    } catch (error) {
        res.status(400).json({error: error.msj});
    }
};
    
const getDriversByIdHandler = async (req, res) => {
    console.log("HANDLE");
    //const id = req.params.id;
    const { id } = req.params;

    //const source = typeof id === "Number" ? "bdd" : "api";
    const source = isNaN(id) ? "bdd" : "api";

    try {
        console.log("!id-API con IF"); // Corre!
        const response = await getDriverById(id, source);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.msj});
    }
};

const getDriverByNombreHandler = async (req, res) => {
    const { nombre } = req.query;

    try{
        const driverByName = await getDriverByName(nombre);
        req.status(200).json(driverByName);
    } catch(e) {
        return res.status(400).json({message : 'Falta el nombre'})
    }
};

const postDriverHandler = async (req, res) => {
    const { 
        nombre, 
        apellido, 
        descripcion, 
        imagen, 
        nacionalidad, 
        nacimiento } = req.body;

     try {
        const response = await createDriverDB(
            nombre, 
            apellido, 
            descripcion, 
            imagen, 
            nacionalidad, 
            nacimiento);
        res.status(200).json(response);
     } catch (error) {
        res.status(400).json({error: error.message});
     }
    
}

module.exports = {
    getDriversHandler,
    getDriversByIdHandler,
    getDriverByNombreHandler,
    postDriverHandler
};
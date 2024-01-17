const { getAllDrivers, getDriverById, getDriverByName, createDriverDB } = require("../controllers/driversController.js");

const getDriversHandler = async (req, res) => {

    const { name } = req.query;
    try {
        if(name){
            const driverByName = await getDriverByName(name);
        } else {
            const response = await getAllDrivers();
            //console.log("res:", res.data)
            res.status(200).json(response);
        }

        // console.log(res);
        // res.status(200).send("Entramos");
    } catch (error) {
        res.status(400).json({error: error.msj});
    }
};
    
const getDriversByIdHandler = async (req, res) => {

    //const id = req.params.id;
    const { id } = req.params;

    const source = isNaN(id) ? "bdd" : "api";

    try {
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
        //res.status(200).send(`Entramos detalle por ${nombre} de Drivers`);
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
const axios = require("axios");
const { Driver } = require("../db.js");

const cleanArray = (array) =>
  array.map((elemento) => {
    return {
      id: elemento.id,
      nombre: elemento.name.forename,
      apellido: elemento.name.surname,
      descripcion: elemento.description,
      image: elemento.image.url,
      nacionalidad: elemento.nationality,
      nacimiento: elemento.dob,
      create: false,
    };
  });
const getAllDrivers = async() => {
    
    const driversDB = await Driver.findAll();
    const driversAPI = (await axios.get(`http://localhost:5000/drivers`)).data;
    
    const driversApiFiltered = cleanArray(driversAPI);
    
    return [...driversApiFiltered, ...driversDB];
};


const getDriverById = async(id, source) => {

    if (source === "api"){
        console.log(id, source);
        const driversByIdAPI = (await axios.get(`http://localhost:5000/drivers/${id}`)).data;
        const driversApiFiltered = cleanArray(driversByIdAPI);
        if(driversByIdAPI) console.log("Existe")
        else console.log(vacio)
        //console.log(driversByIdAPI)
        return driversApiFiltered;
    } else if (source === "bdd") {
        console.log(id, source);
        const driversByIdDB = await Driver.findByPk(id);
        return driversByIdDB;
    }
    //return await Driver.findOne({_id: id}).select('-__v');
}

const getDriverByName = async(nombre) => {

    const driversDbByName = await Driver.findOne({where: {nombre: nombre}});
    const driversAPIByName = (await axios.get(`http://localhost:5000/drivers/`)).data;

    const driversApiByIdFiltered = cleanArray(driversAPIByName);
    const driverAPIByName = driversApiByIdFiltered.filter(e => e.nombre.toLowerCase().includes(nombre.toLowerCase()));
    //return driverAPIByName;
    return [driversDbByName, driverAPIByName];
    // return [... driverDbFiltered, ... driverApiFiltered];
}

const createDriverDB = async (
    nombre, 
    apellido, 
    descripcion, 
    imagen, 
    nacionalidad, 
    nacimiento) => {
    return await Driver.create({ 
        nombre, 
        apellido, 
        descripcion, 
        imagen, 
        nacionalidad, 
        nacimiento});
};

module.exports = { 
    createDriverDB, 
    getDriverById, 
    getAllDrivers,
    getDriverByName 
};
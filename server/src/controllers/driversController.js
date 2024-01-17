const { Driver } = require("../db.js");
//const driverSchema = require("../utils/driversShema.js");

//const fetch = require("node-fetch");
const axios = require("axios");


// const getAllDrivers = async (url) => {
//     const response = await fetch('localhost:5000/drivers');
//     //if (!response.ok) 
//       //throw new Error("WARN", response.status);
//     const data = await response.text();
//     return data;
//   }
  
//   const resultOk = await request("/robots.txt");
//   const resultError = await request("/nonExistentFile.txt");

// async function getAllDrivers() {
// 	try {
		
        
//         // const res = await axios.get('http://localhost:5000/drivers').then(res => {
//         //     const persons = res.data;
//         //     });
        
//         const res = await axios.get('http://localhost:5000/drivers');
//         //const res = await Driver.findAll();
//         //return axios.get(res, { headers: { Accept: 'application/json', 'Accept-Encoding': 'identity' }, params: { trophies: true } })
//         return res.data;
// 	} catch (error) {
//         throw error;
// 	}
// }
//getAllDrivers();
//getAllDrivers().then(console.log).catch(console.error);


const getAllDrivers = async() => {
    const driversDB = await Driver.findAll();
    // console.log(driversDB.dataValues);
    //return driversDB;

    const driversAPI = (await axios.get(`http://localhost:5000/drivers`)).data;
    //console.log(driversAPI);
    //console.log(driversAPI);
    
    const driversApiFiltered = driversApiFilter(driversAPI);
    //console.log(driversAPI, driversDB);
    //return driversDB;
    return driversApiFiltered;
};

const driversApiFilter = (arr) => {
    arr.map((Driver) => {
        return {
            nombre: name.forename,
            apellido: name.surname,
            imagen: image.url,
            nacionalidad: nationality,
            created: false  //TAG: sirve para validar si la data recivida viene desde la db(true) o la api(false)
        };
    });
};

const getDriverById = async(id, source) => {

    // const user = source === 'API' ?
    //     (await axios.get(`http://localhost:5000/drivers/${id}`)).data :
    //     await Driver.findByPk(id);
    // return user;
    
    if (source === "api"){
        const driversByIdAPI = (await axios.get(`http://localhost:5000/drivers/${id}`)).data;
        const driversApiFiltered = driversApiFilter(driversByIdAPI);
        return driversApiFiltered;
    } else if (source === "bdd") {
        const driversByIdDB = await Driver.findByPk(id);
        return driversByIdDB;
    }
    //return await Driver.findOne({_id: id}).select('-__v');
}


const getDriverByName = async(nombre) => {
    const driversDBByName = await Driver.findOne({where: {nombre: nombre}});
    //return driversDBByName;
    
    const driversAPI = (await axios.get(`http://localhost:5000/drivers/`)).data;
    const driversApiFiltered = driversApiFilter(driversAPI);

    const driverFiltered = driversApiFiltered.filter((driver)=>driver.forename.surname===nombre);
    
    return [...driversDBByName, ... driverFiltered];
    // const driverDbFiltered = await Driver.findAll({where: {nombre: nombre}});
    // const driverApiFiltered = driversApiFiltered.filter(((Driver) => driver.name.forename === nombre));
    
    // return [... driverDbFiltered, ... driverApiFiltered];
};
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
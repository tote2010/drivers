const { Driver } = require("../models/Driver.js");

const driversApiFilter = (arr) => {
    arr.map((Driver) => {
        return {
            nombre: name.forename,
            apellido: name.surname,
            imagen: image.url,
            nacionalidad: nationality,
            created: false
        }
    });
};

//module.exports = driversApiFilter;
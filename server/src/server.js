const express = require("express");
const router = require("./routes/mainRouter.js");
const morgan = require("morgan");
const cors = require("cors");
const BodyParser = require( 'body-parser' );

const server = express();







// // Parse request of content-type - application/x-www-form-urlencoded
server.use( BodyParser.urlencoded( { extended: false } ) );

// // Parse request of content-type - application/json
server.use( BodyParser.json() );


// server.get( '/', function( req, res ) {
// 	res.json( {
// 		status: "OK"
// 	} );
// } );

// server.get( '/test', function( req, res ) {
// 	res.json( {
// 		status: "Hehehe Test"
// 	} );
// } );

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3001"); //update to match the domain you will make the request from
    res.header("Access-Control-Allow-Credentials", "true"); 
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

// server.use((req, res, next) =>{
//     console.log("Acá estoy");
//     next();
// });

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router);

module.exports = server;

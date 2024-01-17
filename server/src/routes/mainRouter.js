const { Router } = require("express");
const driversRouter = require("./driversRouter");
// const teamsRouter = require("./teamsRouter");

const router = Router();


router.use("/drivers", driversRouter);



// Este entre perom da un 404

// router.use((req, res, next) =>{
//     console.log("Acá estoy");
//     next();
// });


//Este corre bien

// router.get("/drivers", (req, res) => {
//     res.send(`<h1>Soy el controlador principal</h1>`);
// });

// router.use("/drivers", driversRouter);
// router.use("/teams", teamsRouter);

module.exports = router;

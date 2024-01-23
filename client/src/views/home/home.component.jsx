import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllDrivers, getDriverById, getDriversByName } from "../../redux/actions/index.js";

import Navbar from "../../components/Navbar/navbar.component.jsx";
import Cards from "../../components/Cards/cards.component.jsx";
import Paginator from "../../components/Paginator/paginator.component.jsx";
import "./home.styles.css";

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

function Home() {

    const allDrivers = useSelector((state) => state.allDrivers);
    const [searchString, setSearchString] = useState("");
    const dispatch = useDispatch();

    //const drivers = cleanArray(allDrivers);

    
    //const [searchTerm, setSearchTerm] = useState("");
    //const [filtered, setFiltered] = useState(allDrivers);

    function handleChange(e){
        e.preventDefault();
        setSearchString(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault(); 
        dispatch(getDriversByName(searchString));
        // const filtered = allDrivers.filter((driver) => 
        //     driver.name.includes(searchString));
        //     setFiltered(filtered);
    }

    useEffect(() => { 
        dispatch(getAllDrivers());
        dispatch(getDriverById());
        dispatch(getDriversByName());
    // return (() => {
    //     clearDetail();
    //     });
    }, [dispatch]);

    // useEffect(() => { 
    //     dispatch(getDriverById());
    // }, [dispatch]);

    // useEffect(() => { 
    //     dispatch(getDriversByName());
    // }, [dispatch]);


    const [dataCant, setDataCant] = useState(9);
    const [currentPage, setCurrentPage] = useState(1);

    const endIndex = currentPage * dataCant;
    const initIndex = endIndex - dataCant;

    const nData = allDrivers.slice(initIndex, endIndex);
    const nPages = Math.ceil(allDrivers.length / dataCant);

    return(
        <div className="home-container">
            <h2 className="home-title">Home Page</h2>
            <Navbar handleChange={ handleChange } handleSubmit={ handleSubmit }/>
            {/* <Cards allDrivers={allDrivers} /> */}
            <Cards nData={nData}/>
            <Paginator setCurrentPage={setCurrentPage} currentPage={currentPage} nPages={nPages}/>
        </div>
    );
}

export default Home;
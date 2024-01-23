import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllDrivers, getDriverById, getDriversByName } from "../../redux/actions/index.js";

import Navbar from "../../components/Navbar/navbar.component.jsx";
import Cards from "../../components/Cards/cards.component.jsx";
import "./home.styles.css";

function Home() {

    const allDrivers = useSelector((state) => state.allDrivers);
    const [searchString, setSearchString] = useState("");
    const dispatch = useDispatch();

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

    return(
        <div className="home-container">
            <h2 className="home-title">Home Page</h2>
            <Navbar handleChange={ handleChange } handleSubmit={ handleSubmit }/>
            <Cards allDrivers = { allDrivers }/>
        </div>
    );
}

export default Home;
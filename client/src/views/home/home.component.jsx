import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllDrivers, getDriverById, getDriversByName } from "../../redux/actions/index.js";

import Navbar from "../../components/Navbar/navbar.component.jsx";
import Cards from "../../components/Cards/cards.component.jsx";
import "./home.styles.css";

function Home() {

    const dispatch = useDispatch();
    const allDrivers = useSelector((state) => state.allDrivers);
    const [searchString, setSearchString] = useState("");

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
    // return (() => {
    //     clearDetail();
    //     });
    }, [dispatch]);

    useEffect(() => { 
        dispatch(getDriverById());
    // return (() => {
    //     clearDetail();
    //     });
    }, [dispatch]);

    useEffect(() => { 
        dispatch(getDriversByName());
    // return (() => {
    //     clearDetail();
    //     });
    }, [dispatch]);

    return(
        <div className="home">
            <h2 className="home-title">Home Page</h2>
            <Navbar handleChange={ handleChange } handleSubmit={ handleSubmit }/>
            <Cards allDrivers = { allDrivers }/>
        </div>
    );
}

export default Home;
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getDrivers } from "../../redux/actions/index.js";

import Navbar from "../../navbar/navbar.component.jsx";
import Cards from "../../Cards/cards.component.jsx";
import "./home.styles.css";

function Home() {

    const dispatch = useDispatch();
    const allDrivers = useSelector((state) => state.allDrivers);

    //const [searchTerm, setSearchTerm] = useState("");
    const [filtered, setFiltered] = useState(allDrivers);
    const [searchString, setSearchString] = useState("");

    function handleChange(e){
        e.preventDefault();
        setSearchString(e.targe.value);
    }

    function handleSubmit() {
        const filtered = allDrivers.filter((driver) => 
            driver.name.includes(searchString));
            setFiltered(filtered);
    }

    useEffect(() => { 
        dispatch(getDrivers());
    // return (() => {
    //     clearDetail();
    //     });
    }, [dispatch]);

    return(
        <div className="home">
            <h2 className="home-title">Home Page</h2>
            <Navbar handleChange={ handleChange } handleSubmit={ handleSubmit }/>
            <Cards allDrivers = { filtered }/>
        </div>
    );
}

export default Home;
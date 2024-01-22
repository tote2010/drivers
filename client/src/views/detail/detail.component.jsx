import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDriverById } from "../../redux/actions/index.js";
import "./detail.styles.css";
import CardDetails from "../../components/CardDetails/cardDetails.component.jsx";


function Detail({ name, lastName, img, teams, id }) {

    const dispatch = useDispatch();
    const detaislDrivers = useSelector((state) => state.detailsDrivers);

    useEffect(() => { 
        dispatch(getDriverById());
    // return (() => {
    //     clearDetail();
    //     });
    }, [dispatch]);

    return(
        <div className="details">
            <CardDetails 
                className="card"
                name = { name }
                lastName = { lastName }
                img = { img } 
                teams = { teams }
                id = { id } 
                key = { id }
                // name = { detaislDrivers.name.forename }
                // lastName = { detaislDrivers.name.surname }
                // img = { detaislDrivers.image.url } 
                // teams = { detaislDrivers.teams }
                // id = { detaislDrivers.id } 
                // key = { detaislDrivers.id } 
            />
        </div>
    );
}

export default Detail;
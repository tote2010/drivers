import { Link } from "react-router-dom";
import "./card.styles.css";

function Card({ nombre, apellido, imagen, teams, id }) {

    return(
        <div className="card-container">
            <Link to={`/home/${id}`}>
                <h2>{ nombre } { apellido }</h2>
                <img src={ imagen } alt={ nombre } />
                <p>{ imagen }</p>
                <p>{ teams }</p>
            </Link>
        </div>
    );
}

export default Card;
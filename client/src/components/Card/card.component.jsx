import { Link } from "react-router-dom";
import "./card.styles.css";

function Card({ name, lastName, img, teams, id }) {
console.log(id)
    return(
        <div className="card-container">
            <Link to={`/home/${id}`}>
                <h2>{ name } { lastName }</h2>
                <img src={ img }/>
                <p>{ teams }</p>
            </Link>
        </div>
    );
}

export default Card;
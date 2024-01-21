import "./card.styles.css";

function Card({ name, lastName, img, teams }) {

    //console.log(driver);
    //const { image, name, teams} = driver;
    return(
        <div className="card-container">
            <h2>{ name } { lastName }</h2>
            <img src={img}/>
            <p>{ teams }</p>
        </div>
    );
}

export default Card;
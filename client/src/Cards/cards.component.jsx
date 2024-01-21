import Card from "../Card/card.component";
import "./cards.styles.css";

function Cards({ allDrivers }) {

    const driversList = allDrivers;

    return(
        <div className="cards-list">
            { driversList?.map((driver) => (
                <Card className="card"
                    name = { driver.name.forename }
                    lastName = { driver.name.surname }
                    img = { driver.image.url } 
                    teams = { driver.teams } 
                    key = { driver.id } 
                />
                ))
            };            
        </div>
    );
}

export default Cards;
import Card from "../Card/card.component";
import "./cards.styles.css";

function Cards({ allDrivers }) {

    const driversList = allDrivers;

    return(
        <div className="cards-list">
            { driversList?.map((driver) => (
                <Card className="card"
                    name = { driver.nombre }
                    lastName = { driver.apellido }
                    img = { driver.imagen } 
                    teams = { driver.teams }
                    id = { driver.id } 
                    key = { driver.id } 
                />
                ))
            };            
        </div>
    );
}

export default Cards;
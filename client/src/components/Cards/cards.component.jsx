import Card from "../Card/card.component";
import "./cards.styles.css";

function Cards({ nData }) {
    console.log(nData[1])

    return(
        <div className="cards-list">
            { nData?.map((driver) => (
                <Card className="card"
                    nomre = { driver.nombre }
                    apellido = { driver.apellido }
                    imagen = { driver.imagen } 
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
import { useNavigate } from "react-router-dom";

import "./landing.styles.css";

function Landing () {

  const navigateTo = useNavigate();

  const handleClick= () =>{
    navigateTo("/home");
  }

  return (
    <div className={"container"}>
      <h1>Bienvenido a DRIVER PI</h1>
      <h2 className="h2">
        ¿Interesado en la F1 ?
        <br /> Esta app te va mostrar!
      </h2>
      <button onClick={handleClick} className="boton" >
        Go !
      </button>
    </div>
  );
}

export default Landing;
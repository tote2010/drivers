import "./navbar.styles.css";

function Navbar({ handleChange, handleSubmit }) {
    return(
        <div className="search-box">
            <form onChange={ (e) => handleChange(e) } >
                <input placeholder="Búsqueda" type="search"></input>
                <button type="submit" onClick={ handleSubmit }>Buscar</button>
            </form>
        </div>
    );
}

export default Navbar;
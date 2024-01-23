import React from "react";

 const Paginator = ({currentPage, nPages, setCurrentPage})=> {
    
    const next = () => {
        if(currentPage !== nPages) setCurrentPage(currentPage + 1)
    }

    const prev = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }

    return(
        <div className="paginator" style={{display:"flex", justifyContent:"space-around"}}>
            {/* <Link onClick={prev}>Prev</Link> */}
            <h3 onClick={prev}>Anterior </h3>
            &nbsp;
            <h3> {currentPage} / {nPages} </h3>
            &nbsp;
            <h3 onClick={next}> Siguiente</h3>
        </div>
    )
};

export default Paginator;
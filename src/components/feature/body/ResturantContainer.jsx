import React from "react";

import './ResturantContainer.css'

const ResturantContainer = () =>{
    return(
        <div className="res-card">
            <h3>
                Bihari Resturant
            </h3>
        </div>
    );
}
export default React.memo(ResturantContainer)
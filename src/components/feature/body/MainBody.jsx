import React from "react";

import ResturantContainer from './ResturantContainer'
import './MainBody.css'
import {SEARCH_RESTURANT} from '../../constants/constant'

const MainBody = () =>{
    return(
        <div className="main-body">
           <div className="search">
                <input type="text" placeholder={SEARCH_RESTURANT}/>
           </div>
           <div className="resturant-container">
            <ResturantContainer />
           </div>
        </div>
    );
}
export default MainBody;
import React, { useEffect, useState } from "react";

import './ResturantContainer.css'
import CardData from '../../../data/CardData'
import StarIcon from '@mui/icons-material/Star';

import Veg from "../../common/Veg";
import NonVeg from "../../common/NonVeg";

const ResturantContainer = () =>{
    const [data, setData] = useState(CardData);
    useEffect(() =>{
        console.log("CardData-",CardData)
    },[])
    return(
        <div className="rest-container">
            {data?.map((value, index) =>{
                return(
                    <div className="res-card">
                        <img className="rest-image" alt="Resturant Image" src={value.imageLink} />
                        <div className="name-type">
                            <h3 className="rest-name">{value.resturantName}</h3>        
                            <div className="rest-type">{value.veg ? <Veg/> : <NonVeg/>}</div>
                        </div>
                        <p className="cusion">
                            {value.cusion.map((v) =>{
                                return(
                                    <span>{v} </span>
                                );
                            })}
                        </p>
                        <div className="rating-devlivery-time">
                            <span><StarIcon/></span>
                            <span className="rating">{value.rating}</span>
                            <span className="delivery-time">{value.develiryTime}</span>
                        </div>
                        <h4 className="discount">{value.offer}</h4>
                    </div>
                );
                })}
        </div>
    );
}
export default React.memo(ResturantContainer)
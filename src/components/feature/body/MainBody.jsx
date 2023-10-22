import React, { useState } from "react";
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

import ResturantContainer from './ResturantContainer'
import './MainBody.css'
import {SEARCH_RESTURANT} from '../../constants/constant'
import DisplayFoodName from './DisplayFoodName'

const chipStyle = {
    backgroundColor: 'skyblue'
}
const MainBody = () =>{
    const [isPureVegChipClicked, setIsPureVegChipClicked] = useState(false)
    const [isNIChipClicked, setIsNIChipClicked] = useState(false)
    const [isSIChipClicked, setIsSIChipClicked] = useState(false)
    const [isPizzaChipClicked, setIsPizzaChipClicked] = useState(false)
    const [isSFChipClicked, setIsSFChipClicked] = useState(false)
    const handleClickPureVeg = () => {
        setIsPureVegChipClicked(!isPureVegChipClicked)
    };
    const handleClickNorthIndian = () => {
        setIsNIChipClicked(!isNIChipClicked)
    };
    const handleClickSouthIndian = () => {
        setIsSIChipClicked(!isSIChipClicked)
    };
    const handleClickPizza = () => {
        setIsPizzaChipClicked(!isPizzaChipClicked)
    };
    const handleClickStreetFood = () => {
        setIsSFChipClicked(!isSFChipClicked)
    };

    return(
        <div className="main-body">
           <div className="search">
                <div className="display-food-name">
                    <DisplayFoodName />
                </div>
                <input type="text" placeholder={SEARCH_RESTURANT}/>
                <div className="chip-head">
                    <Stack className="chip-items" direction="row" spacing={2}>
                        <Chip 
                            size="small" 
                            style={isPureVegChipClicked ? chipStyle : {}} 
                            label="Pure Veg" 
                            variant="outlined" 
                            onClick={handleClickPureVeg} 
                        />
                        <Chip 
                            size="small" 
                            style={isNIChipClicked ? chipStyle : {}}
                            label="North Indian" 
                            variant="outlined" 
                            onClick={handleClickNorthIndian} 
                        />
                        <Chip 
                            size="small" 
                            style={isSIChipClicked ? chipStyle : {}}
                            label="South Indian"
                            variant="outlined" 
                            onClick={handleClickSouthIndian} 
                        />
                        <Chip 
                            size="small" 
                            style={isPizzaChipClicked ? chipStyle : {}}
                            label="Pizza" 
                            variant="outlined" 
                            onClick={handleClickPizza} 
                        />
                        <Chip 
                            size="small" 
                            style={isSFChipClicked ? chipStyle : {}}
                            label="4+ Rating" 
                            variant="outlined" 
                            onClick={handleClickStreetFood} 
                        />
                    </Stack>
                </div>
           </div>
           <div className="resturant-container">
            <ResturantContainer />
           </div>
        </div>
    );
}
export default MainBody;
import React from "react";

const circle = {
    height: '5px',
    width: '5px',
    backgroundColor: 'green',
    borderRadius: '50%',
    position: 'relative',
    top: '25%',
    left: '25%'
}
  
const square = {
    height: '10px',
    width: '10px',
    border: '2px solid green'
}
const Veg = () =>{
    return(
        <div style={square}>
            <div style={circle}></div>
        </div>
    );
}
export default React.memo(Veg)
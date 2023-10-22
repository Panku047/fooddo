import React from "react";

const circle = {
    height: '5px',
    width: '5px',
    backgroundColor: 'red',
    borderRadius: '50%',
    position: 'relative',
    top: '25%',
    left: '25%'
}
  
const square = {
    height: '10px',
    width: '10px',
    border: '2px solid red'
}
const NonVeg = () =>{
    return(
        <div style={square}>
            <div style={circle}></div>
        </div>
    );
}
export default React.memo(NonVeg)
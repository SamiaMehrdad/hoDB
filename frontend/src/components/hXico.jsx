
import React from "react";

function Xico( className) {

    const closeClicked = () => {    
        console.log("closeClicked ");
    }

    return (
        <span  onClick= {closeClicked} className={`absolute z-50 icon hov  right-2  top-1 text-brandR text-[20px] ${className}`}></span>
    );
}

export default Xico;
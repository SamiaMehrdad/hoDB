import React from "react";

function HomeSponsor( {data} ) {
const logo = data.logo;
const name = data.name;
const url = data.url;
//console.log("DATA = "+data.name);
    return (
        <div className=" flex hov border border-light w-[120px] h-[120px] m-[2%] ">
            <p>{name}</p>
        </div>
    )
}

export default HomeSponsor;

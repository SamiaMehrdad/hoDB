import React from "react";

function HomeShowcase( {data}) {
   const image = data.img;
    const name = data.name;
    const body = data.body;
// console.log(data.img);
    return (
        <div className="w-[380px] text-xs flex text-hi1 m-8" >   
                                        {image && <img src={image} alt={name}
                                        className="border-4 border-brandG w-[120px] h-[120px] mx-4  drop-shadow-lg rounded-full"
                                        />}
                                        <div className="w-[240px]">{body}
                                        <p className="my-4 ">{name}</p>
                                        </div>
        </div>
    );
}

export default HomeShowcase;
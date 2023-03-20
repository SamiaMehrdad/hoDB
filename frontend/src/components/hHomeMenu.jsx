import React from "react";

function HomeMenu( {show, items} ) {

    return (
        <div className={`
                                            fixed z-20  w-[280px] h-[395px]   bg-brandG rounded-bl-[82px] drop-shadow-2xl
                                            transition-all duration-500  ease-out opacity-90 right-0
                                            ${show ? "right-0 top-0 ": " -top-full "}
                                        ` }> 
                <div className={` ml-[5px] icon w-[275px] h-[390px] bg-brandB  rounded-bl-[80px] opacity-90  py-2  `}>

    {Object.keys(items).map( (key) => (
        <p key={key} className=" text-[24px] py-[12px] px-6 hov"> 
        { items[key][2]+' '+items[key][0] } 
        </p> 
    ) ) }
    </div>
        </div>
    );
}

export default HomeMenu;
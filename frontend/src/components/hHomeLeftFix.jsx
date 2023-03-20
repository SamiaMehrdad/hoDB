import React from "react";

function HomeLeftFix(props ){
    return (
        <div className={` hidden 
        flex 
                                            flex-col
                                            md:block 
                                            md:w-[20%]  
                                            h-screen 
                                            lg:w-[15%] 
                                            fixed 
                                            p-4
                                            drop-shadow-xl
                                            `}>
                        <div className= {`h-full
                                                        bg-hi2
                                                        rounded-full
                                                        flex justify-center 
                                                        items-center
                                                        `}>
                            <div className="flex flex-col a-c h-[98%] w-[90%]  border-4 rounded-full  border-brandG bg-darkGray" >
                            
                            {props.children}

                            </div>
                        </div>

        </div>
    );
}

export default HomeLeftFix;
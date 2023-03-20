import React from "react";

function HomeContent( props) {
    return (
        <div className={`flex 
                                        leading-relaxed
                                        my-2  
                                        z-10
                                        lg:my-1
                                        p-4
                                        text-md
                                        ${props.className}`}
                                        style={{ order: props.right ? "1": "0" }}
                                        >   
           {props.children}
        </div>
    );
}

export default HomeContent;
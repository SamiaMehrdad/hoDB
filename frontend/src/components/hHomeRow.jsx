import React from "react";

function HomeRow({ className, children }) {
    return (
      <div className={`flex
                                        flex-col
                                        items-center 
                                        md:flex-row 
                                        md:justify-center 
                                        lg:pl-[10%] 
                                        md:pl-[20%] 
                                        text-hi1
                                        p-8
                                        mr-[-60px]
                                        ${className}`} 

                                        
                                        >
        {children}
      </div>
    );
  }

export default HomeRow;
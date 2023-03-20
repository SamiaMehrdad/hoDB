import React from "react";
import Xico from "./hXico";


function Modal({ show, children, className, ...props }) {
  return (
    <div className = {`fixed transition-all duration-1000 z-50 top-0 left-0 w-full h-full bg-sh1  ${show? " fixed opacity-100": " hidden opacity-0"}`} >
        
<div className={`flex  a-c top-0 left-0 w-full h-full transition-all duration-1000 ${show? "top-0 scale-1": " top[-100%] -scale-0"} `} >
            <div className={`overflow-auto p-4 bg-hi2 border border-brandG  backdrop-blur-md z-50 ${className} `} {...props}>
                <Xico />
                {children}
            </div>
</div>
    </div>
  );
  }

export default Modal;
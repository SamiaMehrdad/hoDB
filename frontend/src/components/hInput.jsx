import React from 'react';

const Input = ({  className, ...props }) => {
  return (
    <input  className={`bg-transparent 
                        text-lightGray  
                        border-b-2 
                        border-lightGray  
                        px-2 
                        active:bg-sh1 
                        focus:outline-0 
                        ${className}`} />
  );
};

export default Input;
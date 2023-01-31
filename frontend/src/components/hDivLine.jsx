import React from 'react';

const DivLine = ({ title, className, ...props }) => {
  return (
<div className="flex h-[24px] t-m ">
  <div className=" flex-1 h-1/2 border-b"></div>
  <div className={`px-2 flex-0 text-lightGray ${className}`} {...props}> {title} </div>
  <div className="flex-1 h-1/2  border-b"></div>
</div>

  );
};

export default DivLine;
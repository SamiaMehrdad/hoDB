import React from 'react';

const Btn = ({ children, className, ...props }) => {
  return (
    <button className={`px-6 py-2 rounded-md t-m leading-5 text-bright bg-brandB hov hover:brightness-125 active:brightness-75 ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Btn;

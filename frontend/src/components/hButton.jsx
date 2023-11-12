// component for a button with hover and active states
// exported component: Btn
// 2023 Mehrdad Samia -  All Rights Reserved
// --------------------------------------------------//
import React from 'react';

const Btn = ({ children, className, ...props }) => {
  return (
    <button className={`px-6 py-2 rounded-md t-m leading-5 text-bright bg-brandB hov hover:brightness-100 active:brightness-75 ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Btn;

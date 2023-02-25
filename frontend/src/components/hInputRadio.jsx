// add comment to this code
import React, { useState } from 'react';

function InputRadio( props ) {
    const [state, setState] = useState(props.default? props.default: false);
   
    const handleChange = (event) => {
        setState(!state);
    }

    return ( 
        <div className="inline">
            <span className={ ` p-[1px] icon text-[8px] 
                                                    border rounded-full border-light
                                                    ${state ? 'text-green-400' : 'text-lightGray'} ` }>
               
            </span>
            <span className={` ${props.disabled? '':'hov'} ${props.className}`} 
                    onClick={handleChange} >
                        {' ' + props.title}
            </span> 
            </div>
    );
  }
   
  export default InputRadio;
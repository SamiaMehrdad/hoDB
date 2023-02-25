
import React, { useState } from 'react';

function Radio( props ) {

    const levelColors = ['gray', 'green', 'red', 'orange'];
    const [state, setState] = useState(props.default? props.default: 0);

    if( props.level > levelColors.length )
        console.error('Radio: level is too high');
    
    const handleChange = (event) => {
      if( ! props.disabled ) 
        state >= props.level-1 ? setState(0): setState(state + 1);
    }

    return ( 
        <div className={`inline ${props.disabled? 'text-lightGray': 'text-light' }`}>
            <span className='p-[1px] icon text-[8px] border rounded-full border-light' 
                                style = {{color: levelColors[state] }} >
                
            </span>
            <span className={` ${props.disabled? '':'hov'} ${props.className}`} 
                    onClick={handleChange} >
                        {' ' + props.title}
            </span>
        </div>
        );
  }
   
  export default Radio;
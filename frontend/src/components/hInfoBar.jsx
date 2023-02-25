 //*  comment: text
import React from 'react';

 function InfoBar( props ) {
    return ( 
        <div id="hint" className="fixed   bottom-1 text-brandG t-m" >
            {props.hintText}
        </div>
        );
  }
   
  export default InfoBar;
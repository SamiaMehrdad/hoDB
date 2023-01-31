
import { useState } from "react";
import { ST } from "../share/index";

function Tmenu( props ) {
  const menuData=props.context;
  var title = menuData.title;
  var items = [];
  var icons = []; 
  var menuItems = [];

  const [hidden, setHidden] = useState(ST.menuHide);
  console.log('ST.menuHide: ' + ST.menuHide+ ' / hidden: ' + hidden);
  function passIt(i)  {
    //console.log(i);
    setHidden( true );
    props.onClick(items[i]);
  }

  for( const [key, value] of Object.entries(menuData.items) )
  { 
        items.push( value[0] ); 
        value[2] ?
          icons.push( value[2] + ' ' )
          : icons.push('  '); // two solid spaces
  }
  for( let i = 0; i < items.length; i++ ) //* MSK: should be 'let' instead of 'var' to work 
  {
     menuItems.push( <p className='
                                        relative
                                        m-[5px]
                                        z-50
                                        a-left
                                        hov
                                        ' 
                                        key = {i}
                                        //pass the index to the parent
                                        onClick={() => passIt(i)} >
                        <span className='icon text-brandG' >{icons[ i ]} </span>
                      {items[ i ]}
                      </p>
                   );
  }
    //console.log(menuItems);

    return ( 
      hidden? null: (
      <div>
        <div className='
                          fixed 
                          bg-lightGray 
                          text-light border 
                          border-brandG
                          overflow-hidden
                          z-50
                          min-w-[100px]
                          drop-shadow-xl
                           ' 
                          style={{right: props.right, top: props.top}} 
          >
          { title !== null ? 
           (
            <> 
              <div className='
                              bg-brandG 
                              text-light 
                              t-m 
                              p-1
                              w-full
                              a-left
                                '
              >
              {title}
             </div>
              <div className='
                              bg-darkGray
                              absolute
                              h-full
                              w-[25px]
                                '>
              </div>
            </> ) : null                  
          }
          <div style={{margin: '10px 0'}}>
             {menuItems}
         </div>
        </div>
      </div>
      )
    );
  }
   
  export default Tmenu;
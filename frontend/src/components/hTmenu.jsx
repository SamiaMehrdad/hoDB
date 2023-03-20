
import { useState } from "react";
import  ST  from "../share/state";

function Tmenu( props ) {
  const menuData=props.context;
  var title = menuData.title;
  var items = [];
  var icons = []; 
  var menuItems = [];

  const [hidden, setHidden] = useState(ST.menuHide);
  // console.log("ST.menuHide: " + ST.menuHide+ " / hidden: " + hidden);
  // function to hide the menu and pass the index to the parent
  function passIt(i) 
   {
      setHidden( true );
      props.onClick(items[i]);
   }
  // building the menu items from the menuData
  for( const [key, value] of Object.entries(menuData.items) )
  { 
        items.push( value[0] ); 
        value[2] ?
          icons.push( value[2] + " " )
          : icons.push("    "); // four solid spaces
  }
// building an array of menu items as JSX elements
  for( let i = 0; i < items.length; i++ ) //* MSK: should be "let" instead of "var" to work 
  {
     menuItems.push( <p className="
                                        relative
                                        mx-[5px]
                                        z-50
                                        a-left
                                        hov
                                        " 
                                        key = {i}
                                        //pass the index to the parent
                                        onClick={() => passIt(i)} >
                        <span className="icon text-brandG" >{icons[ i ]} </span>
                      {items[ i ]}
                      </p>
                   );
  }

    return ( 
      hidden? null: (
      <div>
        <div className="
                          fixed 
                          bg-lightGray 
                          text-light border 
                          border-brandG
                          overflow-hidden
                          z-50
                          min-w-[100px]
                          drop-shadow-xl
                           " 
                          style={{right: props.right, top: props.top}} 
          >
          { title !== null ? 
           (
            <> 
              <div className="
                              bg-brandG 
                              text-light 
                              t-m
                              p-1
                              w-full
                              a-left
                              icon 
                                "
              >
              {title}
             </div>
              <div className="
                              bg-darkGray
                              absolute
                              h-full
                              w-[25px]
                                ">
              </div>
            </> ) : null                  
          }
          <div style={{margin: "10px 0"}}>
             {menuItems}
         </div>
        </div>
      </div>
      )
    );
  }
   
  export default Tmenu;
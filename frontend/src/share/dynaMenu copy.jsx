

import React from 'react';

 // click handler function for menu items
 function itemClick(key){
  console.log(key + ' clicked');

}

function MenuItem(props) {
    // Return a paragraph element with the icon and text. 
    // The 'icon' prop is optional, so we use the 'icon' prop if it exists, otherwise we use solid-spaces.
    // if the key starts with '_' then it is 'divider' , render a divider line instead of a menu item
    const key = props.theKey;
    const hint = props.hint;
    console.log('In MenuItem ->  Key =  '+key, 'Text = '+props.text );
  return (
    <>
      {  key.startsWith('_') ?  // divider line in format of _key
      <p className= " w-100 my-2 border border-light"> </p>
      :
      <p className="menuItem" key={key} hint={hint} onClick = {itemClick(key)} >
        <span className='icon text-brandG'> {props.icon? props.icon+' ' : "      "}</span>
        {props.text}
      </p>
    }
  </>
  );
}


function makeMenu(props , index) {

const menuData = props;
 // console.log('In MakeMenu ->  Index =  '+index );
  // Map over the keys of the 'menu' object and return an array of menu items
  return (
    <>
        <div key = {index}  id = {'menu'+index}  className='menu' style={{right: props.right, top: props.top}}  >
            <div className=" bg-darkGray absolute h-full w-[25px] "></div>
            { Object.keys(menuData).map((menuKey) => 
              {
              const menuItemData = menuData[menuKey];
              console.log('In makeMenu ->  menuKey =  '+menuKey +' of type : '+typeof(menuKey));
              // Render each menu item as a MenuItem component, passing in the 'text' and 'icon' values
              return (
                menuKey === "title" ? // menu title
                            <div className='menuTitle '>{menuData[menuKey]}</div> 
                :  // menu item
                            <MenuItem
                                theKey={menuKey}
                                text={menuItemData[0]}
                                icon={menuItemData[2]}
                                hint={menuItemData[1]}
                                />
      );
              }
            )}
            </div>
</>
        );
      }

      function DynaMenu(props) {
       const {index, menuData} = props;
        return (
          <>
            {makeMenu(menuData, index)}
          </>
        );
      }
export { DynaMenu };
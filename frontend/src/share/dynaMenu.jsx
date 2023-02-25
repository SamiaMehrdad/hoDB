/*
* Description: This file contains the DynaMenu component and its sub-components.
 The makeMenu function takes the menu data object and creates a menu component based on it. 
 The menu component is divided into two parts:
  a. The title of the menu (optional)
  b. The menu items
 The menu items are made using the MenuItem component. 
 The MenuItem component determines if the item is a divider( includes '_' in key) or a regular 
 menu item based on the key of the item.
 The DynaMenu function is used to wrap the makeMenu function in a memoized component. 
 This improves performance, and it also allows the menu data to be changed without the need
  to re-render the menu. 
*/

import React from 'react';

function itemClick(key) {
  console.log(`${key} clicked`);
}

function MenuItem({ theKey, hint, text, icon }) {
  // Determine if the menu item is a divider based on the key
  const isDivider = theKey.includes('_');

  // Return either a divider or a regular menu item
  return isDivider ? (
    // Divider line
    <p className="w-100 my-2 border border-light"></p>
  ) : (
    // Regular menu item
    <p className="menuItem" key={theKey} hint={hint} onClick={( ) => itemClick(theKey)}>
      <span className="icon text-brandG">{icon ? `${icon} ` : '     '}</span>
      {text}
    </p>
  );
}

function makeMenu({ right, top, ...menuData }, index) {
  // Create a menu component based on the provided menu data
  return (
    <div key={index} id={`menu${index}`} className="menu" style={{ right, top }}>
      {/* Add a placeholder element for the left border */}
      <div className="bg-darkGray absolute h-full w-[25px]"></div>
      {/* Render each menu item */}
      {Object.entries(menuData).map(([menuKey, [text, hint, icon]]) =>
        menuKey === 'title' ? (
          // Render the menu title as a separate component
          <div key={menuKey} className="menuTitle">
            {text}
          </div>
        ) : (
          // Render the menu item as a MenuItem component
          <MenuItem key={menuKey} theKey={`${menuKey}Menu${index}`} text={text} hint={hint} icon={icon} /> 
        )
      )}
    </div>
  );
}

// Wrap the makeMenu function in a memoized component
const DynaMenu = React.memo(({ index, menuData, ...restProps }) => {
  return <>{makeMenu({ ...menuData, ...restProps }, index)}</>;
});

export { DynaMenu };

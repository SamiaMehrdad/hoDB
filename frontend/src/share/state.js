// define global state handler object
import { useState } from "react";


const STATE = {
    menuHide: true, // all menus should check this flag to hide or show.
    activeElem: null, // indicate what element is clicked now. This should be reset to null by target function.
    command: '', // command to be executed. Target function should reset it to '' after execution.
    modalShow: true, // modal should check this flag to hide or show.
    
    // set: function (state ){
    //     state = true;
    // },
    // reset: function (state){
    //     state = false;
    // },
    // get: function (state){
    //     return state;
    // },
    // toggle: function (state){
    //     state = !state;
    // },
}
 


export default STATE;